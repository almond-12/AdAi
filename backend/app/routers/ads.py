"""
AI ad generation router: /api/ads/generate
Uses OpenAI GPT to produce ad copy variations.
Falls back to mock data if no API key is configured.
"""
import json
import random
from fastapi import APIRouter, Depends, HTTPException

from app.schemas import AdGenerateRequest, AdGenerateResponse, AdVariation
from app.dependencies import get_current_user
from app.config import settings

router = APIRouter(prefix="/api/ads", tags=["ads"])


def _mock_variations(req: AdGenerateRequest) -> list[AdVariation]:
    """Return believable mock ad variations when no OpenAI key is set."""
    templates = [
        AdVariation(
            headline=f"🔥 Limited Time — Discover {req.product_description[:30]}...",
            body=f"Don't miss out! {req.product_description} Perfect for {req.target_audience}. Act now before it's gone!",
            cta="Shop Now",
            score=random.randint(88, 96),
        ),
        AdVariation(
            headline=f"The Smarter Choice for {req.target_audience[:25]}",
            body=f"{req.product_description} Trusted by thousands. See why they love it.",
            cta="Learn More",
            score=random.randint(80, 90),
        ),
        AdVariation(
            headline=f"✨ Elevate Your Experience Today",
            body=f"Introducing: {req.product_description}. Designed for people who demand the best.",
            cta="Get Started",
            score=random.randint(82, 94),
        ),
    ]
    return templates[: req.num_variations]


async def _openai_variations(req: AdGenerateRequest) -> list[AdVariation]:
    """Call OpenAI to generate real ad copy variations."""
    try:
        from openai import AsyncOpenAI
        client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)

        prompt = f"""You are an expert digital advertising copywriter.
Generate {req.num_variations} ad copy variations for the following campaign:

Platform: {req.platform.value}
Objective: {req.objective.value}
Product/Service: {req.product_description}
Target Audience: {req.target_audience}
Tone: {req.tone}
Daily Budget: ${req.budget or 'Not specified'}

For each variation, provide:
- headline (max 40 chars for Meta, 100 for TikTok)
- body (max 125 chars for Meta, 150 for TikTok)
- cta (e.g. Shop Now, Learn More, Get Started)
- score (1-100 predicted CTR score)

Respond with a JSON array of objects with keys: headline, body, cta, score
"""
        response = await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"},
            temperature=0.8,
        )
        content = response.choices[0].message.content or "{}"
        data = json.loads(content)
        variations_data = data.get("variations", data) if isinstance(data, dict) else data
        return [AdVariation(**v) for v in variations_data[: req.num_variations]]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")


@router.post("/generate", response_model=AdGenerateResponse)
async def generate_ads(
    req: AdGenerateRequest,
    _current_user: dict = Depends(get_current_user),
):
    """
    Generate AI-powered ad variations.
    Uses OpenAI if OPENAI_API_KEY is set, otherwise returns mock data.
    """
    if settings.OPENAI_API_KEY and settings.OPENAI_API_KEY.startswith("sk-"):
        variations = await _openai_variations(req)
    else:
        variations = _mock_variations(req)

    return AdGenerateResponse(
        variations=variations,
        platform=req.platform,
        objective=req.objective,
    )

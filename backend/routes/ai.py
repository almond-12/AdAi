from fastapi import APIRouter, HTTPException
from models.schemas import AdGenerateRequest, AdGenerateResponse, AdVariant
import os
import json

router = APIRouter()

@router.post("/generate-ad", response_model=AdGenerateResponse)
async def generate_ad(req: AdGenerateRequest):
    """
    Generate AI ad copy variants.
    Uses OpenAI if API key is available, otherwise returns intelligent defaults.
    """
    api_key = os.getenv("OPENAI_API_KEY")
    
    if api_key and api_key != "your-openai-api-key":
        try:
            from openai import AsyncOpenAI
            client = AsyncOpenAI(api_key=api_key)
            prompt = f"""
Create 3 different ad copy variants for:
Product: {req.product_name}
Description: {req.product_description}
Target Audience: {req.target_audience}
Platform: {req.platform.value}
Tone: {req.tone}

For each variant, provide:
- headline (max 40 chars)
- body (max 125 chars)
- cta (call-to-action, max 20 chars)

Respond strictly as JSON: {{"variants": [{{"headline": "", "body": "", "cta": ""}}]}}
"""
            response = await client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": prompt}],
                response_format={"type": "json_object"}
            )
            result = json.loads(response.choices[0].message.content or "{}")
            return AdGenerateResponse(variants=[AdVariant(**v) for v in result.get("variants", [])])
        except Exception as e:
            print(f"OpenAI error: {e}")
    
    # Fallback mock response
    variants = [
        AdVariant(
            headline=f"Transform Your {req.product_name} Today",
            body=f"Discover {req.product_name} — crafted for {req.target_audience}. Shop now and get 20% off your first order.",
            cta="Shop Now"
        ),
        AdVariant(
            headline="Limited Time Offer Inside",
            body=f"Don't miss out on {req.product_name}. Quality you can feel, prices you'll love. Free shipping included.",
            cta="Claim Offer"
        ),
        AdVariant(
            headline="Join 10,000+ Happy Customers",
            body=f"{req.product_name} — loved by {req.target_audience} everywhere. See why everyone's switching.",
            cta="Learn More"
        ),
    ]
    return AdGenerateResponse(variants=variants)

@router.post("/optimize")
async def get_optimization_tips(campaign_id: int):
    tips = [
        {"type": "tip", "message": "Increase budget by 20% — ROAS is trending upward", "impact": "high"},
        {"type": "warning", "message": "CPM is 22% above benchmark — refresh your creative assets", "impact": "medium"},
        {"type": "tip", "message": "Best audience: 25-34 female, fashion interests — expand targeting", "impact": "high"},
    ]
    return {"campaign_id": campaign_id, "tips": tips}

"""
Campaigns router: CRUD for ad campaigns.
GET /api/campaigns
POST /api/campaigns
GET /api/campaigns/{id}
"""
import uuid
from datetime import date
from fastapi import APIRouter, Depends, HTTPException, status

from app.schemas import Campaign, CampaignStatus, Platform
from app.database import get_all_campaigns, get_campaign, create_campaign
from app.dependencies import get_current_user

router = APIRouter(prefix="/api/campaigns", tags=["campaigns"])


@router.get("", response_model=list[Campaign])
async def list_campaigns(_current_user: dict = Depends(get_current_user)):
    """Return all campaigns for the authenticated user."""
    raw = get_all_campaigns()
    return [
        Campaign(
            id=c["id"],
            name=c["name"],
            platform=Platform(c["platform"]),
            status=CampaignStatus(c["status"]),
            spend=c["spend"],
            roas=c.get("roas"),
            impressions=c.get("impressions", 0),
            clicks=c.get("clicks", 0),
            created_at=c["created_at"],
        )
        for c in raw
    ]


@router.get("/{campaign_id}", response_model=Campaign)
async def get_one(campaign_id: str, _current_user: dict = Depends(get_current_user)):
    """Return a single campaign by ID."""
    c = get_campaign(campaign_id)
    if not c:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Campaign not found")
    return Campaign(
        id=c["id"],
        name=c["name"],
        platform=Platform(c["platform"]),
        status=CampaignStatus(c["status"]),
        spend=c["spend"],
        roas=c.get("roas"),
        impressions=c.get("impressions", 0),
        clicks=c.get("clicks", 0),
        created_at=c["created_at"],
    )


@router.post("", response_model=Campaign, status_code=status.HTTP_201_CREATED)
async def create_new(
    name: str,
    platform: Platform,
    _current_user: dict = Depends(get_current_user),
):
    """Create a new draft campaign."""
    data = {
        "name": name,
        "platform": platform.value,
        "status": "Draft",
        "spend": 0.0,
        "roas": None,
        "impressions": 0,
        "clicks": 0,
        "created_at": str(date.today()),
    }
    c = create_campaign(data)
    return Campaign(
        id=c["id"],
        name=c["name"],
        platform=Platform(c["platform"]),
        status=CampaignStatus(c["status"]),
        spend=c["spend"],
        roas=c.get("roas"),
        impressions=c.get("impressions", 0),
        clicks=c.get("clicks", 0),
        created_at=c["created_at"],
    )

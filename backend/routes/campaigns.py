from fastapi import APIRouter, HTTPException
from models.schemas import CampaignCreate, CampaignOut, CampaignStatus, Platform
from datetime import datetime, timezone
from typing import List

router = APIRouter()

# Mock data store
mock_campaigns = [
    {"id": 1, "name": "Summer Sale - Shoes", "platform": "meta", "status": "active", "budget": 1500.0, "spend": 1240.0, "impressions": 48200, "clicks": 2100, "conversions": 210, "roas": 3.8, "created_at": datetime.now(timezone.utc)},
    {"id": 2, "name": "Brand Awareness Q4", "platform": "tiktok", "status": "active", "budget": 1000.0, "spend": 860.0, "impressions": 36000, "clicks": 1800, "conversions": 140, "roas": 2.4, "created_at": datetime.now(timezone.utc)},
    {"id": 3, "name": "Retargeting - Cart", "platform": "meta", "status": "paused", "budget": 500.0, "spend": 320.0, "impressions": 12400, "clicks": 980, "conversions": 210, "roas": 5.1, "created_at": datetime.now(timezone.utc)},
]

@router.get("/", response_model=List[dict])
async def list_campaigns():
    return mock_campaigns

@router.post("/", response_model=dict)
async def create_campaign(campaign: CampaignCreate):
    new = {
        "id": len(mock_campaigns) + 1,
        **campaign.model_dump(),
        "status": "draft",
        "spend": 0.0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "roas": 0.0,
        "created_at": datetime.now(timezone.utc),
    }
    mock_campaigns.append(new)
    return new

@router.get("/{campaign_id}", response_model=dict)
async def get_campaign(campaign_id: int):
    campaign = next((c for c in mock_campaigns if c["id"] == campaign_id), None)
    if not campaign:
        raise HTTPException(status_code=404, detail="Campaign not found")
    return campaign

@router.patch("/{campaign_id}/status")
async def update_status(campaign_id: int, status: str):
    for c in mock_campaigns:
        if c["id"] == campaign_id:
            c["status"] = status
            return {"message": "Status updated", "campaign": c}
    raise HTTPException(status_code=404, detail="Not found")

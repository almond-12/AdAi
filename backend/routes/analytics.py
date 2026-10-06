from fastapi import APIRouter
from models.schemas import AnalyticsOverview
from typing import List

router = APIRouter()

@router.get("/overview", response_model=AnalyticsOverview)
async def get_overview():
    return {
        "total_spend": 4280.0,
        "impressions": 284000,
        "clicks": 12400,
        "conversions": 980,
        "roas": 3.2,
        "ctr": 4.37,
        "cpc": 0.36,
    }

@router.get("/timeseries")
async def get_timeseries(platform: str = "all", days: int = 7):
    data = [
        {
            "date": f"Oct {i+1}",
            "meta_impressions": 12000 + i * 2000,
            "tiktok_impressions": 8000 + i * 1500,
            "meta_spend": 200 + i * 30,
            "tiktok_spend": 150 + i * 20,
        }
        for i in range(days)
    ]
    return {"data": data}

@router.get("/by-platform")
async def get_by_platform():
    return {
        "meta": {"impressions": 84000, "clicks": 3800, "conversions": 420, "spend": 2840, "roas": 3.6},
        "tiktok": {"impressions": 62000, "clicks": 2900, "conversions": 280, "spend": 1440, "roas": 2.8},
    }

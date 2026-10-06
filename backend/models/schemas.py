from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from enum import Enum

class Platform(str, Enum):
    meta = "meta"
    tiktok = "tiktok"

class CampaignStatus(str, Enum):
    draft = "draft"
    active = "active"
    paused = "paused"
    completed = "completed"

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class UserOut(BaseModel):
    id: int
    name: str
    email: str
    role: str

class CampaignCreate(BaseModel):
    name: str
    platform: Platform
    product_name: str
    product_description: str
    target_audience: str
    budget: float
    ad_copy: Optional[str] = None
    landing_url: Optional[str] = None

class CampaignOut(BaseModel):
    id: int
    name: str
    platform: Platform
    status: CampaignStatus
    budget: float
    spend: float
    impressions: int
    clicks: int
    conversions: int
    roas: float
    created_at: datetime

class AdGenerateRequest(BaseModel):
    product_name: str
    product_description: str
    target_audience: str
    platform: Platform
    tone: Optional[str] = "professional"

class AdVariant(BaseModel):
    headline: str
    body: str
    cta: str

class AdGenerateResponse(BaseModel):
    variants: List[AdVariant]

class AnalyticsOverview(BaseModel):
    total_spend: float
    impressions: int
    clicks: int
    conversions: int
    roas: float
    ctr: float
    cpc: float

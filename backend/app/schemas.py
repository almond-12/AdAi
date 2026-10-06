"""
Pydantic models / schemas for request and response validation.
"""
from pydantic import BaseModel, EmailStr
from typing import Optional, List
from enum import Enum


# ── Auth ──────────────────────────────────────────────────────────────────────

class UserRole(str, Enum):
    user = "user"
    admin = "admin"


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: str
    name: str
    email: str
    role: UserRole


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut


# ── Ad Generation ──────────────────────────────────────────────────────────────

class Platform(str, Enum):
    meta = "meta"
    tiktok = "tiktok"


class AdObjective(str, Enum):
    awareness = "Brand Awareness"
    traffic = "Traffic"
    leads = "Leads"
    sales = "Sales / Conversions"
    app_installs = "App Installs"


class AdGenerateRequest(BaseModel):
    platform: Platform
    objective: AdObjective
    product_description: str
    target_audience: str
    tone: Optional[str] = "Professional"
    budget: Optional[float] = None
    num_variations: int = 3


class AdVariation(BaseModel):
    headline: str
    body: str
    cta: str
    score: int


class AdGenerateResponse(BaseModel):
    variations: List[AdVariation]
    platform: Platform
    objective: AdObjective


# ── Campaigns ─────────────────────────────────────────────────────────────────

class CampaignStatus(str, Enum):
    active = "Active"
    paused = "Paused"
    draft = "Draft"
    ended = "Ended"


class Campaign(BaseModel):
    id: str
    name: str
    platform: Platform
    status: CampaignStatus
    spend: float
    roas: Optional[float] = None
    impressions: int = 0
    clicks: int = 0
    created_at: str


# ── Analytics ─────────────────────────────────────────────────────────────────

class AnalyticsSummary(BaseModel):
    total_spend: float
    total_revenue: float
    avg_roas: float
    total_impressions: int
    total_clicks: int
    avg_ctr: float
    conversions: int


class DailyMetric(BaseModel):
    date: str
    spend: float
    revenue: float
    roas: float
    impressions: int
    clicks: int


# ── AI Insights ───────────────────────────────────────────────────────────────

class InsightType(str, Enum):
    tip = "tip"
    warning = "warning"
    info = "info"


class AIInsight(BaseModel):
    type: InsightType
    text: str
    campaign_id: Optional[str] = None

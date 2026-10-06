"""
In-memory data store (replace with a real DB in production).
Stores users and campaigns for the mock API.
"""
import uuid
from typing import Dict, Optional
from app.auth import hash_password

# ── Users ─────────────────────────────────────────────────────────────────────

_users: Dict[str, dict] = {
    "1": {
        "id": "1",
        "name": "Josephine",
        "email": "josephine@example.com",
        "hashed_password": hash_password("password123"),
        "role": "admin",
    },
    "2": {
        "id": "2",
        "name": "Sarah K.",
        "email": "sarah@growfast.com",
        "hashed_password": hash_password("password123"),
        "role": "user",
    },
}


def get_user_by_email(email: str) -> Optional[dict]:
    for user in _users.values():
        if user["email"] == email:
            return user
    return None


def get_user_by_id(user_id: str) -> Optional[dict]:
    return _users.get(user_id)


def create_user(name: str, email: str, password: str) -> dict:
    user_id = str(uuid.uuid4())
    user = {
        "id": user_id,
        "name": name,
        "email": email,
        "hashed_password": hash_password(password),
        "role": "user",
    }
    _users[user_id] = user
    return user


# ── Campaigns ─────────────────────────────────────────────────────────────────

_campaigns: Dict[str, dict] = {
    "c1": {
        "id": "c1", "name": "Summer Sale - Shoes", "platform": "meta",
        "status": "Active", "spend": 1240.0, "roas": 3.8,
        "impressions": 84200, "clicks": 3120, "created_at": "2026-09-15",
    },
    "c2": {
        "id": "c2", "name": "Brand Awareness Q4", "platform": "tiktok",
        "status": "Active", "spend": 860.0, "roas": 2.4,
        "impressions": 142000, "clicks": 4800, "created_at": "2026-10-01",
    },
    "c3": {
        "id": "c3", "name": "Retargeting - Cart", "platform": "meta",
        "status": "Paused", "spend": 320.0, "roas": 5.1,
        "impressions": 21000, "clicks": 1840, "created_at": "2026-09-20",
    },
    "c4": {
        "id": "c4", "name": "New Product Launch", "platform": "tiktok",
        "status": "Draft", "spend": 0.0, "roas": None,
        "impressions": 0, "clicks": 0, "created_at": "2026-10-06",
    },
}


def get_all_campaigns() -> list:
    return list(_campaigns.values())


def get_campaign(campaign_id: str) -> Optional[dict]:
    return _campaigns.get(campaign_id)


def create_campaign(data: dict) -> dict:
    campaign_id = "c" + str(uuid.uuid4())[:8]
    campaign = {"id": campaign_id, **data}
    _campaigns[campaign_id] = campaign
    return campaign

from fastapi import APIRouter, HTTPException, status
from models.schemas import UserCreate, UserLogin, Token, UserOut
from datetime import datetime, timedelta, timezone
from jose import jwt
import os

router = APIRouter()

SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-key")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Mock user store — replace with real DB
mock_users: list = []

def create_token(data: dict) -> str:
    payload = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    payload.update({"exp": expire})
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

@router.post("/register", response_model=Token)
async def register(user: UserCreate):
    if any(u["email"] == user.email for u in mock_users):
        raise HTTPException(status_code=400, detail="Email already registered")
    new_user = {"id": len(mock_users) + 1, "name": user.name, "email": user.email, "password": user.password, "role": "user"}
    mock_users.append(new_user)
    token = create_token({"sub": str(new_user["id"]), "email": user.email, "role": "user"})
    return {"access_token": token, "token_type": "bearer"}

@router.post("/login", response_model=Token)
async def login(credentials: UserLogin):
    user = next((u for u in mock_users if u["email"] == credentials.email), None)
    if not user or user["password"] != credentials.password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = create_token({"sub": str(user["id"]), "email": user["email"], "role": user["role"]})
    return {"access_token": token, "token_type": "bearer"}

@router.get("/me", response_model=UserOut)
async def get_me():
    return {"id": 1, "name": "Demo User", "email": "demo@example.com", "role": "user"}

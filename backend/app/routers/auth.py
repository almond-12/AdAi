"""
Authentication router: /api/auth/register, /api/auth/login, /api/auth/me
"""
from fastapi import APIRouter, HTTPException, status, Depends

from app.schemas import UserCreate, UserLogin, Token, UserOut, UserRole
from app.auth import verify_password, create_access_token
from app.database import get_user_by_email, create_user
from app.dependencies import get_current_user

router = APIRouter(prefix="/api/auth", tags=["auth"])


@router.post("/register", response_model=Token, status_code=status.HTTP_201_CREATED)
async def register(data: UserCreate):
    """Register a new user account."""
    if get_user_by_email(data.email):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists",
        )
    user = create_user(data.name, data.email, data.password)
    token = create_access_token({"sub": user["id"]})
    return Token(
        access_token=token,
        user=UserOut(id=user["id"], name=user["name"], email=user["email"], role=UserRole(user["role"])),
    )


@router.post("/login", response_model=Token)
async def login(data: UserLogin):
    """Authenticate and return a JWT token."""
    user = get_user_by_email(data.email)
    if not user or not verify_password(data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )
    token = create_access_token({"sub": user["id"]})
    return Token(
        access_token=token,
        user=UserOut(id=user["id"], name=user["name"], email=user["email"], role=UserRole(user["role"])),
    )


@router.get("/me", response_model=UserOut)
async def me(current_user: dict = Depends(get_current_user)):
    """Return the currently authenticated user."""
    return UserOut(
        id=current_user["id"],
        name=current_user["name"],
        email=current_user["email"],
        role=UserRole(current_user["role"]),
    )

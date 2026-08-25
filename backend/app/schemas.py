from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from datetime import datetime
from .models import ApplicationStatus

class UserCreate(BaseModel):
    email: str
    password: str
    full_name: str

class UserResponse(BaseModel):
    id: int
    email: str
    full_name: str
    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class JobCreate(BaseModel):
    title: str
    company: str
    url: Optional[str] = None
    description: str

class JobResponse(BaseModel):
    id: int
    title: str
    company: str
    status: ApplicationStatus
    class Config:
        orm_mode = True

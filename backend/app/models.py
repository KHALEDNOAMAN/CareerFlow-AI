from sqlalchemy import Column, Integer, String, JSON, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from .database import Base

class ApplicationStatus(enum.Enum):
    SAVED = "SAVED"
    APPLIED = "APPLIED"
    INTERVIEW = "INTERVIEW"
    OFFER = "OFFER"
    REJECTED = "REJECTED"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

class CV(Base):
    __tablename__ = "cvs"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    filename = Column(String)
    raw_text = Column(String)
    skills = Column(JSON)
    experience = Column(JSON)
    education = Column(JSON)
    uploaded_at = Column(DateTime, default=datetime.utcnow)

class Job(Base):
    __tablename__ = "jobs"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    company = Column(String)
    url = Column(String)
    description = Column(String)
    requirements = Column(JSON)
    status = Column(Enum(ApplicationStatus), default=ApplicationStatus.SAVED)
    applied_at = Column(DateTime, nullable=True)

class Analysis(Base):
    __tablename__ = "analyses"
    id = Column(Integer, primary_key=True, index=True)
    cv_id = Column(Integer, ForeignKey("cvs.id"))
    job_id = Column(Integer, ForeignKey("jobs.id"))
    match_score = Column(Integer)
    matched_skills = Column(JSON)
    missing_skills = Column(JSON)
    suggestions = Column(JSON)
    analyzed_at = Column(DateTime, default=datetime.utcnow)

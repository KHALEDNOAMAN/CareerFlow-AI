from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Analysis

router = APIRouter(prefix="/analysis", tags=["analysis"])

@router.post("/match")
def match_job(cv_id: int, job_id: int, db: Session = Depends(get_db)):
    # Placeholder for AI match logic
    return {"match_score": 85, "missing_skills": ["Docker"]}

@router.get("/{id}")
def get_analysis(id: int, db: Session = Depends(get_db)):
    return db.query(Analysis).filter(Analysis.id == id).first()

@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    return {"avg_match": 75, "top_skills": ["Python", "React"]}

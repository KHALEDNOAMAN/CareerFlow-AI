from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..schemas import JobCreate, JobResponse
from ..models import Job

router = APIRouter(prefix="/jobs", tags=["jobs"])

@router.post("/", response_model=JobResponse)
def add_job(job: JobCreate, db: Session = Depends(get_db)):
    db_job = Job(**job.dict(), user_id=1) # mock user
    db.add(db_job)
    db.commit()
    db.refresh(db_job)
    return db_job

@router.get("/")
def list_jobs(db: Session = Depends(get_db)):
    return db.query(Job).all()

@router.patch("/{id}/status")
def update_status(id: int, status: str, db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == id).first()
    job.status = status
    db.commit()
    return job

@router.delete("/{id}")
def delete_job(id: int, db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == id).first()
    db.delete(job)
    db.commit()
    return {"status": "deleted"}

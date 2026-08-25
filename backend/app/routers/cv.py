from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import CV

router = APIRouter(prefix="/cv", tags=["cv"])

@router.post("/upload")
async def upload_cv(file: UploadFile = File(...), db: Session = Depends(get_db)):
    # Placeholder for pdf parsing and AI processing
    return {"filename": file.filename, "status": "Uploaded successfully"}

@router.get("/")
def list_cvs(db: Session = Depends(get_db)):
    return db.query(CV).all()

@router.get("/{id}")
def get_cv(id: int, db: Session = Depends(get_db)):
    return db.query(CV).filter(CV.id == id).first()

@router.delete("/{id}")
def delete_cv(id: int, db: Session = Depends(get_db)):
    cv = db.query(CV).filter(CV.id == id).first()
    db.delete(cv)
    db.commit()
    return {"status": "deleted"}

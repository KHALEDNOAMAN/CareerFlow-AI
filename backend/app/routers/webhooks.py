from fastapi import APIRouter

router = APIRouter(prefix="/webhooks", tags=["webhooks"])

@router.post("/n8n/job-added")
def webhook_job_added(payload: dict):
    return {"status": "received"}

@router.post("/n8n/analysis-complete")
def webhook_analysis(payload: dict):
    return {"status": "received"}

@router.post("/n8n/reminder")
def webhook_reminder(payload: dict):
    return {"status": "received"}

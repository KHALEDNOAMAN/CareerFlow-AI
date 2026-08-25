from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth, cv, jobs, analysis, webhooks
from .database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI(title="CareerFlow API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(cv.router)
app.include_router(jobs.router)
app.include_router(analysis.router)
app.include_router(webhooks.router)

@app.get("/health")
def health():
    return {"status": "ok"}

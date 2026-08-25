import os
from openai import OpenAI
import google.generativeai as genai

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

def parse_cv(text: str):
    return {"skills": ["Python"], "experience": [], "education": []}

def analyze_job(description: str):
    return {"requirements": ["FastAPI"]}

def calculate_match(cv_data, job_data):
    return {"score": 80, "matched": [], "missing": []}

def generate_suggestions(missing_skills):
    return ["Learn Docker"]

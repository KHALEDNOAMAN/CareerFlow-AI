# CareerFlow-AI
![Logo](https://via.placeholder.com/150)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An AI-Powered Career Platform with n8n automation. It analyzes CVs, matches them with job descriptions, and provides actionable insights.
The platform uses FastAPI for the backend, React for the frontend, and PostgreSQL for the database.
n8n orchestrates automated workflows for continuous job matching and notifications.

## Architecture
```
React Frontend → FastAPI Backend → PostgreSQL
                     ↕
                 n8n Workflows
                     ↕
            AI Service (Gemini/OpenAI)
```

## Key Features
1. CV Parsing and Analysis
2. Job Description Extraction
3. AI-Powered Skill Matching
4. Missing Skills Identification
5. Improvement Suggestions
6. Automated Workflows via n8n
7. Dashboard Analytics
8. Application Tracking
9. Resume Versioning
10. Notifications and Reminders

## Tech Stack
| Component | Technology |
|-----------|------------|
| Frontend  | React |
| Backend   | FastAPI |
| Database  | PostgreSQL |
| Cache     | Redis |
| Automation| n8n |
| AI        | OpenAI / Gemini |

## Screenshots
```
+---------------------------------------+
| Dashboard                             |
|  Total CVs: 3      Total Jobs: 15     |
|  Avg Match: 78%    Interviews: 2      |
+---------------------------------------+
```

## Getting Started
`docker-compose up --build`

## API Documentation
See `/docs` on the backend after running.

## n8n Workflows
n8n handles scraping, reminders, and auto-matching new jobs to your CV.

## Environment Variables
See `.env.example`

## Roadmap
- Integrate LinkedIn API
- Cover Letter Generation
- Interview Prep Bot

## Contributing, License
MIT License.

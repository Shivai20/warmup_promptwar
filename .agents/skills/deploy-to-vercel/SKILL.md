---
name: deploy-to-vercel
description: >-
  Configure and deploy web applications to Vercel, handling serverless Python endpoints, routing, static assets, and environment variables.
---

# Deploy to Vercel Skill

Apply this skill if Vercel deployment is selected for hosting the web application.

## Deployment Steps

1. **Project Configuration (`vercel.json`):**
   - Configure Python runtime builds for FastAPI / ASGI applications:
     ```json
     {
       "rewrites": [
         { "source": "/api/(.*)", "destination": "api/index.py" },
         { "source": "/(.*)", "destination": "/static/$1" }
       ]
     }
     ```
   - Ensure dependencies are listed in `requirements.txt`.

2. **Environment Variables:**
   - Configure required environment secrets (`GEMINI_API_KEY`, etc.) in the Vercel project settings.

3. **Deploy & Validate:**
   - Deploy using Vercel CLI (`vercel --prod`) or Git integration.
   - Test production endpoints: `/health`, `/api/explain`, and static asset serving.
   - Verify HTTPS secure context for microphone and speech APIs.

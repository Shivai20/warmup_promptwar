from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from app.schemas import (
    ExplainRequest,
    ExplainResponse,
    SimplifyStepRequest,
    SimplifyStepResponse,
    VoiceIntentRequest,
    VoiceIntentResponse,
)
from app.ai_service import explain_notice, simplify_step, parse_voice_intent, is_ai_live

app = FastAPI(
    title="Beta AI - Senior Daily Companion",
    description="Intelligent, accessible and trustworthy daily companion for senior citizens.",
    version="2.0.0",
)

# Enable CORS for local testing and web clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = BASE_DIR / "static"


@app.get("/health")
@app.get("/api/health")
async def health_check():
    return {
        "status": "ok",
        "service": "Beta AI",
        "ai_provider_live": is_ai_live(),
        "mode": "live" if is_ai_live() else "grounded_mock_fallback",
        "version": "2.0.0",
    }


@app.post("/api/explain", response_model=ExplainResponse)
async def api_explain(req: ExplainRequest):
    if not req.text or not req.text.strip():
        raise HTTPException(status_code=400, detail="Notice text cannot be empty.")
    if len(req.text) > 5000:
        raise HTTPException(status_code=400, detail="Notice text exceeds 5,000 character limit.")
    return await explain_notice(req.text.strip(), language=req.language)


@app.post("/api/simplify-step", response_model=SimplifyStepResponse)
async def api_simplify_step(req: SimplifyStepRequest):
    if not req.step_instruction or not req.step_instruction.strip():
        raise HTTPException(status_code=400, detail="Step instruction cannot be empty.")
    return await simplify_step(req.step_instruction, context=req.context, language=req.language)


@app.post("/api/voice-intent", response_model=VoiceIntentResponse)
async def api_voice_intent(req: VoiceIntentRequest):
    if not req.transcript or not req.transcript.strip():
        raise HTTPException(status_code=400, detail="Transcript cannot be empty.")
    return await parse_voice_intent(
        req.transcript.strip(),
        current_screen=req.current_screen,
        language=req.language,
        user_time=req.user_time,
    )


# Serve static files if directory exists
if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

    @app.get("/")
    async def serve_index():
        index_file = STATIC_DIR / "index.html"
        if index_file.exists():
            return FileResponse(index_file)
        return {"message": "Frontend static/index.html not found"}

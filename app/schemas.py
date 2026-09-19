from typing import List, Optional
from pydantic import BaseModel, Field


class FactItem(BaseModel):
    label: str = Field(..., description="Short title of the fact, e.g. 'Date', 'Location', 'What to bring'")
    value: str = Field(..., description="Exact factual value preserved from source")
    source_excerpt: str = Field(..., description="Exact quote from input text supporting this claim")


class TermItem(BaseModel):
    term: str = Field(..., description="Unfamiliar or bureaucratic term")
    explanation: str = Field(..., description="Simple, senior-friendly explanation")


class StepItem(BaseModel):
    id: str = Field(..., description="Stable step ID, e.g. 'step-1'")
    instruction: str = Field(..., description="Clear, manageable instruction for the senior")
    source_excerpt: Optional[str] = Field(None, description="Direct quote from notice or null if general suggestion")
    is_general_suggestion: bool = Field(False, description="True if recommended practice not explicitly in text")


class SuggestedTask(BaseModel):
    id: str = Field(..., description="Candidate task ID")
    title: str = Field(..., description="Actionable title for My Day")
    candidate_date_time: Optional[str] = Field(None, description="Suggested ISO datetime or null if unknown")
    source_excerpt: Optional[str] = Field(None, description="Direct quote from notice")


class ExplainRequest(BaseModel):
    text: str = Field(..., max_length=5000, description="Notice text to explain")
    language: str = Field(default="en", description="Target language: 'en' or 'hi'")


class ExplainResponse(BaseModel):
    summary: str = Field(..., description="Short, calming, plain-language summary")
    facts: List[FactItem] = Field(default_factory=list, description="Preserved facts with source excerpts")
    unfamiliar_terms: List[TermItem] = Field(default_factory=list, description="Definitions for hard words")
    steps: List[StepItem] = Field(default_factory=list, description="Manageable step-by-step checklist")
    clarifications: List[str] = Field(default_factory=list, description="Missing or ambiguous details, e.g. unknown dates")
    suggested_tasks: List[SuggestedTask] = Field(default_factory=list, description="Candidate actions for My Day")
    cautions: List[str] = Field(default_factory=list, description="Specific safety or timing cautions")
    language: str = Field(default="en")


class SimplifyStepRequest(BaseModel):
    step_instruction: str = Field(..., description="Current step instruction")
    context: Optional[str] = Field(None, description="Notice summary or context")
    language: str = Field(default="en")


class SimplifyStepResponse(BaseModel):
    simplified_instruction: str = Field(..., description="Even simpler, concrete instruction")
    reassurance: str = Field(..., description="Calm encouragement or tip")


class VoiceIntentRequest(BaseModel):
    transcript: str = Field(..., description="Reviewed user speech transcript")
    current_screen: str = Field(default="home", description="Active screen: 'home', 'explain', 'guide', 'myday'")
    language: str = Field(default="en")
    user_time: Optional[str] = Field(None, description="User's local time ISO string")


class VoiceIntentResponse(BaseModel):
    intent: str = Field(..., description="Allowlist: explain, simplify, guide_next, guide_back, repeat, show_tasks, propose_task, unknown")
    spoken_reply: str = Field(..., description="Concise verbal answer for TTS")
    task_draft: Optional[SuggestedTask] = Field(None, description="Extracted task draft if propose_task")
    clarification: Optional[str] = Field(None, description="Follow-up question if command is ambiguous")

from starlette.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_voice_navigation_commands():
    # Next
    r = client.post("/api/voice-intent", json={"transcript": "next step please", "language": "en"})
    assert r.status_code == 200
    assert r.json()["intent"] == "guide_next"

    # Back
    r = client.post("/api/voice-intent", json={"transcript": "go back", "language": "en"})
    assert r.status_code == 200
    assert r.json()["intent"] == "guide_back"

    # Simpler
    r = client.post("/api/voice-intent", json={"transcript": "make it simpler", "language": "en"})
    assert r.status_code == 200
    assert r.json()["intent"] == "simplify"

    # Repeat
    r = client.post("/api/voice-intent", json={"transcript": "please repeat that", "language": "en"})
    assert r.status_code == 200
    assert r.json()["intent"] == "repeat"

    # Show tasks
    r = client.post("/api/voice-intent", json={"transcript": "show my tasks for today", "language": "en"})
    assert r.status_code == 200
    assert r.json()["intent"] == "show_tasks"


def test_voice_propose_task():
    r = client.post(
        "/api/voice-intent",
        json={
            "transcript": "remind me to call the community centre",
            "language": "en",
            "user_time": "2026-09-19T11:00:00"
        }
    )
    assert r.status_code == 200
    data = r.json()
    assert data["intent"] == "propose_task"
    assert data["task_draft"] is not None
    assert "call the community centre" in data["task_draft"]["title"].lower()

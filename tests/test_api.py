from starlette.testclient import TestClient
from app.main import app

client = TestClient(app)

OFFICIAL_SAMPLE = (
    "Your community centre orientation is on 24 September 2026 at 11:00 AM, Room 2. "
    "Bring your registration confirmation. Please arrive 15 minutes early. "
    "For questions, contact the centre using the number on your registration confirmation."
)


def test_health_endpoint():
    resp = client.get("/health")
    assert resp.status_code == 200
    data = resp.json()
    assert data["status"] == "ok"
    assert "mode" in data


def test_explain_official_sample_grounding():
    resp = client.post("/api/explain", json={"text": OFFICIAL_SAMPLE, "language": "en"})
    assert resp.status_code == 200
    data = resp.json()

    # Verify factual accuracy & no invented details
    assert "orientation" in data["summary"].lower()
    assert len(data["facts"]) >= 3
    for fact in data["facts"]:
        assert fact["source_excerpt"] is not None
        assert len(fact["source_excerpt"]) > 0

    # Verify steps and tasks
    assert len(data["steps"]) >= 2
    assert len(data["suggested_tasks"]) >= 1

    # Check that 24 September 2026 is preserved
    date_fact = next((f for f in data["facts"] if "24 September 2026" in f["value"]), None)
    assert date_fact is not None


def test_explain_missing_date_requires_clarification():
    notice_without_date = "Please come to the clinic for routine testing. Fast for 8 hours beforehand."
    resp = client.post("/api/explain", json={"text": notice_without_date, "language": "en"})
    assert resp.status_code == 200
    data = resp.json()
    assert len(data["clarifications"]) > 0
    assert any("date" in c.lower() for c in data["clarifications"])


def test_explain_empty_text_rejected():
    resp = client.post("/api/explain", json={"text": "   ", "language": "en"})
    assert resp.status_code == 400


def test_explain_hindi_sample():
    resp = client.post("/api/explain", json={"text": OFFICIAL_SAMPLE, "language": "hi"})
    assert resp.status_code == 200
    data = resp.json()
    assert data["language"] == "hi"
    assert "कम्युनिटी सेंटर" in data["summary"] or "ओरिएंटेशन" in data["summary"]


def test_simplify_step():
    resp = client.post(
        "/api/simplify-step",
        json={"step_instruction": "Locate registration confirmation document.", "language": "en"}
    )
    assert resp.status_code == 200
    data = resp.json()
    assert "simplified_instruction" in data
    assert "reassurance" in data

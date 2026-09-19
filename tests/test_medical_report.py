from starlette.testclient import TestClient
from app.main import app
from app.ai_service import OFFICIAL_MEDICAL_SAMPLE

client = TestClient(app)


def test_analyze_medical_report_endpoint():
    resp = client.post(
        "/api/analyze-medical-report",
        json={"text": OFFICIAL_MEDICAL_SAMPLE, "language": "en"}
    )
    assert resp.status_code == 200
    data = resp.json()

    # Verify patient info
    assert "Ramesh Verma" in data["patient_name"]

    # Verify summary is plain-language and senior-friendly
    assert any(term in data["summary"].lower() for term in ["blood", "glucose", "health", "test", "results", "panel"])

    # Verify health indicators
    indicators = data["indicators"]
    assert len(indicators) >= 4

    # Check key lab values
    glucose = next((i for i in indicators if "glucose" in i["name"].lower()), None)
    assert glucose is not None
    assert "138" in glucose["value"]
    assert glucose["status"].upper() == "HIGH"
    assert glucose["reference_range"] is not None
    assert len(glucose["source_excerpt"]) > 0

    bp = next((i for i in indicators if "pressure" in i["name"].lower()), None)
    assert bp is not None
    assert "132/84" in bp["value"]
    assert bp["status"].upper() == "BORDERLINE"

    # Verify doctor questions
    assert len(data["doctor_questions"]) >= 2
    for q in data["doctor_questions"]:
        assert len(q) > 5

    # Verify safety disclaimer
    assert data["disclaimer"] is not None
    assert any(w in data["disclaimer"].lower() for w in ["physician", "doctor", "medical"])


def test_analyze_medical_report_hindi():
    resp = client.post(
        "/api/analyze-medical-report",
        json={"text": OFFICIAL_MEDICAL_SAMPLE, "language": "hi"}
    )
    assert resp.status_code == 200
    data = resp.json()
    assert len(data["indicators"]) >= 3
    assert len(data["doctor_questions"]) >= 2
    assert "शुगर" in data["summary"] or "डॉक्टर" in data["summary"] or "Ramesh" in (data.get("patient_name") or "")


def test_explain_endpoint_auto_attaches_medical_report():
    resp = client.post(
        "/api/explain",
        json={"text": OFFICIAL_MEDICAL_SAMPLE, "language": "en"}
    )
    assert resp.status_code == 200
    data = resp.json()

    # Regular explanation fields preserved
    assert "summary" in data
    assert len(data["facts"]) >= 1

    # Medical report attached automatically
    assert "medical_report" in data
    med = data["medical_report"]
    assert med is not None
    assert len(med["indicators"]) >= 3
    assert len(med["doctor_questions"]) >= 2

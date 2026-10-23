# Shafiq Ahamed — QA Automation Engineer Portfolio

<div align="center">

[![Portfolio Live](https://img.shields.io/badge/LIVE_PORTFOLIO-shafiq--ahamed04.vercel.app-B6FF3C?style=for-the-badge&logo=vercel&logoColor=0A0A0B)](https://shafiq-ahamed04.vercel.app/)
[![Automated Smoke Tests](https://img.shields.io/badge/SMOKE_TESTS-5%2F5%20PASSED-B6FF3C?style=for-the-badge&logo=pytest&logoColor=0A0A0B)](tests/)
[![Python](https://img.shields.io/badge/PYTHON-3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Selenium](https://img.shields.io/badge/SELENIUM-WEBDRIVER-43B02A?style=for-the-badge&logo=selenium&logoColor=white)](https://selenium.dev)
[![Pytest](https://img.shields.io/badge/PYTEST-9.1.1-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white)](https://pytest.org)

</div>

> **"I break software so users never have to."**  
> High-performance adversarial QA Automation Engineer portfolio built with React, TypeScript, Tailwind CSS, Three.js WebGL, and GSAP. Backed by an automated end-to-end Pytest & Selenium WebDriver smoke test suite.

---

## 🧪 Architecture & Concept: "The Portfolio is a Test Run"

The portfolio is architected as an active software test execution pipeline:

- **Dual-Stage Opening:**
  1. *Stage 1 (Pytest Terminal):* Real-time terminal output streaming through all 7 test cases (`tests/test_about.py` through `tests/test_contact.py`).
  2. *Stage 2 (Photo Title Card):* Framed portrait of Shafiq in a glowing acid-green rim, monumental Syne typography, verification badges, and an interactive loading countdown with instant keyboard/click skip.
- **QA Crosshair Locator Cursor:** Custom desktop cursor equipped with calibration ticks (`+`), live viewport coordinate readout `[X, Y]`, and dynamic DOM element inspector badges (`[EXECUTE]`, `[NAVIGATE]`, `[DEFECT?]`).
- **Global Neon Scroll Progress Bar:** Laser-head tracking at the very top of the viewport with a live floating `SUITE RUN: %` test execution readout.
- **Keynote Scroll-Scrubbed Story:** Body copy dynamically illuminates from 35% ghost opacity to radiant bone-white `#F2EFE8` as you scroll past.
- **Automated Test Gallery:** Interactive exhibition deck with slide navigation (`EXHIBIT 01 OF 04`), filmstrip quick-jump selectors, and expandable accordion scroll anchors.
- **Live Test Playback:** Video slot running actual Chrome headless test execution (`public/assets/test-run.mp4`) with play-on-scroll and live console stream.
- **Adversarial Defect Easter Egg:** `[BUG FOUND: 0xDEADBEEF]` button that triggers a simulated defect triage modal.

---

## 🔬 Automated Pytest & Selenium Smoke Tests

This portfolio tests itself. Located under `tests/`, 5 automated Selenium WebDriver test cases run headlessly in Google Chrome:

```text
============================= test session starts =============================
platform win32 -- Python 3.11.3, pytest-9.1.1, pluggy-1.6.0
rootdir: C:\Portfolio-Shafiq ahamed S
collected 5 items

tests/test_portfolio_smoke.py::TestPortfolioSmoke::test_01_page_loads_and_title PASSED [ 20%]
tests/test_portfolio_smoke.py::TestPortfolioSmoke::test_02_nav_anchors_work PASSED [ 40%]
tests/test_portfolio_smoke.py::TestPortfolioSmoke::test_03_resume_download_link PASSED [ 60%]
tests/test_portfolio_smoke.py::TestPortfolioSmoke::test_04_contact_form_validation PASSED [ 80%]
tests/test_portfolio_smoke.py::TestPortfolioSmoke::test_05_no_fatal_console_errors PASSED [100%]

============================= 5 passed in 14.74s ==============================
```

### Running the Smoke Tests Locally:

```bash
# Terminal 1: Launch preview server
npm run build
npx vite preview --port 4173

# Terminal 2: Run pytest automation suite
pytest -v tests/
```

---

## 🚀 Local Development Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/shafiq-ahamed04/Portfolio-Website.git
cd Portfolio-Website
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📊 Summary of Architectural Evolution

| Dimension | Initial Baseline | Redesigned QA Test Engine |
| :--- | :--- | :--- |
| **Positioning** | "Aspiring DevOps & Full Stack Developer" | **Adversarial QA Automation Engineer** (Python, Selenium, Pytest) |
| **Experience / Claims** | DevOps, Docker, AWS, Linux, CI/CD, Full Stack | **QA ONLY**. 100% verified facts, zero invented metrics, B.Tech IT 2026 |
| **Opening Sequence** | Static page load | **Dual-Stage Opening**: Fast Pytest stream + Cinematic Photo Title Card |
| **Cursor System** | Browser default | **QA Locator Crosshair** with live coordinates and DOM inspector |
| **Scroll Experience** | Standard scroll | **Neon Laser Scrollbar** + Keynote Text Scrub + Gallery Exhibition Slider |
| **Projects Showcase** | Generic static cards | **Interactive Test Gallery** with slide deck, filmstrip & accordion anchors |
| **Video Playback** | None | **Live Chrome Headless Test Playback** (`public/assets/test-run.mp4`) |
| **Quality Verification**| None | **5 Automated Pytest + Selenium Smoke Tests** (`tests/`) |

---

## 📬 Contact & Recruiter Information

- **Name:** Shafiq Ahamed
- **Role:** QA Automation Engineer (Fresher, B.Tech IT 2026)
- **College:** M.I.E.T. Engineering College, Anna University
- **Portfolio:** [shafiq-ahamed04.vercel.app](https://shafiq-ahamed04.vercel.app/)
- **LinkedIn:** [linkedin.com/in/shafiq-ahamed-s](https://www.linkedin.com/in/shafiq-ahamed-s)
- **GitHub:** [github.com/shafiq-ahamed04](https://github.com/shafiq-ahamed04)
- **Email:** [shafiqahamedshajahan@gmail.com](mailto:shafiqahamedshajahan@gmail.com)

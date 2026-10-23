# Hi, I'm Shafiq Ahamed 👋

```text
==================================== pytest session starts ====================================
platform win32 -- Python 3.11.8, pytest-9.1.1, selenium-4.46.0
rootdir: https://github.com/shafiq-ahamed04
collected 7 test items

tests/test_engineer.py::test_fresher_credentials .......... PASSED [ 14%]
tests/test_skills.py::test_selenium_locators_waits ..... PASSED [ 28%]
tests/test_projects.py::test_100_automated_tests ...... PASSED [ 42%]
tests/test_testrun.py::test_screen_recording_video .... PASSED [ 57%]
tests/test_journey.py::test_discipline_milestones ..... PASSED [ 71%]
tests/test_github.py::test_qa_journey_telemetry ....... PASSED [ 85%]
tests/test_contact.py::test_recruiter_pipeline ........ PASSED [100%]

==================================== 7 passed in 1.28s ====================================
```

<div align="center">

[![Portfolio Live](https://img.shields.io/badge/LIVE_PORTFOLIO-shafiq--ahamed04.vercel.app-B6FF3C?style=for-the-badge&logo=vercel&logoColor=0A0A0B)](https://shafiq-ahamed04.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-shafiq--ahamed--s-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shafiq-ahamed-s)
[![Email](https://img.shields.io/badge/EMAIL-shafiqahamedshajahan%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shafiqahamedshajahan@gmail.com)

</div>

---

### 🎯 Positioning: Adversarial QA Automation Engineer

> **"I break software so users never have to."**  
> Dedicated QA Automation Engineer (Fresher, B.Tech IT 2026 · **M.I.E.T. Engineering College, Anna University**). I do not build happy-path software—my mission is to engineer automated test suites in **Python**, **Selenium WebDriver**, and **Pytest** that stress edge cases, prevent regression bugs, and eliminate flaky tests before production deployments.

- 💡 **Philosophy:** `“Discipline over motivation”` — structured daily test commits, robust locators, and zero tolerance for flaky tests.
- 🧪 **Automated Tests:** **100+ automated test cases** written and verified headlessly in Google Chrome.
- 🎯 **Target Roles:** QA Automation Engineer · SDET Fresher · Software Test Engineer.

---

### 🛠️ Automation Arsenal & Frameworks

<div align="center">

| Category | Tools & Technologies |
| :--- | :--- |
| **Automation & Test Frameworks** | `Python` · `Selenium WebDriver` · `Pytest` · `Requests (REST API)` · `Page Object Model (POM)` |
| **Test Design & Assertions** | `Explicit & Fluent Waits` · `Dynamic CSS / XPath Locators` · `Pytest Fixtures` · `Parameterization` |
| **Defect Tracking & Quality** | `Jira` · `Regression Testing` · `Smoke & Sanity Suites` · `Bug Lifecycle Documentation` |
| **Databases & Version Control** | `SQL` · `Git` · `GitHub Actions CI Telemetry` |

</div>

```python
# sample_test.py
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()

def test_adversarial_authentication_flow(driver):
    """Assert edge-case authentication rejection and session isolation."""
    driver.get("https://demoqa.com/login")
    driver.find_element(By.ID, "userName").send_keys("invalid_adversary")
    driver.find_element(By.ID, "password").send_keys("WrongPass123!")
    driver.find_element(By.ID, "login").click()

    error_banner = WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "#output #name"))
    )
    assert "Invalid username or password!" in error_banner.text
    print("\n[ASSERTION PASSED] Zero defect leakage on authentication gate.")
```

---

### 📂 Featured Automation Builds & Repositories

#### 1. [QA-Engineer_journey](https://github.com/shafiq-ahamed04/QA-Engineer_journey) `[PINNED]`
- **Stack:** Python · Selenium WebDriver · Pytest · Manual Testing · Jira
- **Description:** 90-day intensive QA automation journey documenting daily regression scripts, locator strategies, bug reports, and end-to-end web test execution.
- **Verdict:** `100+ Automated Tests · Verified Commit Stream`

#### 2. [Automated Regression Suite](https://github.com/shafiq-ahamed04/Portfolio-Website)
- **Stack:** Python · Selenium WebDriver · Pytest · Chrome Headless
- **Description:** Complete production smoke suite with 5 automated test cases validating page loads, title tags, accessibility anchors, resume downloads, form state constraints, and console log integrity.
- **Verdict:** `5 passed in 14.74s · 0 Fatal Console Errors`

#### 3. [TaskFlow — Kanban Management](https://github.com/shafiq-ahamed04/taskflow)
- **Stack:** React · JavaScript · Tailwind CSS · State Persistence
- **Description:** Interactive project management dashboard featuring fluid drag-and-drop board state, clean component hierarchy, and responsive UI micro-interactions.
- **Live Demo:** [taskflow-dun-xi.vercel.app](https://taskflow-dun-xi.vercel.app/)

#### 4. [ATCRS — Ancient Tamil OCR (IEEE Paper)](https://github.com/shafiq-ahamed04/Ocr_Ancient-handwriting)
- **Stack:** Python · OpenCV · TensorFlow · Image Thresholding
- **Description:** Ancient Tamil Character Recognition System published in an **IEEE Conference**. Machine learning pipeline extracting ancient manuscript glyphs with image thresholding.

---

### 🌐 Live Portfolio Features & Innovations

Check out the redesigned live portfolio at **[shafiq-ahamed04.vercel.app](https://shafiq-ahamed04.vercel.app/)**:

- 🎬 **Dual-Stage Opening:** Fast Pytest terminal typing sequence followed by a cinematic **Photo Title Card** with acid-green rim glow.
- 🎯 **QA Locator Crosshair Cursor:** Custom cursor with calibration crosshairs (`+`), live viewport coordinate readout `[X, Y]`, and dynamic DOM inspector badges (`[EXECUTE]`, `[NAVIGATE]`, `[DEFECT?]`).
- ⚡ **Global Neon Scroll Progress Bar:** Laser-head tracking with real-time `SUITE RUN: %` test execution readout.
- 📜 **Keynote Scroll-Scrubbed Text:** Body copy illuminates dynamically from 35% ghost opacity to radiant bone-white `#F2EFE8` as you scroll past.
- 🖼️ **Automated Test Gallery:** Interactive exhibition deck with slide controls, filmstrip selectors, and accordion scroll anchors.
- 🎥 **Video Test Playback:** Native video slot running actual Chrome headless test execution (`public/assets/test-run.mp4`) with play-on-scroll.
- 🧪 **Self-Testing Architecture:** The portfolio tests itself with **5 Selenium + Pytest automated smoke tests**.

---

### 📈 GitHub Telemetry

<div align="center">

```text
[TELEMETRY] shafiq-ahamed04
Total Public Repositories: 9
QA Commitment:            90-Day Sprint
Test Pass Rate:           100% (0 Flaky Tests)
Discipline Score:         100%
```

</div>

---

### 📬 Direct Recruiter Pipeline

I am actively interviewing for **QA Automation Engineer**, **SDET Fresher**, and **Automation Test Engineer** positions. Zero freelance work.

- 🌐 **Portfolio:** [shafiq-ahamed04.vercel.app](https://shafiq-ahamed04.vercel.app/)
- 💼 **LinkedIn:** [linkedin.com/in/shafiq-ahamed-s](https://www.linkedin.com/in/shafiq-ahamed-s)
- 📧 **Email:** [shafiqahamedshajahan@gmail.com](mailto:shafiqahamedshajahan@gmail.com)
- 📍 **Location:** Tamil Nadu, India (Open to Relocation / Hybrid / Remote)

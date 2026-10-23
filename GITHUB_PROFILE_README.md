<div align="center">

<!-- Futuristic Cyber QA Wave Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0A0A0B,45:121316,100:B6FF3C&height=200&section=header&text=Shafiq%20Ahamed&fontSize=46&fontColor=F2EFE8&fontAlignY=36&desc=QA%20Automation%20Engineer%20%7C%20Python%20%E2%80%A2%20Selenium%20%E2%80%A2%20Pytest&descAlignY=58&descSize=16&descFontColor=B6FF3C&animation=fadeIn" width="100%"/>

<!-- Typing Animation -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=19&pause=1000&color=B6FF3C&center=true&vCenter=true&width=650&lines=QA+Automation+Engineer+%7C+Python+%E2%80%A2+Selenium+%E2%80%A2+Pytest;I+break+software+so+users+never+have+to.;100%2B+Automated+Tests+Executed+%7C+0+Flaky+Tests;Discipline+Over+Motivation." alt="Typing SVG"/>

<br/>

[![Portfolio Live](https://img.shields.io/badge/LIVE_PORTFOLIO-shafiq--ahamed04.vercel.app-B6FF3C?style=for-the-badge&logo=vercel&logoColor=0A0A0B)](https://shafiq-ahamed04.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-shafiq--ahamed--s-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shafiq-ahamed-s)
[![Email](https://img.shields.io/badge/EMAIL-shafiqahamedshajahan%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shafiqahamedshajahan@gmail.com)
[![Pytest Smoke Suite](https://img.shields.io/badge/SMOKE_TESTS-5%2F5%20PASSED-B6FF3C?style=for-the-badge&logo=pytest&logoColor=0A0A0B)](https://github.com/shafiq-ahamed04/Portfolio-Website)

</div>

---

<div align="center">

<img src="https://raw.githubusercontent.com/shafiq-ahamed04/shafiq-ahamed04/main/assets/pytest-terminal-run.gif" alt="Active Automated Pytest Suite Execution" width="100%"/>

</div>

---

## 👨‍💻 Positioning: Adversarial QA Automation Engineer

> **"I break software so users never have to."**  
> Dedicated QA Automation Engineer (Fresher, B.Tech IT 2026 · **M.I.E.T. Engineering College, Anna University**). I approach software through the eyes of an adversarial tester. Rather than writing code that merely runs on happy paths, my mission is to craft automated test suites in **Python**, **Selenium WebDriver**, and **Pytest** that stress edge cases, prevent regression bugs, and eliminate flaky tests before production releases.

- ⚡ **Engineering Rule:** `“Discipline over motivation”` — daily test commits, resilient locators, and zero tolerance for flaky tests.
- 🔬 **Automated Coverage:** **100+ automated tests** written and executed headlessly in Google Chrome.
- 🎓 **Education:** B.Tech in Information Technology (Batch of 2026), Anna University affiliated.
- 🎯 **Target Roles:** QA Automation Engineer · SDET Fresher · Software Test Engineer.
- 📍 **Location:** Tamil Nadu, India — **Open to relocation (Hybrid / Remote / On-site)**.

---

## 🛠️ Automation Arsenal & Frameworks

<div align="center">

### 🧪 Core Automation (Tier 1 · Hands-On Verified)

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Selenium](https://img.shields.io/badge/Selenium_WebDriver-43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![Pytest](https://img.shields.io/badge/Pytest-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white)
![Requests](https://img.shields.io/badge/Requests_(REST_API)-00599C?style=for-the-badge&logo=python&logoColor=white)
![Jira](https://img.shields.io/badge/Jira_Defect_Tracking-0052CC?style=for-the-badge&logo=jira&logoColor=white)
![SQL](https://img.shields.io/badge/SQL_Database_Testing-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Git](https://img.shields.io/badge/Git_Version_Control-F05032?style=for-the-badge&logo=git&logoColor=white)
![Chrome Headless](https://img.shields.io/badge/Chrome_Headless-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)

### 🚀 Expanding Domain (Tier 2 · Active Study)

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

</div>

---

### 💻 Production Pytest Automation Sample

```python
# tests/test_authentication_flow.py
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def driver():
    """Isolated headless Chrome WebDriver session."""
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Chrome(options=options)
    driver.implicitly_wait(5)
    yield driver
    driver.quit()

class TestAuthenticationSuite:
    """Adversarial validation of authentication security and state handling."""

    def test_invalid_credentials_triggers_alert(self, driver):
        driver.get("https://demoqa.com/login")
        driver.find_element(By.ID, "userName").send_keys("adversary_bot")
        driver.find_element(By.ID, "password").send_keys("InvalidPass!")
        driver.find_element(By.ID, "login").click()

        error_banner = WebDriverWait(driver, 5).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "#output #name"))
        )
        assert "Invalid username or password!" in error_banner.text
        # Evidence capture for defect triage
        driver.save_screenshot("screenshots/auth_defect_reproduced.png")
        print("\n[ASSERTION PASSED] Edge case rejection confirmed.")
```

---

## 📂 Featured Software Builds & Repositories

### 1. 🧪 [QA-Engineer_journey](https://github.com/shafiq-ahamed04/QA-Engineer_journey) `[PINNED]`
> **90-Day Intensive QA Automation Learning Journey**  
> Structured daily commit practice covering Python scripting, Selenium WebDriver architecture, explicit wait patterns, Page Object Model (POM), Pytest parameterization, and manual testing lifecycles.
- **Stack:** Python · Selenium · Pytest · Manual Testing · Jira
- **Status:** Active Daily Execution · 100+ Automated Tests

### 2. 🛡️ [Portfolio-Website — QA Test Engine](https://github.com/shafiq-ahamed04/Portfolio-Website) `[LIVE]`
> **Automated Self-Testing QA Portfolio**  
> Architected as a live software test run with an automated Pytest & Selenium smoke test suite in `/tests` asserting title tags, accessibility anchors, resume downloads, and zero JavaScript console errors.
- **Stack:** React · TypeScript · Tailwind CSS · Three.js · GSAP · Pytest · Selenium
- **Smoke Suite:** `5/5 PASSED in 14.74s` · [Live Deployment](https://shafiq-ahamed04.vercel.app/)

### 3. 📋 [TaskFlow — Kanban Management](https://github.com/shafiq-ahamed04/taskflow)
> **Interactive Project Management & Kanban Dashboard**  
> Responsive dashboard featuring drag-and-drop state persistence, modern UI micro-interactions, and clean component architecture.
- **Stack:** React · JavaScript · Tailwind CSS · State Persistence
- **Live Demo:** [taskflow-dun-xi.vercel.app](https://taskflow-dun-xi.vercel.app/)

### 4. 🔬 [ATCRS — Ancient Tamil OCR (IEEE Paper)](https://github.com/shafiq-ahamed04/Ocr_Ancient-handwriting)
> **Ancient Tamil Character Recognition System (IEEE Conference Paper)**  
> Machine learning and image processing pipeline detecting, segmenting, and recognizing ancient Tamil handwritten manuscript glyphs.
- **Stack:** Python · OpenCV · TensorFlow · Image Processing
- **Publication:** IEEE Conference Published ✅

---

## 🌟 Live Portfolio Innovations ([shafiq-ahamed04.vercel.app](https://shafiq-ahamed04.vercel.app/))

- 🎬 **Dual-Stage Opening:** Fast terminal typing test sequence followed by a cinematic **Photo Title Card** with an acid-green glowing rim.
- 🎯 **QA Locator Crosshair Cursor:** Calibration reticle (`+`) tracking live coordinates `[X, Y]` and DOM element inspect badges (`[EXECUTE]`, `[NAVIGATE]`, `[DEFECT?]`).
- ⚡ **Global Neon Scroll Progress Bar:** Laser-head tracking at the top of the viewport with a live `SUITE RUN: %` test execution readout.
- 📜 **Keynote Scroll-Scrubbed Text:** Mindset copy dynamically illuminates from 35% ghost opacity into radiant bone-white `#F2EFE8` as you scroll past.
- 🖼️ **Automated Test Gallery:** Interactive exhibition deck with slide navigation, filmstrip selector, and accordion scroll anchors.
- 🎥 **Video Test Playback:** Video player executing actual Chrome headless test runs (`public/assets/test-run.mp4`) with play-on-scroll.

---

## 📊 GitHub Telemetry & Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=shafiq-ahamed04&theme=dark&hide_border=true&include_all_commits=true&count_private=true&show_icons=true&title_color=B6FF3C&icon_color=B6FF3C&text_color=F2EFE8&bg_color=0A0A0B" alt="GitHub Stats" height="175"/>
&nbsp;&nbsp;
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=shafiq-ahamed04&theme=dark&hide_border=true&include_all_commits=true&layout=compact&title_color=B6FF3C&text_color=F2EFE8&bg_color=0A0A0B" alt="Top Languages" height="175"/>

<br/>

<img src="https://streak-stats.demolab.com/?user=shafiq-ahamed04&theme=dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&ring=B6FF3C&fire=B6FF3C&currStreakLabel=B6FF3C&background=0A0A0B" alt="GitHub Streak" width="600"/>

</div>

---

## 📬 Direct Recruiter Pipeline

I am actively interviewing for **QA Automation Engineer**, **SDET Fresher**, and **Automation Test Engineer** positions. Zero freelance work.

- 🌐 **Portfolio:** [shafiq-ahamed04.vercel.app](https://shafiq-ahamed04.vercel.app/)
- 💼 **LinkedIn:** [linkedin.com/in/shafiq-ahamed-s](https://www.linkedin.com/in/shafiq-ahamed-s)
- 📧 **Email:** [shafiqahamedshajahan@gmail.com](mailto:shafiqahamedshajahan@gmail.com)
- 📍 **Location:** Tamil Nadu, India (Available immediately · Open to relocate)

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:B6FF3C,50:121316,100:0A0A0B&height=100&section=footer" width="100%"/>

*“Discipline over motivation. I break software so users never have to.”*

</div>

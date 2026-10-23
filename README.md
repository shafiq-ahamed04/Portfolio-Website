# Shafiq Ahamed — QA Automation Engineer Portfolio

> **"I break software so users never have to."**  
> Automated test suites, defect triage, and regression testing in Python, Selenium WebDriver, and Pytest.

---

## 🧪 Architecture & Concept: "The Portfolio is a Test Run"

- **Boot Sequence:** Pytest-style terminal typing out test cases (`collected 7 items ... PASSED`) with an under-2.5s glitch-cut into the hero (skippable, executed once per session).
- **Test Case Navigation:** Every section represents a test case (`[TC-01 About]` through `[TC-07 Contact]`), dynamically flipping status from `RUNNING` to `PASSED` as sections enter view.
- **Scroll Test Progress Bar:** Real-time test progress tracking with live `% PASSED` readout.
- **Visual System:** `#0A0A0B` deep base, bone text `#F2EFE8`, acid green accent `#B6FF3C` ("passed"), with red `#FF4D4D` for defect moments.
- **Interactive WebGL:** Three.js code-rain/particle field reacting to cursor physics with low-power and reduced-motion fallbacks.
- **Decoy Easter Egg:** Tasteful `[BUG FOUND]` flash button that triggers a QA defect resolution modal.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build & Preview
```bash
npm run build
npm run preview
```

---

## 🔬 Automated Pytest & Selenium Smoke Tests

A dedicated automated QA test suite is included under `tests/` covering end-to-end site reliability:
- `test_01_page_loads_and_title`: Asserts exact title tag and branding presence.
- `test_02_nav_anchors_work`: Verifies all 7 test case nav links and DOM target anchors.
- `test_03_resume_download_link`: Confirms `/resume.pdf` download target and filename attribute.
- `test_04_contact_form_validation`: Verifies form field constraints and input handling.
- `test_05_no_fatal_console_errors`: Inspects browser performance and console logs for zero severe JavaScript errors.

### Running Smoke Tests:
Ensure the preview or dev server is running on `http://localhost:4173`:
```bash
# In one terminal:
npm run preview

# In a second terminal:
pytest -v tests/
```

---

## 📌 Remaining TODOs

1. **API Testing Suite Repository Link:**
   - Tagged as `[TODO: repo link]` on Project 2 card. Update `githubUrl` in `src/content.ts` once the public repository is pushed.
2. **Screen Recording:**
   - Active screen recording from `C:\Users\shafi\Videos\Screen Recordings\Screen Recording 2026-10-23 093737.mp4` has been linked into `public/assets/test-run.mp4`. To swap with a new video, place the file in `public/assets/test-run.mp4`.

---

## 📊 Summary of Changes vs Old Site

| Feature | Old Site | Redesigned QA Portfolio |
|---|---|---|
| **Positioning** | "Aspiring DevOps Engineer & Full Stack Developer" | **QA Automation Engineer** (Python · Selenium · Pytest · API Testing) |
| **Experience / Claims** | DevOps, Docker, AWS, Linux, CI/CD, Full Stack | **QA ONLY**. 100% verified facts, zero invented metrics, B.Tech IT 2026 |
| **Concept** | Generic portfolio template | **"The Portfolio is a Test Run"** (Pytest boot, TC-01..TC-07 badges) |
| **Visuals & Hero** | Static avatar & orbit circles | **High-contrast duotone cut-out, 3D mouse tilt, Three.js WebGL code-particles, text scramble** |
| **Projects** | Generic MERN cards + dead ATCRS demo link | **Bug-Report cards (ID, Summary, Stack, Result), dead link removed, active test screenshots** |
| **Test Run** | None | **Live video slot with custom controls, play-on-scroll & interactive Pytest terminal console** |
| **GitHub Section** | Third-party Heroku widgets & stats | **Direct GitHub API integration, pinned QA journey, custom heat strip** |
| **Testing** | None | **5 Selenium + Pytest automated smoke tests in `/tests`** |

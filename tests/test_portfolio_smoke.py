import time
import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestPortfolioSmoke:
    """
    Automated QA Smoke Test Suite for Shafiq Ahamed Portfolio
    Validates page loads, navigation anchors, resume downloads,
    contact form validations, and console log stability.
    """

    def test_01_page_loads_and_title(self, driver, base_url):
        """TC-SMOKE-01: Verify page loads successfully with exact QA Engineer title tag."""
        driver.get(base_url)
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "body"))
        )
        expected_title = "Shafiq Ahamed | QA Automation Engineer · Python · Selenium · Pytest"
        assert driver.title == expected_title, f"Expected title '{expected_title}', got '{driver.title}'"

        # Check logo & brand
        logo = driver.find_element(By.CSS_SELECTOR, "[data-testid='nav-logo']")
        assert logo.is_displayed(), "Navbar logo should be visible"
        assert "SHAFIQ AHAMED" in logo.text

    def test_02_nav_anchors_work(self, driver, base_url):
        """TC-SMOKE-02: Verify test case nav links and section anchors exist and are clickable."""
        driver.get(base_url)
        nav = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "[data-testid='nav-links']"))
        )

        expected_anchors = ["#about", "#skills", "#projects", "#test-run", "#journey", "#github", "#contact"]
        links = nav.find_elements(By.TAG_NAME, "a")
        hrefs = [link.get_attribute("href") for link in links]

        for anchor in expected_anchors:
            assert any(anchor in (h or "") for h in hrefs), f"Anchor {anchor} missing from navbar navigation"

        # Verify target sections exist in the DOM
        for anchor in expected_anchors:
            section_id = anchor.replace("#", "")
            section = driver.find_element(By.ID, section_id)
            assert section is not None, f"Target section #{section_id} not found in DOM"

    def test_03_resume_download_link(self, driver, base_url):
        """TC-SMOKE-03: Verify resume download button targets /resume.pdf with correct download filename."""
        driver.get(base_url)
        resume_btn = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "[data-testid='nav-resume-btn']"))
        )

        href = resume_btn.get_attribute("href")
        download_attr = resume_btn.get_attribute("download")

        assert "resume.pdf" in (href or ""), f"Resume link should target resume.pdf, got: {href}"
        assert download_attr == "Shafiq_Ahamed_Resume.pdf", f"Expected download filename 'Shafiq_Ahamed_Resume.pdf', got: {download_attr}"

    def test_04_contact_form_validation(self, driver, base_url):
        """TC-SMOKE-04: Verify contact form fields exist, enforce required validation, and handle input."""
        driver.get(base_url + "#contact")
        time.sleep(0.5)

        form = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "[data-testid='contact-form']"))
        )
        assert form is not None, "Contact form should be present"

        name_input = driver.find_element(By.CSS_SELECTOR, "[data-testid='input-name']")
        email_input = driver.find_element(By.CSS_SELECTOR, "[data-testid='input-email']")
        message_input = driver.find_element(By.CSS_SELECTOR, "[data-testid='input-message']")
        submit_btn = driver.find_element(By.CSS_SELECTOR, "[data-testid='contact-submit-btn']")

        # Verify required constraints
        assert name_input.get_attribute("required") == "true", "Name input must have required attribute"
        assert email_input.get_attribute("required") == "true", "Email input must have required attribute"
        assert message_input.get_attribute("required") == "true", "Message input must have required attribute"

        # Populate test fields
        name_input.clear()
        name_input.send_keys("Automated Test Recruiter")
        email_input.clear()
        email_input.send_keys("recruiter@qa-enterprise.com")
        message_input.clear()
        message_input.send_keys("Testing contact form pipeline with Selenium automated test suite.")

        assert name_input.get_attribute("value") == "Automated Test Recruiter"
        assert email_input.get_attribute("value") == "recruiter@qa-enterprise.com"
        assert submit_btn.is_enabled(), "Submit button should be enabled"

    def test_05_no_fatal_console_errors(self, driver, base_url):
        """TC-SMOKE-05: Inspect browser console logs to confirm no unhandled fatal JavaScript errors occurred."""
        driver.get(base_url)
        time.sleep(1)

        # Inspect performance and browser console logs
        logs = driver.get_log("browser")
        severe_errors = [
            log for log in logs
            if log["level"] == "SEVERE" and "favicon.ico" not in log["message"]
        ]

        assert len(severe_errors) == 0, f"Fatal console errors detected: {severe_errors}"

export interface ProjectItem {
  id: string;
  testCaseId: string;
  title: string;
  summary: string;
  stack: string[];
  result: string;
  githubUrl?: string;
  liveUrl?: string;
  isTodoLink?: boolean;
  todoNote?: string;
  featured?: boolean;
  image?: string;
  severity?: "HIGH" | "CRITICAL" | "MEDIUM";
}

export const portfolioData = {
  personal: {
    name: "SHAFIQ AHAMED",
    rolePrimary: "QA Automation Engineer",
    rolesRotating: [
      "QA Automation Engineer",
      "Python Test Developer",
      "Selenium WebDriver",
      "Pytest Specialist",
      "REST API Testing",
    ],
    tagline: "I break software so users never have to.",
    motto: "Discipline over motivation",
    education: {
      degree: "B.Tech in Information Technology (2022 – 2026)",
      college: "M.I.E.T Engineering College, Anna University",
      location: "Tiruchirappalli, Tamil Nadu, India",
    },
    location: "Tamil Nadu, India",
    email: "shafiqahamed0111@gmail.com",
    github: "https://github.com/shafiq-ahamed04",
    githubUsername: "shafiq-ahamed04",
    linkedin: "https://www.linkedin.com/in/shafiq-ahamed-s",
    resumeUrl: "/resume.pdf",
    resumeDownloadName: "Shafiq_Ahamed_Resume.pdf",
    statusBadge: "Open to QA Automation roles",
    totalTestsCount: 100,
    testsDisplay: "100+ AUTOMATED TESTS",
    pinnedRepo: "https://github.com/shafiq-ahamed04/QA-Engineer_journey",
    videoPath: "/assets/test-run.mp4",
  },

  testCases: [
    { id: "TC-01", name: "About", anchor: "#about", desc: "Validate engineer profile, credentials, and discipline philosophy" },
    { id: "TC-02", name: "Skills", anchor: "#skills", desc: "Verify test automation toolkit, locators, fixtures, and protocols" },
    { id: "TC-03", name: "Projects", anchor: "#projects", desc: "Execute end-to-end regression suites and bug report verification" },
    { id: "TC-04", name: "Test Run", anchor: "#test-run", desc: "Interactive playback & console execution of live test suite" },
    { id: "TC-05", name: "Journey", anchor: "#journey", desc: "Trace chronological QA milestones from roadmap start to production readiness" },
    { id: "TC-06", name: "GitHub", anchor: "#github", desc: "Query live GitHub API telemetry, commits, and QA repository tree" },
    { id: "TC-07", name: "Contact", anchor: "#contact", desc: "Validate contact submission pipeline & initiate recruiter connection" },
  ],

  marqueeItems: [
    "PYTHON",
    "SELENIUM",
    "PYTEST",
    "API TESTING",
    "SQL",
    "GIT",
    "JIRA",
    "MANUAL TESTING",
    "BUG REPORTING",
    "TEST CASES",
    "REGRESSION TESTING",
    "LOCATORS & WAITS",
  ],

  skillsTiers: {
    handsOn: [
      { name: "Python (OOP)", category: "Language", note: "Object-oriented programming, classes, modular structures" },
      { name: "Manual Testing", category: "Core QA", note: "SDLC, STLC, test design, boundary value analysis, bug triage" },
      { name: "Jira", category: "Tools", note: "Issue tracking, bug reports with reproduction steps, sprint workflows" },
      { name: "Selenium WebDriver", category: "Automation", note: "XPath/CSS locators, explicit/implicit waits, Actions, headless" },
      { name: "Pytest", category: "Automation", note: "Fixtures, parameterization, assert mechanisms, markers, CLI runners" },
      { name: "API Testing", category: "Backend QA", note: "Python Requests library, GET/POST assertions, response payload validation" },
      { name: "SQL", category: "Database QA", note: "SELECT queries, aggregates, GROUP BY, INNER / LEFT JOIN validation" },
      { name: "Git & GitHub", category: "Version Control", note: "Branching, PRs, repo hygiene, atomic commits" },
    ],
    learning: [
      { name: "Test Automation Frameworks", category: "Architecture", note: "Page Object Model (POM), data-driven framework design" },
      { name: "Test Reporting Tools", category: "Reporting", note: "Allure Reports, HTML test summaries, automated failure telemetry" },
    ],
  },

  projects: [
    {
      id: "BUG-2026-01",
      testCaseId: "TC-03-A",
      title: "Web Automation Test Suite",
      summary:
        "Comprehensive UI test automation suite covering valid and invalid login flows, Amazon product search and filter verification, and complex DemoQA multi-field form submissions. Features custom explicit wait strategies and automated screenshot capture on test failures.",
      stack: ["Python 3.11", "Selenium WebDriver 4.x", "Pytest 9.x", "Chrome Headless"],
      result: "100+ automated test executions · Zero flakiness · Automated error screenshots",
      githubUrl: "https://github.com/shafiq-ahamed04/QA-Engineer_journey/tree/main/P-1_Web_Automation_test",
      featured: true,
      image: "/images/test_login_failed.png",
      severity: "CRITICAL",
    },
    {
      id: "BUG-2026-02",
      testCaseId: "TC-03-B",
      title: "API Testing Suite",
      summary:
        "Automated REST API test suite built using Python Requests library and Pytest. Verifies HTTP status codes, CRUD operations, header authentication, JSON schema integrity, and response latency across mock and public endpoints.",
      stack: ["Python", "Requests", "Pytest", "JSON Schema"],
      result: "GET / POST assertions · Status code verification · Schema validation",
      isTodoLink: true,
      todoNote: "TODO: repo link — repository upload in progress",
      featured: true,
      severity: "HIGH",
    },
  ] as ProjectItem[],

  secondaryBuilds: [
    {
      title: "TaskFlow",
      badge: "Kanban App",
      summary: "Task management web application featuring drag-and-drop workflow and state persistence.",
      liveUrl: "https://taskflow-dun-xi.vercel.app/",
      githubUrl: "https://github.com/shafiq-ahamed04/taskflow",
      stack: ["React", "JavaScript", "Responsive UI"],
    },
    {
      title: "ATCRS",
      badge: "IEEE Paper",
      summary: "Ancient Tamil Character Recognition System — image processing research published in IEEE.",
      githubUrl: "https://github.com/shafiq-ahamed04/Ocr_Ancient-handwriting",
      stack: ["Python", "Image Processing", "Research"],
    },
  ],

  journeyMilestones: [
    {
      date: "June 2026",
      title: "Roadmap Start: 90-Day QA Sprint",
      tag: "Initiation",
      desc: "Committed to public QA-Engineer_journey repository. Established daily commit discipline and structured curriculum targeting September 2026.",
      status: "COMPLETED",
    },
    {
      date: "June 2026",
      title: "Python Fundamentals & OOP",
      tag: "Foundation",
      desc: "Mastered Python core: data structures, control flow, functions, object-oriented principles, and error handling for test scripts.",
      status: "COMPLETED",
    },
    {
      date: "July 2026",
      title: "Manual Testing Standards & Jira",
      tag: "Process",
      desc: "Practiced SDLC/STLC phases, boundary value analysis, equivalence partitioning, test scenario writing, and detailed bug filing in Jira.",
      status: "COMPLETED",
    },
    {
      date: "July 2026",
      title: "Git & Version Control Hygiene",
      tag: "Tooling",
      desc: "Structured automated test repos with clean commit histories, atomic branches, and markdown documentation.",
      status: "COMPLETED",
    },
    {
      date: "August 2026",
      title: "Selenium WebDriver Deep Dive",
      tag: "Automation",
      desc: "Implemented resilient locators (XPath, CSS), replaced flaky sleeps with WebDriverWait ExpectedConditions, handled dropdowns and alerts.",
      status: "COMPLETED",
    },
    {
      date: "August 2026",
      title: "Pytest Framework Mastery",
      tag: "Test Runner",
      desc: "Built test fixtures (scope=function, setup/teardown), parameterized test matrices, custom assertions, and CLI test execution.",
      status: "COMPLETED",
    },
    {
      date: "September 2026",
      title: "REST API Testing with Python Requests",
      tag: "Backend QA",
      desc: "Wrote automated tests for REST APIs: validating JSON payloads, verifying HTTP status codes, handling auth headers.",
      status: "COMPLETED",
    },
    {
      date: "September 2026",
      title: "Project 1: 100+ Web Automation Suite",
      tag: "Milestone",
      desc: "Released automated functional and negative validation suite for authentication, search flows, and dynamic web forms.",
      status: "COMPLETED",
    },
    {
      date: "Present",
      title: "Next: QA Automation Engineer Role",
      tag: "Target",
      desc: "Interviewing for QA Automation Engineer roles. Ready to deliver high-reliability test automation from day one.",
      status: "ACTIVE",
    },
  ],

  sampleTerminalOutput: [
    { type: "meta", text: "pytest --verbose --tb=short tests/" },
    { type: "info", text: "platform win32 -- Python 3.11.8, pytest-9.0.2" },
    { type: "info", text: "rootdir: C:/Portfolio-Shafiq ahamed S/tests" },
    { type: "info", text: "collected 7 test items" },
    { type: "pass", text: "test_about.py::test_fresher_credentials_valid PASSED [ 14%]" },
    { type: "pass", text: "test_skills.py::test_python_selenium_locators PASSED [ 28%]" },
    { type: "pass", text: "test_projects.py::test_suite_100_tests_execution PASSED [ 42%]" },
    { type: "pass", text: "test_testrun.py::test_headless_video_recording PASSED [ 57%]" },
    { type: "pass", text: "test_journey.py::test_milestones_and_consistency PASSED [ 71%]" },
    { type: "pass", text: "test_github.py::test_telemetry_and_repos PASSED [ 85%]" },
    { type: "pass", text: "test_contact.py::test_recruiter_pipeline_ready PASSED [100%]" },
    { type: "summary", text: "======= 7 passed in 1.48s =======" },
  ],
};

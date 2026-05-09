# 🎭 PlayVision QA Automation

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

> A production-grade, multi-layer automated QA framework built entirely with Playwright — testing a real e-commerce application across three layers: API, End-to-End functional, and Visual Regression. Designed to reflect industry-standard practices used at modern software companies.

---

## 📊 Test Results

![API Tests](Evidence/api%20test-report.png)
![E2E Tests](Evidence/e2e%20test-report.png)
![Visual Tests](Evidence/visual%20regression%20test-report.png)

| Layer | Tests | Status |
|-------|-------|--------|
| API Testing | 6 | ✅ All Passing |
| E2E Functional | 7 | ✅ All Passing |
| Visual Regression | 5 | ✅ All Passing |
| **Total** | **18** | **✅ 18/18 Passing** |

**Total runtime: ~1.8 minutes**

---

## 🧠 Why This Project

Most QA projects test only the UI. This framework goes further by testing three independent layers:

- **API layer** — verifies the backend behaves correctly before the UI even loads
- **E2E layer** — simulates real user journeys through the browser
- **Visual layer** — catches unintended UI changes that functional tests miss

This is the same multi-layer approach used by QA teams at companies like Google, Microsoft and Thoughtworks.

---

## 🏗️ Architecture

```
playvision-qa-automation/
├── pages/                        # Page Object Model — 8 classes
│   ├── LoginPage.js
│   ├── CartPage.js
│   ├── PaymentPage.js
│   ├── ProductPage.js
│   ├── CategoryPage.js
│   ├── SearchPage.js
│   ├── ContactUsPage.js
│   └── CheckoutPage.js
├── tests/
│   ├── api.spec.js               # API layer — 6 tests
│   ├── automation_e2e.spec.js    # E2E layer — 7 tests
│   └── visual.spec.js            # Visual layer — 5 tests
├── Evidence/                     # Proof of test execution
├── testdata.js                   # Centralized test data
├── .env                          # Environment variables (not committed)
├── playwright.config.js          # Framework configuration
└── .github/workflows/            # CI/CD — auto runs on every push
```

---

## 🔬 Test Coverage

### Layer 1 — API Testing
Tests the backend REST API directly using Playwright's request context — no browser needed. Covers GET, POST and DELETE methods with both positive and negative scenarios.

| ID | Test Case | Method | Type |
|----|-----------|--------|------|
| AT01 | Get all products returns 200 and list | GET | Positive |
| AT02 | Get all brands returns 200 and list | GET | Positive |
| AT03 | Search product returns matching results | POST | Positive |
| AT04 | Search with no parameter returns 400 | POST | Negative |
| AT05 | DELETE method not allowed returns 405 | DELETE | Negative |
| AT06 | Register new user with valid data | POST | Positive |

### Layer 2 — E2E Functional Testing
Simulates complete real user journeys through the browser using the Page Object Model pattern. Covers both happy path and negative scenarios.

| ID | Test Case | Type |
|----|-----------|------|
| TC01 | Contact Us form submits successfully | Positive |
| TC02 | Search for a product returns results | Positive |
| TC03 | Add product to cart and verify | Positive |
| TC04 | Remove item from cart | Positive |
| TC05 | Register, complete checkout and delete account | E2E Flow |
| TC06 | Invalid login shows error message | Negative |
| TC07 | Checkout with empty cart shows empty state | Negative |

### Layer 3 — Visual Regression Testing
Takes full-page screenshots and compares them pixel-by-pixel against saved baseline images. Automatically detects any unintended UI changes — layout shifts, color changes, missing elements.

| Page | URL |
|------|-----|
| Homepage | `/` |
| Products page | `/products` |
| Login page | `/login` |
| Cart page | `/view_cart` |
| Contact Us page | `/contact_us` |

---

## 🎯 Design Decisions

**Page Object Model (POM)** — UI interactions are separated from test logic across 8 dedicated page classes. This means if the website changes, only one file needs updating — not every test.

**Centralized Test Data** — All test inputs live in `testdata.js`. No hardcoded values scattered across test files.

**Environment Variables** — Sensitive data like passwords are stored in `.env` and never committed to GitHub.

**Independent Tests** — Every test runs in isolation with no shared state. A failure in one test never affects another.

**Negative Testing** — Both API and E2E layers include tests for invalid inputs and edge cases — not just happy paths.

**Single Framework** — API, E2E and visual tests all run from one tool, one command, one report. No context switching between Postman, Selenium and separate visual tools.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Install
```bash
npm install
npx playwright install
```

### Run all 18 tests
```bash
npx playwright test
```

### Run by layer
```bash
# API tests
npx playwright test tests/api.spec.js

# E2E tests
npx playwright test tests/automation_e2e.spec.js

# Visual tests
npx playwright test tests/visual.spec.js
```

### Run with visible browser
```bash
npx playwright test --headed
```

### View full HTML report with videos and traces
```bash
npx playwright show-report
```

### Record new tests by clicking (no coding needed)
```bash
npx playwright codegen https://automationexercise.com
```

### Update visual baselines after intentional UI changes
```bash
npx playwright test tests/visual.spec.js --update-snapshots
```

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Playwright | Latest | Browser automation, API testing, visual regression |
| JavaScript | ES6+ | Test scripting |
| Node.js | v18+ | Runtime |
| GitHub Actions | — | CI/CD pipeline |
| dotenv | Latest | Environment variable management |

---

## ⚙️ CI/CD Pipeline

Every push to the `main` branch automatically triggers the GitHub Actions workflow which:
1. Installs dependencies
2. Installs Playwright browsers
3. Runs all 18 tests
4. Uploads the HTML report as an artifact

This means the test suite runs without any manual intervention on every code change.

---

## 🎯 Target Application

[AutomationExercise.com](https://automationexercise.com) — A purpose-built e-commerce platform designed for automation practice, with real product listings, cart, checkout, user registration and a public REST API.
```


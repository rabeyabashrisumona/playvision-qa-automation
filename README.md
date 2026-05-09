# Visual Testing Project — AutomationExercise.com

## 👩‍💻 Author
NSU SQA Course Project

## 📌 What This Project Does
This is an End-to-End (E2E) automation testing project built with **Playwright**.
It automates and visually tests the e-commerce demo website: https://automationexercise.com


## 🏗️ Project Architecture
- **API Tests** — 6 tests covering GET, POST, DELETE endpoints
- **E2E Functional Tests** — 7 tests covering full user journey
- **Visual Regression Tests** — 5 tests with pixel-by-pixel comparison
- **Total: 18 automated test cases**
- **Test Data** — Centralized in `testdata.js`
- **Environment Config** — Managed via `.env` file
- **CI/CD** — GitHub Actions auto-runs on every push


## 🧪 Test Coverage

### E2E Test (`tests/automation_e2e.spec.js`)
| Phase | Description |
|-------|-------------|
| Phase 1 | Contact Us form submission and homepage return verification |
| Phase 2 | Video Tutorials page navigation |
| Phase 3 | Women category browsing (Dress, Tops, Saree) + add to cart |
| Phase 4 | Kids category browsing (Dress, Tops & Shirts) + add to cart |
| Phase 5 | Brand page verification (Polo) |
| Phase 6 | Cart management — verify and remove item |
| Phase 7 | Full user registration with dynamic form data |
| Phase 8 | Checkout flow with payment details |
| Phase 9 | Account deletion cleanup |

### Visual Tests (`tests/visual.spec.js`)
| Test | Page |
|------|------|
| Homepage snapshot | `automationexercise.com/` |
| Products page snapshot | `automationexercise.com/products` |
| Login page snapshot | `automationexercise.com/login` |
| Cart page snapshot | `automationexercise.com/view_cart` |
| Contact Us snapshot | `automationexercise.com/contact_us` |

### Smoke Tests (`e2e/example.spec.js`)
- Playwright.dev title check
- Get Started link navigation

## 🚀 How to Run

### Install dependencies
```bash
npm install
```

### Install browsers
```bash
npx playwright install
```

### Run all tests
```bash
npm test
```

### Run only visual tests
```bash
npx playwright test tests/visual.spec.js
```

### Generate visual baselines (first time only)
```bash
npx playwright test tests/visual.spec.js --update-snapshots
```

### Run only E2E test
```bash
npx playwright test tests/automation_e2e.spec.js
```

### Run only smoke tests
```bash
npx playwright test e2e/
```

### View HTML report
```bash
npm run report
```

## 🛠️ Tech Stack
- **Playwright** v1.x
- **Node.js**
- **JavaScript** (CommonJS)
- **Page Object Model (POM)** design pattern
- **GitHub Actions** (CI/CD)
- **Multi-browser**: Chromium + Firefox

## 📁 Project Structure
```
visual-testing-project/
├── tests/
│   ├── automation_e2e.spec.js   # Main 9-phase E2E test
│   └── visual.spec.js           # Visual regression tests
├── e2e/
│   └── example.spec.js          # Smoke tests
├── pages/                       # Page Object Model classes
│   ├── SearchPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── LoginPage.js
│   ├── ContactUsPage.js
│   ├── PaymentPage.js
│   └── CategoryPage.js
├── .github/
│   └── workflows/               # GitHub Actions CI workflow
├── playwright-report/           # HTML test report (auto-generated)
├── playwright.config.js         # Playwright configuration
└── package.json
```

## 📸 Visual Testing Explained
This project uses Playwright's built-in screenshot comparison.
On first run, baseline images are saved to `tests/visual.spec.js-snapshots/`.
On subsequent runs, new screenshots are compared pixel-by-pixel against the baselines.
A tolerance of `maxDiffPixels: 300` allows minor rendering differences.

> To update baselines after intentional UI changes:
> ```bash
> npx playwright test tests/visual.spec.js --update-snapshots
> ```

## End-to-End Testing (Playwright)

This project includes end-to-end tests using Playwright.

### Requirements

- Node.js (LTS)
- Project dependencies installed

### Install

```bash
npm ci
npx playwright install
```

### Run tests

```bash
npx playwright test
```

### Run tests with UI

```bash
npx playwright test --ui
```

### View report

```bash
npx playwright show-report
```


---

### Environment Variables


Create a `.env` file in the root:

```env
BASE_URL=http://localhost:5173
API_URL=http://localhost:3000
```

---

### Run with backend (local)

Make sure backend and database are running:

```bash
docker-compose up

npx playwright test
```

---


### CI (GitHub Actions)

Tests run automatically on:

- push to main/master
- pull requests

Workflow:
- Installs dependencies
- Installs Playwright browsers
- Runs tests in Ubuntu environment
- Uploads HTML report as artifact
# Repository Management Testing
## Overview
This repository contains a test strategy, test cases, and automated test scripts for a hypothetical **Repository Management** web application in **test-strategy.md** file.

## Project Structure
```tree
├─ cypress/
|  ├─ downloads/
|  ├─ e2e/
|  |  ├─repoCreation.spec.cy.js
|  ├─ fixtures/
|  |  ├─ example.json
│  ├─ support/
|  |  ├─ commands.js
|  |  ├─ e2e.js
├─ cypress.config.js
├─ Guidelines.md
├─ package-lock.json
├─ package.json
├─ test-strategy.md
└─ README.md
```

### Clone the repository
``` sh
git clone https://github.com/siccoo/repo-manager-qa-test
cd repo-manager-qa-test
```

### Install dependencies
``` sh
npm install
```

### Run Cypress test
``` sh
npx cypress run
```

### Bug Reporting & Tracking
```
- All bugs should be logged using GitHub Issues.
- Follow the provided bug reporting template in test-strategy.md.
```

### CI/CD Integration
```
- Cypress tests can be integrated with GitHub Actions.
```

**Notes:** If you run cypress on *repoCreation.spec.js*, you will get an error, because it's hypothectical and not *actual* or *real*. But I have to show because it was requested the Framework choice. All of the answers is in **test-strategy.md** file and the cypress test file is also in **repoCreation.spec.cy.js**.
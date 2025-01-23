//Install Allure for playwright
//npm install -D allure-playwright
npm install -g allure-commandline --save-dev

//select allure report reporter from Terminal
npx playwright test --reporter=line,allure-playwright

//generate allure report
allure generate ./allure-results -o ./allure-report

//Open allure report
allure open ./allure-report

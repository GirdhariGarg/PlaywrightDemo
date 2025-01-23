//Install Allure for playwright
//npm install -D allure-playwright
npm install -g allure-commandline --save-dev

//select allure report reporter from Terminal
npx playwright test --reporter=line,allure-playwright

//generate allure report
allure generate ./allure-results -o ./allure-report

//Open allure report
allure open ./allure-report


or create a new repository on the command line
echo "# playwright_Typescript" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/GirdhariGarg/playwright_Typescript.git
git push -u origin main


or push an existing repository from the command line
git remote add origin https://github.com/GirdhariGarg/playwright_Typescript.git
git branch -M main
git push -u origin main

/////////////////////////////////
--- generate token from github
user icon->settings->developer settings- personal token -> classic token -- Fill all info and tick all checkboxes, Copy generated token
---- configure in VS code project
run command
- git config --global credential.helper store
- git config --global credential.https://github.com.token 
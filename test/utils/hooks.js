const {After} = require('cucumber');
import multipleCucumberHtmlReporter from 'wdio-multiple-cucumber-html-reporter';

After((scenarioResult) => {
    if (scenarioResult.result.status === 'failed') {
        multipleCucumberHtmlReporter.attach(browser.saveScreenshot(), 'image/png', 'after');
    }
    return scenarioResult.status;
});
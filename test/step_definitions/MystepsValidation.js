import WebdriverIoHomePage from '../page_objects/webdriverio.home.page';
import multipleCucumberHtmlReporter from 'wdio-multiple-cucumber-html-reporter';
const assert = require('assert');
import {Given, Then, When} from 'cucumber'

Given(/^I am webdriver page$/, function () {
    WebdriverIoHomePage.open();
    multipleCucumberHtmlReporter.attach(browser.saveScreenshot(), 'image/png');
});

When(/^get the title$/, function () {
    const title = browser.getTitle();
    console.log(title);
    assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
});

Then(/^title should be matched$/, async function () {

    let result = await connection.execute('select * from demo');
    console.log(result.rows());
});
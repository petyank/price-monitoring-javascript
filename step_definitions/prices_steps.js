// features/step_definitions/prices_steps.js
import { Given, When, Then } from "@cucumber/cucumber";
import { By, until } from 'selenium-webdriver';
import { assert, expect } from "chai";
import softAssert from "soft-assert";
import { BASE_URL } from "../config.js";
import Utils from "../support/utils.mjs";
import FinancePage from "../page_objects/financePage.js";

let initialPrice;
let prices = [];

/**
 * Step definition for opening the Google Finance page for a given symbol.
 * @param {string} symbol - The symbol of the stock to open.
 */
Given('I open the Google Finance {string} quote website', async function (symbol) {
  try {
    this.page = new FinancePage(this.driver);

    // Open the BTC page
    await this.page.openBtcPage();

    // Wait for the price element to be displayed
    await this.page.waitForPriceToBeDisplayed();

    console.log('The BTC price is displayed');
  }
  catch (error) {
    console.error('The test did not run', error);
  }
});

/**
 * Step definition for collecting prices at regular intervals.
 * @param {number} pollInterval - The interval in seconds between price collection.
 * @param {number} collectDuration - The duration in minutes for price collection.
 */


When("I monitor the BTC-USD price for a duration of {int} minutes at intervals of {int} seconds", async function (collectDuration, pollInterval) {
  let collectDurationInSeconds = collectDuration * 60;
  if (pollInterval === 0) {
    throw new Error("The poll interval cannot be 0");
  }
  const totalPriceRecords = Math.floor(collectDurationInSeconds / pollInterval);

  prices = [];

  await this.page.openBtcPage();

  for (let i = 0; i < totalPriceRecords; i++) {
    let price = await this.page.getPrices();
    prices.push(price);
    await new Promise(resolve => setTimeout(resolve, pollInterval * 1000));
  }
  console.log("Prices collected");
});

/**
 * Step definition for validating the average price variation.
 * @param {number} threshold - The maximum allowed percentage variation of the average price.
 */
Then("the average BTC-USD price does not vary by more than {int} %", function (threshold) {
  let initialPrice = prices[0];

  if (initialPrice === 0) {
    throw new Error("The price cannot be 0");
  }

  if (prices.length === 0) {
    throw new Error("The collection of prices cannot be empty");
  }

  let sumOfCollectedPrices = 0;

  for (let i = 0; i < prices.length; i++) {
    sumOfCollectedPrices += prices[i];
  }
  const averagePrice = sumOfCollectedPrices / prices.length;
  const percentageDifference = ((averagePrice - initialPrice) / initialPrice) * 100;
  const isAveragePriceLowerThanThreshold = Math.abs(percentageDifference) <= threshold;

  assert.isTrue(isAveragePriceLowerThanThreshold);

  console.log("The average price does not vary by more than the expected threshold");

});

/**
 * Step definition for validating individual price variations.
 * @param {number} threshold - The maximum allowed percentage variation of each price.
 */
Then("there are no values that vary by more than {int} %", function (threshold) {
  let oldValue;
  let newValue;
  var percentDiff;

  for (let i = 1; i < prices.length; i++) {
    oldValue = prices[i - 1];
    newValue = prices[i];
    percentDiff = Utils.getPercentDiff(oldValue, newValue);
  }

  let isPriceVariationLowerThanThreshold = Math.abs(percentDiff) <= threshold;

  assert.isTrue(isPriceVariationLowerThanThreshold);

  console.log("The price variation does not exceed the expected threshold");
});

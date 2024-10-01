// features/step_definitions/terms_and_conditions_steps.js

import { Given, When, Then } from "@cucumber/cucumber";
import { By, until } from 'selenium-webdriver';
import { assert, expect } from "chai";
import softAssert from "soft-assert";
import { BASE_URL } from "../config.js";
import TermsAndConditionsPage from "../page_objects/termsAndConditionsPage.js";

/**
 * Verify if the Terms and Conditions form is present. */


Given("The terms and conditions consent is requested", async function () {
  this.page = new TermsAndConditionsPage;
  //Verify the form is shown
  await verifyFormIsOpen();
});

When("I accept the terms and conditions", async function () {
  acceptTerms();
  await new Promise(resolve => setTimeout(resolve, 10000));
});

/**
 * Accept the Terms and Conditions.
 */
Then("the terms and conditions form disappears", async function () {
  await verifyFormDisappears();
});

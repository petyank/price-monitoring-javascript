import { WebDriver } from "selenium-webdriver";
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { BASE_URL } from "../config.js";
import { expect } from "chai";

/**
 * Represents the Terms and Conditions page object.
 */
class TermsAndConditionsPage {
  /**
   * Constructs a new TermsAndConditionsPage object.
   * @param {WebDriver} driver - The WebDriver instance.
   */
  constructor(driver) {
    this.driver = driver;
    this.url = BASE_URL;
    this.formSelector = By.css("#yDmH0d > c-wiz > div > div > div > div.NIoIEf > div.G4njw");
    this.acceptTermsSelector = By.css("#yDmH0d > c-wiz > div > div > div > div.NIoIEf > div.G4njw > div.AIC7ge > div.CxJub > div.VtwTSb > form:nth-child(2) > div > div > button > div.VfPpkd-RLmnJb");
  }

  /**
   * Verifies if the form is open.
   */
  async verifyFormIsOpen() {
    await this.driver.get(this.url);
    const formElement = await this.driver.findElement(this.formSelector);
    let isFormAvailable = await formElement.isDisplayed();
    expect(isFormDisplayed).to.be.true;

  }

  /**
   * Accepts the terms and conditions.
   */
  async acceptTerms() {
    const acceptTermsButton = await this.driver.findElement(this.acceptTermsSelector);
    await acceptTermsButton.click();
  }
  async verifyFormDisappears() {

    await new Promise(resolve => setTimeout(resolve, 10000));
    expect(isFormDisplayed).to.be.false;

    if (isFormDisplayed === true) {
      throw new Error("Terms not accepted");
    }

  }

}

export default TermsAndConditionsPage;

// features/support/world.js

import { setWorldConstructor } from "@cucumber/cucumber";
import createDriver from "../webdriver.js";
import FinancePage from "../page_objects/financePage.js";
import TermsAndConditionsPage from "../page_objects/termsAndConditionsPage.js";

/**
 * CustomWorld class represents the Cucumber.js World object.
 * It initializes the driver and page objects used in the tests.
 */
class CustomWorld {
  /**
   * Initializes the driver and page objects.
   */
  async init() {
    this.driver = await createDriver();
    this.financePage = new FinancePage(this.driver);
    this.termsAndConditionsPage = new TermsAndConditionsPage(this.driver);
  }

  /**
   * Cleans up the driver instance.
   */
  async cleanUp() {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}

setWorldConstructor(CustomWorld);

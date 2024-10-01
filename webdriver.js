// webdriver.js
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import {Options} from "selenium-webdriver/chrome.js";

async function createDriver() {
  // return new Builder().forBrowser("chrome").build();
  var options = new Options()
  options.addArguments('--remote-allow-origins=*')
  options.addArguments('--disable-search-engine-choice-screen');
  options.addArguments('user-data-dir=ChromeProfile');
  options.setPageLoadStrategy('normal');
  return new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(options)
  .build();
}

export default createDriver;
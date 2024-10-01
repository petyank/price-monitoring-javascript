# Price Monitoring tests with Selenium, JavaScript and Cucummber
This project is designed to monitor the prices of Bitcoin (BTC) at given time intervals over a specified duration. The automation is implemented using Selenium for browser interaction, JavaScript for scripting, and Cucumber for behavior-driven development (BDD). 

## Prerequisites

Before you begin, ensure you have met the following requirements:

- NPM installed on your local machine.
- Google Chrome browser.
- ChromeDriver (compatible with your Chrome version).

## Installation

1. Clone the Repository:
```
git clone https://github.com/petyank/price-monitoring-javascript
cd price-monitoring-javascript
```
2. Install the required packages:
```
npm install
```
3. Download and place ChromeDriver:
   - Download the appropriate ChromeDriver.
   - Place the ChromeDriver executable in a directory that is in your system's PATH or in the project directory.

## Usage

1. For running the tests, run the following command:
```
npm test
```
This command will execute the BDD test scenarios defined in the features directory.

## Project Structure

- features/: Contains the feature files and step definitions.
- page_objects/: Page Object Model (POM) scripts.
- reportss/: Contains the Allure reports with the results of the test runs.
- step-definitions/: Directory containing step definition files written in JavaScript.
- financePage.js: Script representing the finance page containing the BTC price element.
- support/: Utility scripts.
- utils.mjs: Utility functions for the project.
- config.js: Configuration and setup for ChromeDriver.
- README.md: Project documentation.
- webdriver.js: Options for running the webdriver.

## Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.
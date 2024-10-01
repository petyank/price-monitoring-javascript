export default {
    parallel: 1,
    format: ["html:./reports/cucumber-report.html"],
    import: ["@babel/register", "./step_definitions/*.js", "./support/*.mjs"],
  };
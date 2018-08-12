$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/manishmishra/Documents/workspace/CucumberDemo/src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Reliance Digital",
  "description": "",
  "id": "login-to-reliance-digital",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to Reliance Digital Test Scenario",
  "description": "",
  "id": "login-to-reliance-digital;login-to-reliance-digital-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is at Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "tital of the login page is https://reliancedigital.in/",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on rigister button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Provide UserName and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User will click on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User will successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Defination.user_at_home_page()"
});
formatter.result({
  "duration": 4616640227,
  "status": "passed"
});
formatter.match({
  "location": "Login_Defination.login_page_tital()"
});
formatter.result({
  "duration": 10560751,
  "status": "passed"
});
formatter.match({
  "location": "Login_Defination.click_on_register_button()"
});
formatter.result({
  "duration": 581573035,
  "status": "passed"
});
formatter.match({
  "location": "Login_Defination.enter_email_and_password()"
});
formatter.result({
  "duration": 278578405,
  "status": "passed"
});
formatter.match({
  "location": "Login_Defination.click_submit_button()"
});
formatter.result({
  "duration": 99493725,
  "status": "passed"
});
formatter.match({
  "location": "Login_Defination.login_success()"
});
formatter.result({
  "duration": 99699434,
  "status": "passed"
});
});
package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/manishmishra/Documents/workspace/CucumberDemo/src/main/java/Features/Login.feature",
	    glue = {"stepDefination"},
	    format = {"pretty","html:test-output"}
		)

public class TestRunner {

}

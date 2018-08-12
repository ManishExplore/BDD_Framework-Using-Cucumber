package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_Defination {
	WebDriver driver;
	@Given("^User is at Home Page$")
	public void user_at_home_page()
	{
		System.setProperty("webdriver.chrome.driver", "/Users/manishmishra/Downloads/Selenium-3/driver/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://reliancedigital.in/");
		String currentWindow = driver.getWindowHandle();
		driver.switchTo().window(currentWindow);
		driver.manage().window().maximize();
	}
	@When("^tital of the login page is https://reliancedigital.in/$")
	public void login_page_tital()
	{
		String url = driver.getCurrentUrl();
		System.out.println(url);
	}
	@Then("^Click on rigister button$")
	public void click_on_register_button()
	{
		driver.findElement(By.className("btn-text")).click();
	}
	@Then("^Provide UserName and Password$")
	public void enter_email_and_password()
	{
		driver.findElement(By.name("userName")).sendKeys("example");
		driver.findElement(By.name("password")).sendKeys("Password");
	}
	@Then("^User will click on signin button$")
	public void click_submit_button()
	{
		driver.findElement(By.xpath("//button[text()='Submit']")).click();
	}
	@Then("^User will successful login$")
	public void login_success()
	{
		String tital = driver.getTitle();
		System.out.println(tital);
		driver.quit();
	}

}

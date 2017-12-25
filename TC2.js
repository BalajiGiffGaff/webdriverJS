var webdriver=require('selenium-webdriver'),
	{describe,it,after,before}=require('selenium-webdriver/testing'),
	By=webdriver.By,
	until=webdriver.until;
var driver;
var assert =require('chai').assert;
var firstName = 'input#name_3_firstname',
	lastName='input#name_3_lastname';

describe('Form Scenario',function(){
	this.timeout(50000);
	beforeEach('Launch Browser',function(){
		driver=new webdriver.Builder().forBrowser('chrome').build();
		driver.manage().window().maximize();
		driver.get('http://demoqa.com/registration/');

	});

	afterEach('Quit Driver',function(){
		driver.quit();
		});

	it('Complete Form',function(){
		driver.findElement(By.css(firstName)).sendKeys('Test Firstname');
		driver.findElement(By.css(lastName)).sendKeys('Test Lastname');
	});

});
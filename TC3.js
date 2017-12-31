/******Test ************
Sample Project for WindowHandle scenario
This includes Chai for Assertion
Running the project with Mocha 
************************/

var webdriver=require('selenium-webdriver'),
	{describe,it,after,before}=require('selenium-webdriver/testing'),
	By=webdriver.By,
	until=webdriver.until;
var driver;
var assert =require('chai').assert;
var url = 'http://toolsqa.com/automation-practice-switch-windows/';

describe('WindowHandle Test Case', function(){
	this.timeout(150000);
	beforeEach('browser setUp',function(){
		driver=new webdriver.Builder().forBrowser('chrome').build();
		driver.manage().window().maximize();
		driver.get(url);

	});

	afterEach('Quit Driver',function(){
		driver.quit();
		});

	it('Test Case 3 For Windows Handle', function(){
		var parentHandle;
		driver.getWindowHandle().then(function(handle){
			parentHandle=handle;
			console.log('Current Window handle is >>>>>'+parentHandle);

		});

	});


});

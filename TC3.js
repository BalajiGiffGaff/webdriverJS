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
var newBrowserTab='#content > p:nth-child(6) > button';

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
			console.log('Parent Window handle is >>>>>'+parentHandle);

		});
		driver.findElement(By.css(newBrowserTab)).click();
		var currentHandle;
		driver.getAllWindowHandles().then(function(windowHandles){
			currentHandle=windowHandles;
			console.log('Number of Windows opened'+windowHandles.length);
			console.log('All Window handle is >>>>>'+currentHandle);
			driver.getTitle().then(function (title) {
				console.log('Title of Current window -> ' + title);
				});
			windowHandles.forEach(function(currHandle){
			console.log('Currently in'+currHandle);
			if(currHandle!=parentHandle)
			{
				console.log('Switching to other window Now');
				driver.switchTo().window(currHandle);
				driver.getTitle().then(function (title) {
				console.log('Title of new window -> ' + title);
				});

			}
		});	

		});


	});


});

var webdriver = require('selenium-webdriver'),
    {describe,it,after,before}=require('selenium-webdriver/testing'),
	By=webdriver.By,
	assert=require('assert');
	until=webdriver.until;
	var driver;

	

describe('First Mocha WebdriverJS test',function(){
	this.timeout(50000);
	beforeEach('Launch the driver',function(){

		 driver = new webdriver.Builder().forBrowser('chrome').build();
		 driver.manage().window().maximize();
         driver.get('https://library-app.firebaseapp.com/');


	});

	afterEach('Quit Driver',function(){
		driver.quit();
		});

	xit('Test 1',function(){
		
		driver.findElement(By.css('input')).then(function(el){
	console.log("Success" + el);
         });
	});

	it('Test 2',function(){

		driver.findElement(By.css('input')).sendKeys('mmm@user.com');
		driver.findElement(By.css('.btn-lg')).click();
		driver.wait(until.elementLocated(By.css('.alert-success')),5000);
		driver.findElement(By.css('.alert-success')).getText().then(function(textfromAlert){
        console.log("Print the Alert Message"+textfromAlert)
         });

	});
});

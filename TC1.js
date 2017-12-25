//*********************************************************************************//
var webdriver = require('selenium-webdriver'),
    {describe,it,after,before}=require('selenium-webdriver/testing'),
	By=webdriver.By,
	until=webdriver.until;
var driver;
var assert =require('chai').assert,
    expectedMesage ='Usernames cannot be changed.';

	

describe('First Mocha WebdriverJS test',function(){
	this.timeout(50000);
	beforeEach('Launch the driver',function(){

		 driver = new webdriver.Builder().forBrowser('chrome').build();
		 driver.manage().window().maximize();
         driver.get('http://store.demoqa.com/wp-login.php');


	});

	afterEach('Quit Driver',function(){
		driver.quit();
		});

	it('Test 1',function(){
		
		driver.findElement(By.css('input#user_login')).sendKeys('zmmm');
		driver.findElement(By.css('input#user_pass')).sendKeys('Ambattur123');
		driver.findElement(By.css('input#wp-submit')).click();
		var getTextofStore; 
		driver.findElement(By.css('span.description')).getText().then(function(getTxt){
 		getTextofStore=getTxt;
   		console.log("Text from Landing Pge   "+getTextofStore);
   		assert.equal(expectedMesage, getTextofStore, 'foo equal `bar`');
		});
		
         
	});

});

	


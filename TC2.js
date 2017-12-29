var webdriver=require('selenium-webdriver'),
	{describe,it,after,before}=require('selenium-webdriver/testing'),
	By=webdriver.By,
	until=webdriver.until;
var driver;
var assert =require('chai').assert,
expectedMesage ='Thank you for your registration';
var firstName = 'input#name_3_firstname',
	lastName='input#name_3_lastname',
	MartialSingle='input[value="single"]',
	HobbyDance='input[value="dance"]',
	PhoneNumber='input#phone_9',
	userName='input#username',
	emailid='input#email_1',
	password='input#password_2',
	confPassword='input#confirm_password_password_2',
	submit='input[type="submit"]',
	postReg='p.piereg_message';


describe('Form Scenario',function(){
	this.timeout(150000);
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

		var Martialel=driver.findElement(By.css(MartialSingle));
		Martialel.click();
		Martialel.isSelected().then(function(selected){
			assert.isTrue(selected, 'Single is selected');
			console.log('Single is selected');
		});
		
		var hobbyel=driver.findElement(By.css(HobbyDance));
		hobbyel.click();
		hobbyel.isSelected().then(function(selected){
			assert.isTrue(selected, 'Dance is selected');
			console.log('Dance is selected');
		});
		driver.findElement(By.css(PhoneNumber)).sendKeys('1234567890');
		driver.findElement(By.css(userName)).sendKeys('TestuserName');
		driver.findElement(By.css(emailid)).sendKeys('Test_m@123.com');
		driver.findElement(By.css(password)).sendKeys('Test_143');
		driver.findElement(By.css(confPassword)).sendKeys('Test_143');
		driver.findElement(By.css(submit)).click();
        var getTextofStore;
		driver.findElement(By.css(postReg)).getText().then(function(getTxt){
 		getTextofStore=getTxt;
   		console.log("Text from Landing Pge   "+getTextofStore);
   		assert.equal(expectedMesage, getTextofStore, 'description should match');
		});
	});


});
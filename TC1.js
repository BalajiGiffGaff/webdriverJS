var webdriver=require('selenium-webdriver'),
	By=webdriver.By,
	until=webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://store.demoqa.com/wp-login.php');	
driver.findElement(By.css('input#user_login')).sendKeys('zmmm');
driver.findElement(By.css('input#user_pass')).sendKeys('Ambattur123');
driver.findElement(By.css('input#wp-submit')).click();
driver.quit();
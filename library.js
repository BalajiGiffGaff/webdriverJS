var webdriver = require('selenium-webdriver'),
	By=webdriver.By,
	until=webdriver.until;


var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get('https://library-app.firebaseapp.com/');
driver.findElement(By.css('input')).then(function(el){
	console.log("Success" + el);
});
driver.findElements(By.css('nav li')).then(function(elements){
	elements.map(function(ele){
     ele.getText().then(function(txt){
       console.log("Nav Bar element text" + txt);
     });
	});
});

driver.findElement(By.css('input')).sendKeys('mmm@user.com');
driver.findElement(By.css('.btn-lg')).click();
driver.wait(until.elementLocated(By.css('.alert-success')),5000);
driver.findElement(By.css('.alert-success')).getText().then(function(textfromAlert){
      console.log("Print the Alert Message"+textfromAlert)
});	
driver.quit();	

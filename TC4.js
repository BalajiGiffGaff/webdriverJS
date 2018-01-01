/******Test ************
Sample Project for Web Tables Scenario
This includes Chai for Assertion
Running the project with Mocha 
************************/

var webdriver=require('selenium-webdriver'),
	{describe,it,after,before}=require('selenium-webdriver/testing'),
	By=webdriver.By,
	until=webdriver.until;
var driver;
var assert =require('chai').assert;
var url = 'http://toolsqa.com/automation-practice-table/',
	Rank='#content > table > tbody > tr:nth-child(i) > td:nth-child(6)';//40 &58


describe('Web Tables testing', function(){

	this.timeout(150000);
	beforeEach('browser setUp',function(){
		driver=new webdriver.Builder().forBrowser('chrome').build();
		driver.manage().window().maximize();
		driver.get(url);

	});

	afterEach('Quit Driver',function(){
		driver.quit();
		});

	var str;
		function Rep(input,value,ind) {
    	str = input;
    	str = setCharAt(str,value,ind);
    	//alert(str);
    	return str;
		}

		function setCharAt(str,index,chr) {
    		if(index > str.length-1) return str;
    		return str.substr(0,index) + chr + str.substr(index+1);
		}

	it('TC4 for Web Tables Scenario',function(){

		
		for(var i=1;i<=4;i++)
		{
			var temp=Rep(Rank,40,i);
			console.log('The Css is'+temp);
			driver.findElement(By.css(temp)).getText().then(function(text){
			console.log('The text in the selected row is '+text);
			});
			
		}

	});

});


/**
if(text==2)
			{
				temp=Rep(Rank,40,i);
				console.log('The New Css beofre is '+newcss)
				var newcss=Rep(temp,58,2);
				console.log('The New Css After is '+newcss)
				driver.findElement(By.css(newcss)).getText().then(function(textnew){
				console.log('The text in the country row is '+textnew);
				});


			}
**/
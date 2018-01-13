To run a JS file

node test.js

With Mocha:

mocha test.js

With Mochawesome report 

mocha test.js  --reporter mochawesome

with screenshot options
npm install mochawesome-screenshots --save-dev
mocha TC4.js --reporter mochawesome-screenshots --reporter-options takePassedScreenshot=true
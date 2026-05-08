/****************************
Task 5
****************************/
console.log("Running t05_maths.js")

//variable
var userName = "Ryan";
var userage = 15;
var money = "$9000"
var year = "2026"
//main code
console.log("hi "+ userName);;
console.log("As of "+ year + "I am "+ userage);
console.log("I was born in "+ (year - 15));
console.log("I have "+ money);
console.log("The current year is "+ year);

const OUTPUT = document.getElementById("JavaScriptOutput")
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML += "<p>Hello " + userName + "</p>";
OUTPUT.innerHTML += "<p>Second paragraph line.</p>";
OUTPUT.innerHTML += "<p>Thrird Paragraph line.</p>"
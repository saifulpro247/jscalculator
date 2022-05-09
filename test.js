
var num1 = prompt("আপনার প্রথম সংখ্যা লিখুন: ");
var num2 = prompt("আপনার দ্বিতীয় সংখ্যা লিখুন: ");
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var plus, minus, multiply, divided, modulus;

plus = num1 + num2;
document.write("যোগফলঃ = " + plus + "</br>");
minus = num1 - num2;
document.write("বিয়োগফল = " + minus + " </br>");
multiply = num1 * num2;
document.write("গুনফল =" + multiply + "</br>");
divided = num1 / num2;
document.write("ভাগফল = "+ divided + "</br>");
modulus = num1 % num2;
document.write(" ভাগশেষ = " + modulus);
// six escape sequences 
// 1 \b backspace
// 2 \f form feed
// 3 \n new line
// 4 \r carriage return
// 5 \t horizontal tabulator
// 6 \v vertical tabulator

// String methods
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln);

var str = "please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);

var pos1 = str.lastIndexOf("locate");
console.log(pos1);

var pos2 = str.indexOf("locate", 15);
console.log(pos2);

var pos3 = str.search("locate");
console.log(pos3);

// Extracting String Parts
// slice(start, end)
// substring(start, end);
// substr(start, length);

// >>>> slice
var txt1 = "Apple, Banana, Kiwi";
var res1 = txt1.slice(7, 13);
console.log(res1);

var res2 = txt1.slice(-12, -6);
console.log(res2); 

var res3 = txt1.slice(7);
console.log(res3);

var res4 = txt1.slice(-12);
console.log(res4);

// >>>>> substring  - it cannot accept negative indexes

var txt2 = "Orange, Avocado, Grapes";
var result = txt2.substring(8, 15);
console.log(result);

var result1 = txt2.substring(8);
console.log(result1);

// >>>> substr - second parameter is length
var txt3 = "Grapes, Apple, Banana";
var output = txt3.substr(8, 5);
console.log(output);

var output1 = txt3.substr(8);
console.log(output1);

var output2 = txt3.substr(-6);
console.log(output2);

// Replacings string content
var text = "please visit them";
var n = text.replace("them", "us")
console.log(n);

// Converting to Upper and Lower case
var text1 = "Hello World";
var text2 = text1.toUpperCase();
console.log(text2);

var text3 = text1.toLowerCase();
console.log(text3);

// concatinate
var erste = "Hello world";
var zweite = "you are wonderful!";
var dritte = erste.concat(", ", zweite);
console.log(dritte);

// string padding
let str1 = "5";
let str2 = str1.padStart(4, 0);
console.log(str2);

let str3 = str1.padEnd(4, 0);
console.log(str3);


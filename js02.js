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

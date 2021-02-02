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


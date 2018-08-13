// Level 0 --------------------------
for(var a =0; a<5; a++){
    var star= ""
for(var b =0; b<=a; b++){
 star += "*"
}
console.log(star)
}
// Level 1 --------------------------

for(var a =0; a<5; a++){
    var star= ""
for(var b =4; b>=a; b--){
 star += "*"
}
console.log(star)
}

// Level 2 -------------------------

"use strict";

function fullPyramid (height) {
  
  for (var i = 0; i <= height; i++) {
    var row = '';
    
    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= (2*i+1); k++) {
      row += '*';
    }
    
    console.log(row);
  }
}

fullPyramid(5);

// Level 3 -------------------------
 var batas = 5 ;
 for (var i =0; i < batas; i++){
     str = '';
     for (var  j = 0; j <= i; j++){
         str = str + ' ';
     }
     for (var k = 0; k <= 2; k++){
      str = str + '*';   
     }
     str += batas -i
     console.log(str);
 }
// Level 4 ---------------------
for (let i = 0; i <= 4; i++) {
	var row = '              ';

	for (let j = 0; j <= i; j++) {
		row += ' ';
	}
	for (let k = 4 * 2; k >= i * 2; k--) {
		row += '*';
	}
	console.log(row);
}
// Level 5 ---------------------

function hasil(angka) {
    var hasil = '';
    for (var i = angka; i > 0; i--) {
      hasil = hasil.concat(i - 1).concat(i - 1);
      for (var j = 0; j < i; j++) {
        hasil = hasil.concat(i + 1);
      }
      console.log(hasil);
      hasil = '';
    }
  }
  hasil(5)

// Level 6 --------------------

//////////////////////////////////////////

//Segitiga Atas

for (let i = 0; i <= 4; i++) {
	var row = '              ';

	for (let j = 4; j >= i; j--) {
		row += ' ';
	}
	for (let k = 0; k <= i * 2; k++) {
		row += '*';
	}
	console.log(row);
}

//////////////////////////////////////////

// Segitiga bawah

for (let i = 0; i <= 4; i++) {
	var row = '              ';

	for (let j = 0; j <= i; j++) {
		row += ' ';
	}
	for (let k = 4 * 2; k >= i * 2; k--) {
		row += '*';
	}
	console.log(row);
}
///////////////////////////////////////////////

//Segitiga dibawah lagi

for (let i = 0; i <= 4; i++) {
	var row = '    ';

	for (let j = 4; j >= i; j--) {
		row += ' ';
	}
	for (let k = 0; k <= i * 2; k++) {
		row += '*';
	}
	for (let l = 4 * 2; l >= i * 2; l--) {
		row += '*';
	}
	for (let k = 0; k <= i * 2; k++) {
		row += ' ';
	}
	for (let l = 4 * 2; l >= i * 2; l--) {
		row += '*';
	}
	for (let k = 0; k <= i * 2; k++) {
		row += '*';
	}
	console.log(row);
}


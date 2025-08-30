"use strict";

//(1)..................
var isEven = function isEven(number) {
  if (number % 2 == 0) {
    console.log('True');
  } else {
    console.log('False');
  }
};

isEven(6); //(2).........................

var allEvenNum = function allEvenNum(num1, num2) {
  var start = Math.min(num1, num2);
  var end = Math.max(num1, num2);

  for (var i = start; i < end; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

allEvenNum(1, 5); //3.............................
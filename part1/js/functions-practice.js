function halfNumber(input) {
    var num = Number(input);
    if(Number.isNaN(num) || input === null) {
      return;
    }
    var half = num/2;
    window.console.log("Half of " + num + " is " + half + ".");
    return half;
  }
//   halfNumber(5);
//   halfNumber(50);
//   halfNumber('500');
//   halfNumber('abcd');
//   halfNumber('undefined');
//   halfNumber(null);
  
  function squareNumber(input) {
    var num = Number(input);
    if(Number.isNaN(num) || input === null) {
      return;
    }
    var square = Math.pow(num, 2);
    window.console.log("The result of squaring the number " + num + " is " + square + ".");
    return squareNumber;
  }
//   squareNumber(-5);
//   squareNumber(5);
  
  
  function percentOf(input1, input2) {
    var num1 = Number(input1);
    var num2 = Number(input2);
    if(Number.isNaN(num1) || Number.isNaN(num2) || num2 === 0) {
      return;
    }
    percentage = (num1 / num2) * 100;
    window.console.log(num1 + " is " + percentage + "% of " + num2 + ".");
    return percentage;
  }
//   percentOf(2,4);
//   percentOf(2,0);
  
  
  function findModulus(input1, input2) {
    var num1 = Number(input1);
    var num2 = Number(input2);
    if(Number.isNaN(num1) || Number.isNaN(num2) || num2 === 0) {
      return;
    }
    modulus = num1 % num2;
    window.console.log(modulus + " is the modulus of " + num2 + " and " + num1 + ".");
    return modulus;
  }
//   findModulus(10,4);
//   findModulus(100,4);
  
  function sumNumbers(args) {
    var sum = 0;
    for(var i = 0; i < args.length ; i++) {
      sum = sum + args[i];
    }
    window.console.log(sum);
    return sum;
  }
  
  function isNumber(input_num) {
    var n = Number(input_num);
    return !Number.isNaN(n);
  }
  
  function readInput() {
    var input = window.prompt("Enter a list of numbers");
    var list = input.split(',');
    if(list.length == 0) {
      window.alert("Empty input");
      return;
    }
  
    if(!list.every(isNumber)) {
      window.alert("Invalid input");
      return;
    }
    var num_list = list.map(function(num) {
      return Number(num);
    });
    
    return num_list;
  }
  
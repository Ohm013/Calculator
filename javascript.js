//Issue #1 : Trying to create buttons 0-9 with loops so don't have to create them and querySelect all of them individually
// Solution #1 : Made the buttons manually

//Issue #2: Trying to figure out how to get the add, subtract functions to recognize the buttons. Generalize it between a number and operator

const container = document.querySelector("container");
const numbers = document.querySelectorAll(".digits .numbers");
const operators = document.querySelectorAll(".mathSigns"); 
//const plus = document.querySelector("#add");
//const minus = document.querySelector("#subtract");
//const multiply = document.querySelector('#multiply');
//const divide = document.querySelector("#divide");
const display = document.querySelector('.display');

let firstNum = "";
let secondNum = "" ; 
let operator = "";

//if no operator then firstNum = first clicked and if there is operator then the clicked value = secondNum
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
      if(operator === "") {
        firstNum = e.target.value ;
        console.log(firstNum);
      }else {
        secondNum = e.target.value; 
        console.log(secondNum);
      }
      });
});

operators.forEach((op => {
  op.addEventListener('click', (e) => {
    if( operator !== "equal") {
      operator =  e.target.value;
      console.log(operator)
    }else{

      switch(operator){
        case "+": 
          console.log (add(firstNum, secondNum));
          break;
      case "-": 
          console.log (subtract(firstNum, secondNum));
          break;
      case "x": 
          console.log (multiply(firstNum, secondNum));
          break;

      }




    }
 });
}));

function calculate () {
 
}
//operator = "+" {
  //add(firstNum, secondNum)
//}



function screen (char) {
    display.textContent  += `${char}`

}


function mathOperation (numbers, operator) {
   `${numbers} + ${operator} + ${numbers}`
     number + operator + number

}


function add (num1, num2) { //prob will have to add reduce to these functions
  return num1 + num2 ;
}

function subtract (num1, num2) { //prob will have to add reduce to these functions
    return num1 - num2 ;
}

function multiply (num1, num2) { //prob will have to add reduce to these functions
    return num1 * num2 ;
}

function divide (num1, num2) { //prob will have to add reduce to these functions
    return num1 / num2 ;
}

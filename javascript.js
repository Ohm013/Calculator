//Issue #1 : Trying to create buttons 0-9 with loops so don't have to create them and querySelect all of them individually
// Solution #1 : Made the buttons manually

//Issue #2: Trying to figure out how to get the add, subtract functions to recognize the buttons. Generalize it between a number and operator

const container = document.querySelector("container");
const numbers = document.querySelectorAll(".digits .numbers");
//const operators = document.querySelectorAll(".mathSigns"); 
const plus = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const multiply = document.querySelector('#multiply');
const divide = document.querySelector("#divide");
const display = document.querySelector('.display');


numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
      //  console.log(e.target.value);
        screen(e.target.value)
        return e.target.value
});
});

function screen (show) {
    
    display.textContent = `${show}`

}

let operators = [plus, minus, multiply, divide] ; 


//operators.forEach((operator => {
    //operator.addEventListener('click', (e) => {
      //   console.log(e.target); 
   // });
    //}));
    


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

//function multiply (num1, num2) { //prob will have to add reduce to these functions
  //  return num1 * num2 ;
//}

//function divide (num1, num2) { //prob will have to add reduce to these functions
    //return num1 / num2 ;
//}

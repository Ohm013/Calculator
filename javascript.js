//Issue #1 : Trying to create buttons 0-9 with loops so don't have to create them and querySelect all of them individually
// Solution #1 : Made the buttons manually

//Issue #2: Trying to figure out how to get the add, subtract functions to recognize the buttons. Generalize it between a number and operator

const container = document.querySelector("container");
const numbers = document.querySelectorAll(".digits .numbers");
const operators = document.querySelectorAll("mathSigns"); 
const num1 = document.querySelector('#num1');

numbers.forEach((number) => {
    number.addEventListener('click', function(e) {
        console.log(e.target.value);
       // return e.target.value
});
});


//function mathOperation (numbers, operator) {
  //  return `${numbers} + ${operator}`
//}


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

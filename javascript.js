//Issue #1 : Trying to create buttons 0-9 with loops so don't have to create them and querySelect all of them individually
// Solution #1 : Made the buttons manually

//Issue #2:  Decipher it between a number and operator.
//Trying to figure out how to store the first number clicked on as num1, operator, and num2

//Solution #2: let firstNum = "", secondNum = "", operator = ""
//  if(operator === "") {     //if there has been NO operator clicked then it'll be the first number
       // firstNum += e.target.value ;
        //console.log(firstNum);
      //}else {              // this basically means if an operator HAS been clicked then next will be the SECOND number
        //secondNum += e.target.value; 
        //console.log(secondNum);

//Issue #3 : Trying to figure out how to assign  variables firstNum, secondNum, and operator to function operate as parameters such as " function operate (firstNum, operator, secondNum)"
//Solution #3 : Send the firstNum, secondNum, and operator variable to function operate like
    // operate(firstNum);
    // operate(secondNum);
    // operate(operator);

  //They started as global variables so they can be accessed from anywhere. So I reassigned them in function operate like  
      //function operate (num1,sign ,num2 ) {
            //num1 = firstNum;
            //sign = operator ;
            //num2 = secondNum;
//Now I can try and combining all three variables to do the math such as if (sign === "+") { add(num1,num2)}

//Issue #4: operate function was adding numbers as strings
//Solution #4: convert the variables to numbers like "num1 = Number(firstNum)"

//Issue #5 : When attempting to display the numbers dynamically on the calculator, it messes up when the number is more than one digit
    // For ex: Trying to click 22 would mean press "2" once so that shows up then "2" again so it does "222". It adds the first 2 clicked to the 22 showing 222
//Solution #5 : took out the "+" in "display.textContent  += `${char}`" 

const container = document.querySelector("container");
const numbers = document.querySelectorAll(".digits .numbers");
const operators = document.querySelectorAll(".mathSigns"); 
const display = document.querySelector('.display');
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");

let firstNum = "";
let secondNum = "" ; 
let operator = "";
let result = "";
//if no operator then firstNum = first clicked and if there is operator then the clicked value = secondNum
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
      
      if(operator === "") {
        firstNum += e.target.value ;
        operate(firstNum);
        screen(firstNum);
      }else {
        secondNum += e.target.value; 
        operate(secondNum);
        screen(secondNum); 
        
      } 
     
    });
   
});


operators.forEach((op => {
  op.addEventListener('click', (e) => {
    if( op !== "=") {
      operator =  e.target.value;
      screen(operator); 
      operate(operator);
      //console.log(operator)
   // }else if (op = e.target.value  && op === "equal") {

   // }else if (operator === "+") {
        
     }
   }) }))
 

  
function operate (num1,sign ,num2 ) {
num1 = Number(firstNum);
sign = operator ;
num2 = Number(secondNum);

      switch(sign){
        case "+": 
          result = add(num1,num2)
          break;
        case "-": 
        result = subtract(num1,num2)
          break;
        case "x": 
        result = multiply(num1,num2)
          break;
        case "/": 
        result = divide(num1,num2)
          break;
      }
      console.log(result);

}

clear.addEventListener('click', (e) => {
  display.textContent = ""
  firstNum  = ""
  secondNum = ""
  operator = ""
  result = "";
});

function screen (a,b,c) {
a = firstNum
b = operator
c= secondNum 

    display.textContent  = `${a}${b}${c} `
        if (typeof b === "undefined") {
          return a
        }else if(typeof b !== "undefined") {
          return a + b
        }else if(typeof c !== "undefined") {
          return a + b + c
        }else{
          return 
        }
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

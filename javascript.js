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
const container = document.querySelector("container");
const numbers = document.querySelectorAll(".digits .numbers");
const operators = document.querySelectorAll(".mathSigns"); 
const display = document.querySelector('.display');

let firstNum = "";
let secondNum = "" ; 
let operator = "";
let result = "";
//if no operator then firstNum = first clicked and if there is operator then the clicked value = secondNum
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
      
      if(operator === "") {
        firstNum += e.target.value ;
        console.log(firstNum);
        operate(firstNum);
      }else {
        secondNum += e.target.value; 
        operate(secondNum);
        console.log(secondNum); 
      } 
     
    });
   
});


operators.forEach((op => {
  op.addEventListener('click', (e) => {
    if( op !== "=") {
      operator =  e.target.value;
      console.log(operator); 
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
  //I think when it was adding, it added them as strings. "1 + 2" = 12. It works for subtraction though.
//Gonna need parseInt here
}
//operate() ; 

function screen (char) {
    display.textContent  += `${char}`

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

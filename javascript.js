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
      //function operate (num1,sign ,num2 ) 
            //num1 = firstNum;
            //sign = operator ;
            //num2 = secondNum;
//Now I can try and combining all three variables to do the math such as if (sign === "+") { add(num1,num2)}

//Issue #4: operate function was adding numbers as strings
//Solution #4: convert the variables to numbers like "num1 = Number(firstNum)"

//Issue #5 : When attempting to display the numbers dynamically on the calculator, it messes up when the number is more than one digit
    // For ex: Trying to click 22 would mean press "2" once so that shows up then "2" again so it does "222". It adds the first 2 clicked to the 22 showing 222
//Solution #5 : took out the "+" in "display.textContent  += `${char}`" 

//Issue #6: Making the result of calculation show when operator clicked for a second time. When a operator is clicked a second time, it just changes it for the previous equation instead of showing th result and putting the second operator after the result number


const container = document.querySelector("container");
const numbers = document.querySelectorAll(".digits .numbers");
const operators = document.querySelectorAll(".mathSigns"); 
const display = document.querySelector('.display');
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const equalSign = document.querySelector("#equal");

let firstNum = "";
let secondNum = "" ; 
let operator = "";
let result = ""
//if no operator then firstNum = first clicked and if there is operator then the clicked value = secondNum
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
      
      if(operator === "") {
        firstNum += e.target.value ;
        console.log(firstNum)
        operate(firstNum);
        screen(firstNum);
      }else if( firstNum !== "") {
        secondNum += e.target.value; 
        console.log(secondNum)
        operate(secondNum);
        screen(secondNum);  
      }else if (operator == "equal") {
        operate(firstNum,operator,secondNum); 
       
  
 } })
    });


operators.forEach((op => {
  op.addEventListener('click', (e) => {
    op = operator
    if( op === "") {
      operator =  e.target.value;
      console.log(operator)
      screen(operator); 
      operate(operator);
    }else if (firstNum !== "" && secondNum !== ""){
      operate(firstNum,secondNum);
      
      
    }}
)}));  

function operate (num1,sign ,num2 ) {
  num1 = Number(firstNum);
  sign = operator ;
  num2 = Number(secondNum);
  
  switch(sign){  
      case "+": 
        result = add(num1,num2)
        break;
     case "-": 
        result =subtract(num1,num2)
        break;
     case "x": 
        result = multiply(num1,num2)
        break;
      case "/": 
        result = divide(num1,num2)
        break;
  }
       console.log(result); 
       screen(result); 
}
//function equalPressed () {
  //equalSign.addEventListener('click', operate)

//}
function screen () {
  num = firstNum ;
    if (result !== ""){
      display.textContent = `${result}`;
    }
  sign = operator
  secNum = secondNum;
  
  display.textContent  = `${num}${sign}${secNum} `
    //if (operator === "undefined")
}

function clearAll () {
  clear.addEventListener('click', () => {
    display.textContent = ""
    firstNum  = "";
    secondNum = "";
    operator = ""
    result = "";
  });
}
clearAll() ;

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

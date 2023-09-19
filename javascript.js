const container = document.querySelector("container");
const numbers = document.querySelectorAll(".digits .numbers");
const operators = document.querySelectorAll(".mathSigns"); 
const display = document.querySelector('.display');
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const currDis = document.querySelector("#current-display");
const resultDis = document.querySelector("#result-display");

let firstNum = "";
let secondNum = "" ; 
let firstOp = "";
let result = ""
let secondOp = "";
let decimalCount = 0

//if no operator then firstNum = first clicked and if there is operator then the clicked value = secondNum
numbers.forEach((number) => {
    number.addEventListener('click', (e)=> {
      e = e.target.value
      if (e === "."){ // +1 for each decimal
        decimalCount++;
      }
      if (e === "." && decimalCount > 1) { // For more than one decimal don't do anything. Return
        return
      }
      getNum(e)
})});

function getNum (e) {
  if(firstOp === "" ) {
    firstNum += e ;
    screen(firstNum);
  }else if( firstNum) {
    secondNum += e; 
    screen(secondNum);  
  }else if (secondOp == "equal") {
    screen(firstNum,firstOp,secondNum,secondOp)
    operate(firstNum,firstOp,secondNum); 
  } 
}

operators.forEach((op => {
  op.addEventListener('click', (e) => {
    op = firstOp
    if( op === "") { 
      firstOp =  e.target.value;
      screen(firstOp); 
      decimalCount = 0
    }else if (firstOp  && secondNum){
      secondOp = e.target.value; 
      if (secondOp == "equal"){
          screen(firstNum,firstOp,secondNum,secondOp)
          operate(firstNum,firstOp,secondNum); // sends original numbers to calculate
      }else{
      operate(firstNum,firstOp,secondNum); 
      secondNum = ""  
      firstOp = secondOp 
      firstNum = String(result)
      screen(firstOp,secondNum); 
    }}
    })}
));  


function operate (num1,sign ,num2 ) {
  num1 = Number(firstNum);
  sign = firstOp ;
  num2 = Number(secondNum);

  switch(sign){  
      case "+": 
        result = num1 + num2
        break;
     case "-": 
        result = num1 - num2
        break;
     case "x": 
        result = num1 * num2
        break;
      case "/": 
        if (num2 === 0){
          clearAll();
          alert("You know we can't do that"); 
          }else{
          result = num1 / num2}
          break;
       }
       result = Math.round((result + Number.EPSILON) * 1000)  / 1000;  //rounds result to 3 decimals
       screen(result);
       
}

del.addEventListener('click',() => {
  if(secondOp == "equal"){
    secondOp = secondOp.slice(0,-1);
    secondNum = secondNum.slice(secondNum);
    screen(secondOp) ;
    screen(secondNum);
  }else if (secondNum && secondOp == "") {
    secondNum = secondNum.slice(0,-1);
    screen(secondNum);
  }else if (secondNum == "" && firstOp){
    firstOp = firstOp.slice(0,-1);
    screen(firstOp);
  }else if (firstOp == ""){
    firstNum = firstNum.slice(0,-1);
    screen(firstNum);
  }
})


function screen () { //display screen, one for equation and one for result
  num = firstNum ;  
  sign = firstOp ; 
  secNum = secondNum;
  signTwo = secondOp;
    if(secondOp == "equal"){
      signTwo = "="
    }else{
      signTwo = ""
    }
  answer = result;
  currDis.textContent = `${num} ${sign} ${secNum} ${signTwo}`; 
  if (answer && secondOp == "equal"){
    resultDis.textContent = `${answer}`
   }else {
    resultDis.textContent = ""
  }
}


clear.addEventListener('click', clearAll)

function clearAll () {
  currDis.textContent = "";
  resultDis.textContent = "";
  firstNum  = "";
  secondNum = "";
  firstOp = ""
  result = "";
  secondOp = ""; 
  decimalCount = 0
};

clearAll() ;

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
//Solution #6 : This one took a while and I was thinking about doing this method but didnt try till now
  //Created a secondOp variable so I can store a variable for when the second operator is clicked. When an operator is clicked after the origina one it gets stored in secondOp.
    //When the secondOp gets stored that triggers the events of sending the original num1,firstOp, and num2 to function operatoe to do the math. Then that result will become num1 and the secondOp will become firstOp.
//  }else if (op){  // if op which is firstOp exists then whatever operator clicked next will do the things below
 // secondOp = e.target.value
  //console.log(secondOp);
  //result = operate(firstNum,firstOp,secondNum); this send original numbers to operate
  //secondNum = ""  this will reset secondNum to nothing 
 // firstOp = secondOp  //and this will make the firstOp equal secondOp leaving the secondOp empty for it to be triggered again.
  //screen(firstOp,secondNum); 

  // Adding the two lines below to function operate outside of the switch case leads to making the result into firstNum everytime
  // firstNum = result
 // screen(result);

//Issue #6 : When clicking "equal" button, it shows the result with "equal" after it like "526equal". Fixed that by adding if statement if equal clicked but other problem is that can't do any math after equal is clicked. It equals undefined
//Solution #6 : Removed the "results =" from "result =  operate(firstNum,firstOp,secondNum);" for the secondOp

//Issue #7 : Couldn't figure out how to prevent multiple decimals for each number
//Solution #7: created decimalCount variable so each time clicked, it adds one and if more than one it "returns" so stops. And reset decimalCount to 0 when firstOp is defined


//Issure #8: Making function delete button. Can't figure out how to reassign the variables (firstNum, firstOp, etc) when sliced. The display would slice but it wouldn't actually slice from the variable. So if I type "12 + 32", click delete, the display would show "12 + 3", then once I press number 4 after, display shows "12 + 324"
//Because the display shows that the number and operator variables are equal to. So since im only slicing from the display, it's not actually changing the variable value. It's just visually changing, so when I click another number after "deleting", it just shows everything since the variable didnt direclty get sliced

//Solution #8: Made a delete button event listener and directly sliced the variables depending on which ones are == "" or not
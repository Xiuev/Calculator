console.log("WELCOME TO THE CALCULATOR");
let numPad = Array.from(document.querySelectorAll(".number"));
let operationPad = Array.from(document.querySelectorAll(".operator"));
let itemDisplay = document.querySelector("#clcDisplayNums");
let itemDisplayTwo = document.querySelector("#clcDisplaySecondNums");
let operatorDisplay = document.querySelector("#clcDisplayOperator");
let calcDisplayParent = document.querySelector(".calc-display");

//operator varibles
let num1 = 0;
let num2 = 0;
let operation = false;
//display functions
function populateDisplay() {
  let displayVar1 = 0;
  let displayVar2 = 0;
  numPadDisplay();
  opDisplay();
  function opDisplay() {
    for (let i = 0; i < operationPad.length; i++) {
      operationPad[i].addEventListener("click", function () {
        operatorDisplay.textContent = operationPad[i].textContent;
      });
    }
  }
  function numPadDisplay() {
    for (let i = 0; i < numPad.length; i++) {
      numPad[i].addEventListener("click", function () {
        let newTextNode = document.createTextNode(numPad[i].textContent);
        if (operatorDisplay.textContent === "") {
          if (itemDisplay.textContent === "0") {
            itemDisplay.textContent = numPad[i].textContent;
          } else if (typeof itemDisplay.textContent === "string") {
            //appending here
            itemDisplay.appendChild(newTextNode);
          }
        }
        if (operatorDisplay.textContent !== "") {
          itemDisplayTwo.appendChild(newTextNode);
        }
      });
    }
  }
}
//operation FUCNTIONS
function operate(operation, num1, num2) {
  //condition to check operation
  //use switch
  switch (operation) {
    case add:
      return add(num1, num2);
      break;
    case subtract:
      return subtract(num1, num2);
      break;
    case multiply:
      return multiply(num1, num2);
      break;
    case divide:
      return divide(num1, num2);
      break;
    default:
      console.log("invalid!");
  }
}
function add(...values) {
  let sumOfValues = values.reduce((accum, currentVal) => {
    return accum + currentVal;
  }, 0);
  // 0 = inital value of the accumulator;
  return sumOfValues;
}

function subtract(...values) {
  let diffOfValues = values.reduce((acum, currentVal) => {
    return acum - currentVal;
  });
  return diffOfValues;
}

function multiply(...values) {
  let prodOfValues = values.reduce((acum, currentVal) => {
    return acum * currentVal;
  });
  return prodOfValues;
}

function divide(...values) {
  let divideOfValues = values.reduce((accum, currentValue) => {
    return accum / currentValue;
  });
  return divideOfValues;
}

//console.log(operate(add, 1, 2));
populateDisplay();
//console.log(operationPad[1].textContent);

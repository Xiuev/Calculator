console.log("hi");
let numPad = Array.from(document.querySelectorAll(".number"));
let operationPad = Array.from(document.querySelectorAll(".operator"));
let itemDisplay = document.querySelector("#clcDisplayNums");
let operatorDisplay = document.querySelector("#clcDisplayOperator");
let itemDisplayTwo = document.querySelector("#clcDisplaySecondNums");
let calcDisplayParent = document.querySelector(".calc-display");
//have a "screen" portion be an array? so for example
//operation FUCNTIONS
function Add(...values) {
  let sumOfValues = values.reduce((accum, currentVal) => {
    return accum + currentVal;
  }, 0);
  // 0 = inital value of the accumulator;
  return sumOfValues;
}

function Subtract(...values) {
  let diffOfValues = values.reduce((acum, currentVal) => {
    return acum - currentVal;
  });
  return diffOfValues;
}

function Multiply(...values) {
  let prodOfValues = values.reduce((acum, currentVal) => {
    return acum * currentVal;
  });
  return prodOfValues;
}

function Divide(...values) {
  let divideOfValues = values.reduce((accum, currentValue) => {
    return accum / currentValue;
  });
  return divideOfValues;
}

function populateScreen() {
  let currentNumber = 0;
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let opSigns = ["+", "-", "X", "/"];
  let screenArray = [];
  //console.log(digits);

  for (let i = 0; i < operationPad.length; i++) {
    operationPad[i].addEventListener("click", () => {
      operatorDisplay.textContent = opSigns[i];
      //add operations to screenArray
      userOperationInput = operatorDisplay.textContent;
      if (currentNumber !== "" && !isNaN(currentNumber)) {
        screenArray.push(currentNumber);
        currentNumber = 0;
        itemDisplay.textContent = "";
        //screenArray.push(userOperationInput);
      }

      console.log(screenArray);
      console.log(currentNumber);
    });
  }

  for (let i = 0; i < numPad.length; i++) {
    numPad[i].addEventListener("click", () => {
      //convert to int the textContent node specefially
      //itemDisplay.textContent = digits[i];
      if (itemDisplay.textContent === "0") {
        // check if current value before appending? --> remove it?
        itemDisplay.textContent = "";
      }

      let number = document.createTextNode(digits[i]);
      itemDisplay.appendChild(number);
      let userDigitInput = parseInt(itemDisplay.textContent);
      currentNumber = userDigitInput;
      //screenArray.push(userDigitInput);
      //console.log(screenArray);
      //console.log(currentNumber);
    });
  }
  //call operate function somewhere
}
function operate() {}

populateScreen();

//console.log(itemDisplay.textContent);

console.log("hi");
let numPad = Array.from(document.querySelectorAll(".number"));
let operationPad = Array.from(document.querySelectorAll(".operator"));
let itemDisplay = document.querySelector("#clcDisplayItems");
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
  let isFirstInput = true;
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let opSigns = ["+", "-", "X", "/"];
  let screenArray = [];
  console.log(digits);
  //use reduce/map?
  //another for loop for operationPad?
  for (let i = 0; i < operationPad.length; i++) {
    operationPad[i].addEventListener("click", () => {
      itemDisplay.textContent = opSigns[i];
      //add operations to screenArray
      // then figure out how to update dom as well
      userOperationInput = itemDisplay.textContent;
      screenArray.push(userOperationInput);
    });
  }

  for (let i = 0; i < numPad.length; i++) {
    numPad[i].addEventListener("click", () => {
      //convert to int the textContent node specefially
      //itemDisplay.textContent = digits[i];
      let number = document.createTextNode(digits[i]);
      itemDisplay.appendChild(number);
      let userDigitInput = parseInt(itemDisplay.textContent);
      screenArray.push(userDigitInput);
      console.log(screenArray);
    });
  }
  //call operate function somewhere
}
function operate() {}
//console.log(Divide(10, 2, 4));
//console.log(numPad);
//console.log(operationPad);
populateScreen();

console.log(itemDisplay.textContent);

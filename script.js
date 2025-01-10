console.log("hi");
let numPad = Array.from(document.querySelectorAll(".number"));
let operationPad = Array.from(document.querySelectorAll(".operator"));
let itemDisplay = document.querySelector("#clcDisplayNums");
let itemDisplayTwo = document.querySelector("#clcDisplaySecondNums");
let operatorDisplay = document.querySelector("#clcDisplayOperator");
let calcDisplayParent = document.querySelector(".calc-display");

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

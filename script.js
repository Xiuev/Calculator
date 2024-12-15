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
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(digits);
  //use reduce/map?
  for (let i = 0; i < numPad.length; i++) {
    numPad[i].addEventListener("click", () => {
      switch (i) {
        case 0:
          itemDisplay.textContent = 1;
          break;
        case 1:
          itemDisplay.textContent = 2;
          break;
        case 2:
          itemDisplay.textContent = 3;
          break;
        case 3:
          itemDisplay.textContent = 4;
          break;
        case 4:
          itemDisplay.textContent = 5;
          break;
        case 5:
          itemDisplay.textContent = 6;
          break;
        case 6:
          itemDisplay.textContent = 7;
          break;
        case 7:
          itemDisplay.textContent = 8;
          break;
        case 8:
          itemDisplay.textContent = 9;
          break;
        case 9:
          itemDisplay.textContent = 0;
          break;

        default:
          console.log("error");
      }
    });
  }
}
function Operate() {}
//console.log(Divide(10, 2, 4));
console.log(numPad);
//console.log(operationPad);
populateScreen();
//console.log(itemDisplay);

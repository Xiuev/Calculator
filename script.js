console.log("hi");
let numPad = Array.from(document.querySelectorAll(".number"));
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
      itemDisplay.textContent = 7; //testing
    });
  }
}
function Operate() {}
//console.log(Divide(10, 2, 4));
console.log(numPad);
populateScreen();
//console.log(itemDisplay);

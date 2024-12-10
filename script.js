console.log("hi");

//operation FUCNTIONS
//since parameters will be an array of arguments passed, manupulate array for calculations.
//since not fixed set of parameters use (rest parameters ex:...Values)
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

function Operate() {}
//console.log(Divide(10, 2, 4));

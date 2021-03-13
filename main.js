
/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(arr) {
  return arr.push('Colin')
}

function addMeToStart(arr) {
  return arr.unshift('Colin');
}

function changeLast(arr, value){
  if (arr.pop()) {
    return arr += arr.push(value);
  }

}

function changeAllValuesTo(arr, value) {
  //const index = arr.indexOf();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = value;
  }

}

function oddOrEven(arr) {
  // const isEven = arr % 2 === 0;
  // const isOdd = arr % 2 === 1;

  // if (arr === isEven) {
  //   return 'even';
  // } 
  // if (arr === isOdd) {
  //   return 'odd';
  // }
  for (let i = 0; i < arr.length; i ++) {
    const number = arr[i];
    if (number % 2 === 0) {
      return arr[i].push('even');
    }
    if (number % 2 === 1) {
      return arr[i].push('odd');
    }
  }

}





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}

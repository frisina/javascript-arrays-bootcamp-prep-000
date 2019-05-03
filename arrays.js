var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  var anotherNewArray = [...array, element];
  return anotherNewArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var anotherDestructiveArray = array.push(element);
  return anotherDestructiveArray;
}

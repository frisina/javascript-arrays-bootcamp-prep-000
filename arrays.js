var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var arrayList = array;
  var arrayList = array.unshift(element);
  return arrayList;
}

function addElementToEndOfArray(array, element) {
  var anotherNewArray = [...array, element];
  return anotherNewArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

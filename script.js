"use-strict";
let addNumbersButton = document.querySelector(".add-numbers");
let createArrayButton = document.querySelector(".create-array");
let randomArrayButton = document.querySelector(".random-array");
let numbersInput = document.querySelector(".number-input");
let array = [];
let arrayOfArrays = [];

let showNumbers = document.querySelector(".show-numbers");
let showArrays = document.querySelector(".show-arrays");

addNumbersButton.addEventListener("click", addNumbers);
function addNumbers() {
  if (numbersInput.value === "") {
    return;
  }
  array.push(Number(numbersInput.value));
  clearInputs();
  renderNumbersP();
}
createArrayButton.addEventListener("click", createArray);
function createArray() {
  if (array.length === 0) {
    return;
  }

  array = sortNumbers(array);
  arrayOfArrays.push(array);
  console.log(array);
  array = [];
  renderP();
}
function clearInputs() {
  numbersInput.value = "";
}
function renderP() {
  showNumbers.innerHTML = "";
  showArrays.innerHTML = "[ <br/>";
  for (let key of arrayOfArrays) {
    console.log(key);
    showArrays.innerHTML += `[${key}]<br/>`;
  }
  showArrays.innerHTML += "]";
}
function renderNumbersP() {
  showNumbers.innerHTML = "";
  showNumbers.innerHTML = `${array}`;
}
let Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];
let array1 = [2, 1, 4, 3, 7, 6];
function sortNumbers(arr) {
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] < arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
  return arr;
}
randomArrayButton.addEventListener("click", createRandomArray);
function createRandomArray() {
  if (numbersInput.value === "") {
    return;
  }
  let randomArr = new Array(Number(numbersInput.value));
  randomArr = randomArr.fill(0).map((x) => Math.floor(Math.random() * 100));
  randomArr = sortNumbers(randomArr);
  arrayOfArrays.push(randomArr);
  console.log(arrayOfArrays);
  clearInputs();
  renderP();
}

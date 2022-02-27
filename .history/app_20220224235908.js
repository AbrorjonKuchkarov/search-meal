const input = document.querySelector('.input');
const randomBtn = document.getElementById('random');
const submit = document.getElementById('submit');

const resultHandling = document.getElementById('result-handling');
const meals = document.getElementById('meals');
const singleMeal = document.getElementById('single-meal');

function getUsers (e){
   e.preventDefault();

   const inputVal = input.value;
   console.log(inputVal);
}



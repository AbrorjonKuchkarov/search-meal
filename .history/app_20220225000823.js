const input = document.querySelector('.search');
const randomBtn = document.getElementById('random');
const submit = document.getElementById('submit');

const resultHandling = document.getElementById('result-handling');
const meals = document.getElementById('meals');
const singleMeal = document.getElementById('single-meal');

function searchMeal (e){
   e.preventDefault();

   const inputVal = input.value;

   if(inputVal.trim()){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`).then(res => res.json()).then(data => {
         console.log(data);
         resultHandling.innerHTML = `<h2>Search Results for '${inputVal}'</h2>`
      })
   }
}

submit.addEventListener('submit', searchMeal)



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
         resultHandling.innerHTML = `<h2>Search Results for '${inputVal}'...</h2>`

         if(data.meals === null){
            resultHandling.innerHTML = `<h3>There is no such item for '${inputVal}', Please search another meal</h3>`
         }else{
            meals.innerHTML = data.meals.map(meal => `
               <div class='meal'>
                  <img src='${meal.strMealThumb}' alt='${meal.strMeal}' />
                  <div class='meal-info' data-mealid='${meal.idMeal}'>
                     <h3>${meal.strMeal}</h3>
                   </div>
               </div>
            `).join('')
         }
      })
      input.value = '';
   }else{
      alert('Please enter a search term...')
   }
}

function getMealInfoClass(e){
   const mealInfo = e.path.find(item => {
      if(item.classList){
         return item.classList.contains('meal-info');
      }else{
         break;
      }

      if(mealInfo){
         const mealId = mealInfo.getAttribute('mealid');
         getMealById(mealId)
      }
   })
}

function getMealById (){
   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).then(res => res.json()).then(data => {
      console.log(data)
   })
}



submit.addEventListener('submit', searchMeal);
meals.addEventListener('click', getMealInfoClass)



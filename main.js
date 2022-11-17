const btn = document.querySelector('.js-trigger-random-meal');

const container = document.querySelector('#root');

const createH2Element = (title) => {
  const h2Element = document.createElement('h2');
  h2Element.textContent = title;
  container.appendChild(h2Element);
}

btn.addEventListener('click', async () => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const dataJson = await data.json();
  const recipe = dataJson.meals[0];

  container.innerHTML = null;

  createH2Element(recipe.strMeal);
});
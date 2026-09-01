const ingredientsData = {
  8: [
    '3 cenouras médias picadas',
    '3 ovos',
    '1 xícara de óleo',
    '2 xícaras de açúcar',
    '2 xícaras de farinha de trigo',
    '1 colher de sopa de fermento em pó'
  ],
  12: [
    '4 cenouras médias picadas',
    '4 ovos',
    '1 1/2 xícara de óleo',
    '3 xícaras de açúcar',
    '3 xícaras de farinha de trigo',
    '1 colher e meia de sopa de fermento em pó'
  ]
};

const ingredientsList = document.getElementById('ingredientsList');
const portionButtons = document.querySelectorAll('.portion-btn');
const btnScrollPrepare = document.getElementById('btnScrollPrepare');

function renderIngredients(servings) {
  const items = ingredientsData[servings];

  if (!ingredientsList || !items) return;

  ingredientsList.innerHTML = items.map((ingredient) => `<li>${ingredient}</li>`).join('');
}

portionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const servings = Number(button.dataset.servings);

    portionButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderIngredients(servings);
  });
});

if (btnScrollPrepare) {
  btnScrollPrepare.addEventListener('click', () => {
    document.getElementById('preparo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

renderIngredients(8);

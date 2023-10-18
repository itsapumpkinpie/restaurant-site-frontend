function itemCardGeneration(item) {
  const cardContainer = document.getElementById("card-container");
  const cardElement = document.createElement("div");
  cardElement.classList.add("col-lg-4");
  cardElement.classList.add("col-md-6");
  cardElement.classList.add("mt-4");
  cardElement.innerHTML = `
        <div class="card">
          <img src="${item.photo_path}" class="card-img-top" alt="Тут должна быть пицца">
            <div class="card-body">
              <h5 class="card-title">${item.dish_name}</h5>
              <p class="card-text">Небольшой пример текста, который должен основываться на
                названии
                карточки и составлять основную часть содержимого карты.</p>
              <a href="#" class="btn btn-primary">Выбрать</a>
            </div>
        </div>
      `;
  cardContainer.appendChild(cardElement);
}

function getData() {
  const url = 'http://127.0.0.1:8000/api/v1/menulist';
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка сети: ' + response.status);
      }
      return response.json(); // Парсим ответ как JSON
    })
    .then(data => {
      // Обрабатываем данные с сервера, помещаем их в карточки товара
      data.forEach(item => {
        itemCardGeneration(item)
      });
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    });
}

getData()

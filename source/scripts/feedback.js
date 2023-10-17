function itemCardGeneration(item) {
    const cardContainer = document.getElementById("card-container");
    const cardElement = document.createElement("div");
    cardElement.classList.add("col-lg-4");
    cardElement.classList.add("col-md-6");
    cardElement.classList.add("mt-4");
    cardElement.innerHTML =`
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.user_name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${item.time_create}</h6>
                <p class="card-text">${item.content}</p>
            </div>
        </div>
        `;
    cardContainer.appendChild(cardElement);

}



function getData() {
    const url = 'http://127.0.0.1:8000/api/v1/feedbacklist';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети: ' + response.status);
            }
            return response.json(); // Парсим ответ как JSON
        })
        .then(data => {
            // Обрабатываем данные с сервера, помещаем их в карточки товара
            data['results'].forEach(item => {
                itemCardGeneration(item)
            });
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

getData()
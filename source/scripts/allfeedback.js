let apiURL = 'http://127.0.0.1:8000/api/v1/feedbacklist';


function itemCardGeneration(item) {

    const cardContainer = document.getElementById("card-container");
    const cardElement = document.createElement("div");
    cardElement.classList.add("col-lg-4");
    cardElement.classList.add("col-md-6");
    cardElement.classList.add("mt-4");

    const dateObject = new Date(item.time_create);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();

    cardElement.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.user_name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${day}/${month}/${year}</h6>
                <p class="card-text">${item.content}</p>
            </div>
        </div>
        `;

    cardContainer.appendChild(cardElement);
}


function loadData(url, ) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            let dataContainer = document.getElementById('card-container');
            dataContainer.innerHTML = '';
            data['results'].forEach(item => {
                itemCardGeneration(item)
            });

            let pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            if (data.previous) {
                let prevButton = document.createElement('button');
                prevButton.textContent = 'Назад';
                prevButton.classList.add("btn");
                prevButton.classList.add("btn-primary");
                prevButton.addEventListener('click', function () {
                    loadData(data.previous);
                });
                pagination.appendChild(prevButton);
            }

            if (data.next) {
                let nextButton = document.createElement('button');
                nextButton.textContent = 'Вперёд';
                nextButton.classList.add("btn");
                nextButton.classList.add("btn-primary");
                nextButton.addEventListener('click', function () {
                    loadData(data.next);
                });
                pagination.appendChild(nextButton);
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

loadData(apiURL);
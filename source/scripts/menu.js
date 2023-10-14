const url = 'http://127.0.0.1:8000/api/v1/menulist';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка сети: ' + response.status);
    }
    return response.json(); // Парсим ответ как JSON
  })
  .then(data => {
    // Обрабатываем данные с сервера
    data['results'].forEach(item => {
      const dish_name = item.dish_name;
      const photo_path = item.photo_path;
      const cat = item.cat;
      console.log(dish_name);
    });
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
  });
  

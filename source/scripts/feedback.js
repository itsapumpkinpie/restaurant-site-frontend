const url = 'http://127.0.0.1:8000/api/v1/feedbacklist';


document.getElementById('Form').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(this);
    var formDataObj = {};

    formData.forEach(function (value, key) {
        formDataObj[key] = value;
    });

    var jsonData = JSON.stringify(formDataObj);

    fetch(url, {
        method: 'POST',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            this.reset()
            console.log(data);
        });
});

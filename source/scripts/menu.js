const url = 'http://127.0.0.1:8000/api/v1/menulist';

// async function fetchHandler() {
//     try {
//         const response = await fetch(url , {
//             mode: 'no-cors',
//           })
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchHandler();

fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    // console.log(data);
});


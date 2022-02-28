const url = 'https://learnwebcode.github.io/json-example/animals-1.json'

// const results = fetch(url);

// console.log(results);

// function convertToJs(results) {
//     if (results.ok) {
//         return results.json();
//     }
// }

// const results = fetch(url).then(convertToJs);

// console.log(results);

fetch(url)
    .then((result) => {
        if(result.ok){
            return result.json();
        } else {
            alert('Data not available');
        }
})
    .then((data) => {
        let h1 = document.querySelector('h1');
        h1.textContent = data[2].name;
    });
const json = 'js/data.json';
const cards = document.querySelector('.cards');

fetch(json)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const experiments = jsonObject['experiments'];
            experiments.forEach(displayCards);
    });

function displayCards(experiment) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let description = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = `${experiment.name}`;
    description.textContent = `${experiment.description}`;

    card.setAttribute('class', `card`);
    img.setAttribute('src', experiment.image);
    img.setAttribute('id', `image`);
    img.setAttribute('alt', `An image showing ${experiment.name}`);

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(description);

    document.querySelector('div.cards').appendChild(card);
}
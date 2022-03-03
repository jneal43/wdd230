const json = 'js/data.json'

fetch(json)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayCards);
    });

function displayCards(business) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let img = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    name.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    website.textContent = `${business.website}`

    img.setAttribute('src', business.image);
    img.setAttribute('alt', `The logo for ${business.name}`);
    img.setAttribute('id', business.id)
    website.setAttribute('href', business.website);

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    document.querySelector('div.cards').appendChild(card);
}
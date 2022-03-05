const json = 'js/data.json';
const cards = document.querySelector('.cards');

fetch(json)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const businesses = jsonObject['businesses'];
        if (window.innerWidth < 760 || window.innerWidth > 1140) {
            businesses.forEach(displayCards);
        } else {
            businesses.forEach(displayList);
        }
        window.addEventListener("resize", function() { 
            if (window.innerWidth < 760 || window.innerWidth > 1140) {
                showCards();
            } else {
                showList();
            }
        });

        function showList() {
            businesses.forEach(removeCards);
            businesses.forEach(removeList);
            businesses.forEach(displayList);
        };
        
        function showCards() {
            businesses.forEach(removeCards);
            businesses.forEach(removeList);
            businesses.forEach(displayCards);
        };
        
        function removeList() {
            let clear = document.querySelectorAll('tr');
            clear.forEach((item) => {
                item.remove();
            })
        };
        
        function removeCards() {
            let clear = document.querySelectorAll('section');
            clear.forEach((item) => {
                item.remove();
            })
        };

        document.getElementById('list').addEventListener('click', showList);
        document.getElementById('card').addEventListener('click', showCards);
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
    website.textContent = `${business.website}`;

    img.setAttribute('src', business.image);
    img.setAttribute('alt', `The logo for ${business.name}`);
    img.setAttribute('id', business.id);
    website.setAttribute('href', business.website);

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    document.querySelector('div.cards').appendChild(card);
}

function displayList(business) {
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let address = document.createElement('td');
    let phone = document.createElement('td');
    let website = document.createElement('td');
    let websiteLink = document.createElement('a');

    name.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    websiteLink.textContent = `${business.website}`;

    websiteLink.setAttribute('href', business.website);

    website.appendChild(websiteLink);
    row.appendChild(name);
    row.appendChild(address);
    row.appendChild(phone);
    row.appendChild(website);

    document.querySelector('table').appendChild(row);
}
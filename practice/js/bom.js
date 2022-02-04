const list = document.querySelector('.list');
const button = document.querySelector('.submit');

button.addEventListener('click', addToList);

function addToList() {

    let newItem = document.getElementById('favchap').value;

    document.getElementById('favchap').value = '';
    
    const span = document.createElement('span');
    const listItem = document.createElement('li');
    const delButton = document.createElement('button');

    list.appendChild(listItem);
    listItem.appendChild(span);
    listItem.appendChild(delButton);

    span.textContent = newItem;
    delButton.textContent = '❌';

    document.getElementById('favchap').focus();

    delButton.addEventListener('click', deleteFromList);
    
    function deleteFromList() {
        span.classList.toggle('disappear');
        listItem.classList.toggle('disappear');
        delButton.classList.toggle('disappear');

        document.getElementById('favchap').focus();

    }
}
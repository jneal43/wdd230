const button = document.querySelector('.submit');
const input = document.getElementById('favchap').value;
const list = document.querySelector('.list');

button.addEventListener('click', addToList);

function addToList() {
    let newItem = document.getElementById('favchap').value;
    document.getElementById('favchap').value = '';
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const del_button = document.createElement('button');
    list.append(span);
    list.append(del_button);
    list.appendChild(listItem);
    span.textContent = newItem;
    del_button.textContent = '❌';
    del_button.addEventListener('click', deleteFromList);
    document.getElementById('favchap').focus();

    function deleteFromList() {
        listItem.classList.toggle('disappear');
        span.classList.toggle('disappear');
        del_button.classList.toggle('disappear');
        document.getElementById('favchap').focus();
    }

}
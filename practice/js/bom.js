const list = document.querySelector('.list');
const button = document.querySelector('.submit');

button.addEventListener('click', addToList);

function addToList() {
    let newItem = document.getElementById('favchap').value;
    document.getElementById('favchap').value = '';
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const delButton = document.createElement('button');
    delButton.className = 'del-button';
    list.appendChild(listItem);
    list.append(span);
    list.append(delButton);
    span.textContent = newItem;
    delButton.textContent = '❌';
    document.getElementById('favchap').focus();

    delButton.addEventListener('click', deleteFromList);
    
    function deleteFromList() {
        listItem.classList.toggle('disappear');
        span.classList.toggle('disappear');
        delButton.classList.toggle('disappear');
        document.getElementById('favchap').focus();
    }

}
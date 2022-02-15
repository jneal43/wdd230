var body = document.querySelector('body');

// localStorage.setItem('bgcolor', '0000FF');

// var choice = localStorage.getItem('bgcolor');

// body.style.backgroundColor = '#' + choice;

var bgcolorForm = document.getElementById('bgcolor');


if (!localStorage.getItem('bgcolor')) {
    populateStorage();
} else {
    setStyles();
}

function populateStorage() {
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);

    setStyles();
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');

    document.getElementById('bgcolor').value = currentColor;

    body.style.backgroundColor = '#' + currentColor;

}

bgcolorForm.onchange = populateStorage;
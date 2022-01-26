const button = document.querySelector('.btn');
const body = document.querySelector('body');

function show() {
    //button.classList.add('newstyle');
    button.classList.toggle('newstyle');
    body.classList.toggle('darkmode');
};

button.addEventListener('click', show);

// button.addEventListener('click', () => {
//     button.classList.add('newstyle')
// });


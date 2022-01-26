const button = document.querySelector('.btn');
const body = document.querySelector('body');
const nav = document.querySelector('.navigation')

function show() {
    //button.classList.add('newstyle');
    button.classList.toggle('newstyle');
    body.classList.toggle('darkmode');
};

button.addEventListener('click', show);

// button.addEventListener('click', () => {
//     button.classList.add('newstyle')
// });

function toggleMenu() {
    nav.classList.toggle('responsive');
}
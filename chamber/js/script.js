var currentDate = new Date();
let weekDay = new Intl.DateTimeFormat('en-US', {weekday:'long'}).format(currentDate);
let monthDay = currentDate.getDate();
let month = new Intl.DateTimeFormat('en-US', {month:'long'}).format(currentDate);
let year = currentDate.getFullYear();
var date = new Date(document.lastModified).toLocaleDateString("en-US");
var time = new Date(document.lastModified).toLocaleTimeString('en-US', { hour12: false });
var longDate = weekDay +', '+ monthDay +' '+ month +' '+ year;
var dateTime = date +' '+ time;
const nav = document.querySelector('.navigation');

const cards = document.querySelectorAll('.card');
const options = {    threshold: [.5]    };
const io = new IntersectionObserver((entries, io) => {
    entries.forEach(entry =>  {
        if (!entry.isIntersecting) {
            return;
        } else {
            
        }
    })
}, options);


document.getElementById('long-date').textContent = longDate;
document.getElementById('year').textContent = year;
document.getElementById('updateDate').textContent = dateTime;
document.getElementById('ham').addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle('responsive');
};

if (weekDay == 'Monday' || weekDay == 'Tuesday') {
    announcement();
};

function announcement() {
    document.getElementById("announcement").classList.remove("disappear");
};
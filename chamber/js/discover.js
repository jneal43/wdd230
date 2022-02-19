const images = document.querySelectorAll('[data-src]');
const options = {    threshold: [.5]    };

function preloadImage(img) {
    img.src = img.getAttribute('data-src');
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target); //call a function, send in the image that is currently intersecting
                io.unobserve(entry.target); //stop observing once loaded
            } else {
                return;
            }
            console.log(entries);
        })
        console.log(entries);
    }, options
);

images.forEach(image => {
    io.observe(image);
});

const today = 1745954186290;
console.log("today: " + today);

const visits = document.querySelector('.visits');
console.log("visits: " + visits);

let lastVisit = Number(window.localStorage.getItem("last-visit"));
console.log("last visit: " + lastVisit);

let daysSinceVisit = Math.floor((today - lastVisit)/1000/60/60/24);
console.log("days since: " + daysSinceVisit);

if (lastVisit !== 0) {
    visits.textContent = daysSinceVisit;
} else {
    visits.textContent = "This is your first visit!";
}

localStorage.setItem("last-visit", today);
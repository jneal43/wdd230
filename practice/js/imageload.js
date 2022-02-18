const images = document.querySelectorAll('img');
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
if (weekDay == 'Monday' || weekDay == 'Tuesday') {
    announcement();
};

function announcement() {
    document.getElementById("announcement").classList.remove("disappear");
};

const apiKey = "a0da4dac83b41fb0fcf9d92481f6ac2b";
const city = "5605242";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    const temperature = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(1);
    document.querySelector('#current-temp').textContent = temperature;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    const windSpeed = jsObject.wind.speed;
    document.querySelector("#windSpeed").textContent = windSpeed;
    if (temperature <= 50 && windSpeed > 3) {
        var windChill = true;
        var rawWindChill = 35.74 + (.6215 * temperature) - (35.75 * (windSpeed ** .16)) + (.4275 * temperature * (windSpeed ** .16));
        console.log("Raw: " + rawWindChill + " Degrees");
        var sanitaryWindChill = Math.round(rawWindChill * 10);
        console.log("Sanitary: " + sanitaryWindChill / 10);
    } else {
            var windChill = false;
            console.log(windChill);
    }
    if (windChill) {
        document.getElementById('windChill').textContent = `Wind Chill:  ${sanitaryWindChill / 10} °F`;
    } else {
        document.getElementById('windChill').textContent = `Wind Chill: N/A`;
    }
    });


if (weekDay == 'Monday' || weekDay == 'Tuesday') {
    announcement();
};

function announcement() {
    document.getElementById("announcement").classList.remove("disappear");
};

let temperature = document.getElementById('temperature').textContent;
let windSpeed = document.getElementById('windSpeed').textContent;

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
    document.getElementById('windChill').textContent = "Wind Chill: " + (sanitaryWindChill / 10) + "°F";
} else {
    document.getElementById('windChill').textContent = "Wind Chill: N/A";
}

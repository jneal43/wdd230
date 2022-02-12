let temperature = document.getElementById('temperature').textContent;
let windSpeed = document.getElementById('windSpeed').textContent;

if (temperature <= 50 && windSpeed > 3) {
    var rawWindChill = 35.74 + (.6215 * temperature) - (35.75 * (windSpeed ** .16)) + (.4275 * temperature * (windSpeed ** .16));
    console.log("Raw: " + rawWindChill + " Degrees");
    var sanitaryWindChill = Math.round(rawWindChill * 10);
    console.log("Sanitary: " + sanitaryWindChill / 10);
} else {
    console.log("N/A");
}


document.getElementById('windChill').textContent = "Wind Chill: " + (sanitaryWindChill / 10) + "°F";
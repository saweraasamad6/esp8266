// Dummy sensor values (later replace with ESP8266 API or Firebase)
let temperature = 26;
let humidity = 60;
let gasStatus = "Normal";
let lightStatus = "Bright";

// Update UI
document.getElementById("temp").innerText = temperature + " °C";
document.getElementById("humidity").innerText = humidity + " %";
document.getElementById("gas").innerText = gasStatus;
document.getElementById("light").innerText = lightStatus;

// Example auto-update (simulation)
setInterval(() => {
    temperature = Math.floor(Math.random() * 5) + 25;
    humidity = Math.floor(Math.random() * 10) + 55;

    document.getElementById("temp").innerText = temperature + " °C";
    document.getElementById("humidity").innerText = humidity + " %";
}, 3000);

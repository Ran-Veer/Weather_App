const inputBox = document.getElementById("inputBox");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon")
const cty = document.getElementById("city");
const desc = document.getElementById("desc");
const country = document.getElementById("country");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");

const getData = async (event) => {
    event.preventDefault();
    const city = inputBox.value;
    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'82c2e29dcc81d958b4bd9eb6b6934f8d'}`);
    const data = await fetchData.json();
    orgData = data;
    console.log(orgData);
    temp.innerHTML = Math.round(data.main.temp);
    cty.innerHTML = data.name;
    humidity.innerText = data.main.humidity;
    wind.innerHTML = data.wind.speed;
    pressure.innerHTML =data.main.pressure;
    country.innerHTML = data.sys.country;
    desc.innerHTML = data.weather[0].description;
    icon.innerHTML = data.weather[0].main;
} 
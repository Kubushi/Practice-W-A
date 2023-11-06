import axios from 'axios'

let now = newDate();

let hours = now.getHours();
let minutes = now.getMiniutes();

let dayIndex = date.getDay();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
 let day = days[dayIndex];

return `${day}, ${hours}:${minutes}`;

function displayWeatherCondition(response) {
    console.log(response.data);
}

let dayAndTime = document.querySelector("h5");
dayAndTime.innerHTML = 

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("search-input");
    let temperature = document.querySelector("h2");
    temperature.innerHTML = `${temp} °C`;

    fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${api_key}&units=metric`
    )
        .then((response) => response.json())
        .then((data) => {
            const temp = Math.round(data.main.temp);
            console.log(`${temp} °C`);
        })
        .catch((error) => console.error(error));

        console.log(searchInput.value);
        let h1 = document.querySelector("h1");
        h1.innerHTML = `${searchInput.value}`;
    }

    let form = document.querySelector("#search-form");
    form.addEventListener("submit", search);

function showTemperature() {
    let city = document.querySelector("city_name");
    city.innerHTML = `${city_name}`;
}

function showPosition(position) {
    console.log(position);
}
const api = {
key: "094533805c4db4f536e9098a9a6d35cf",
base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery (evt) {
    if (evt.keyCode == 13) {
        getResult(searchbox.value);  
    }
}

function getResult (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
        console.log(weather)
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather)
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`;


    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°f / ${Math.round(weather.main.temp_max)}°f`;


    let humidity = document.querySelector('.current .humidity');
    humidity.innerText = `${Math.round(weather.main.humidity)}%`;

    let windspeed_el = document.querySelector('.current .wind-speed');
    windspeed.innerText = `${Math.round(weather.windspeed.main)}mph`; 


    let uvindex = document.querySelector('.current .uv-index');
    uvindex.innerText = `${Math.round(weather.uvindex.main)}High`;





}
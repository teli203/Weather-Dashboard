const api = {
key: "api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}",
baseurl: "https://api.openwesthermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery (evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);  
    }
}

function getResults (query) {
    fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = '${weather.name}, $weather.sys.country}';

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = '${Math.round{weather.main.temp)}<span>°c</span>';


    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('hi-low');
    hilow.innerText = '${weather.main.temp_min}°c / ${weather.main.temp_max}°c';
}
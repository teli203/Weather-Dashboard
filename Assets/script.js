const api = {
key: "http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}&appid={API key}",
baseurl: "http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?date=1527811200&opacity=0.9&fill_bound=true&appid={API key}"
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
    temp.innerHTML = '${Math.round(weather.main.temp)}<span>°c</span>';


    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('hi-low');
    hilow.innerText = '${Math.round(weather.main.temp_min}°c / ${Math.round(weather.main.temp_max)}°c';
}
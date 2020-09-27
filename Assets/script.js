const api = {
key: "api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}",
baseurl: "https://api.openwesthermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery (evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
}
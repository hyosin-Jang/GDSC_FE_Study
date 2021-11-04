const API_KEY = 'e7b1452f9c9099d75fec2cb4fa923e6d';

function onGeoOk(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         const city = document.querySelector('#weather span:first-child');
         const weather = document.querySelector('#weather span:last-child');
         city.innerText = data.name;
         weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
         /*
         const weatherIcon = document.querySelector('#weather img');
         weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
         */
      });
}
function onGeoError() {
   alert("Can't find you! No weather for you,,,");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

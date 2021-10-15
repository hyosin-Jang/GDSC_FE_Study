const API_KEY = "f4748de4e40229f61afa3e3a67d443bc";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  // JS가 url 부름
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const icon = document.querySelector("#weather img");
      const weather = document.querySelector("#weather div:nth-child(2)");
      const city = document.querySelector("#weather div:last-child");
      city.innerText = data.name; // 지역이름
      weather.innerText = `${data.main.temp}°C`;
      // 아이콘 취득
      const iconURL =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      // 아이콘 표시
      console.log(iconURL);
      icon.setAttribute("src", iconURL);
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}
// 현재 위치
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

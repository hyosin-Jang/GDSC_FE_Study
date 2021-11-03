const API_KEY= "ddc1acb8f73493f04b9b6820e68ea0a7";

function onGeoOk(position){
    const lat= position.coords.latitude;
    const lng= position.coords.longitude;
    const url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response)=>response.json())
        .then((data) =>{
            const weather=document.querySelector("#weather span:first-child");
            const city=document.querySelector("#weather span:last-child");
            city.innerText=`city ${data.name}`;
            weather.innerText=`weather ${data.weather[0].main} / ${data.main.temp}`;
        });

}

function onGeoError(){
    alert("Can not find you. No weather for you. ");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
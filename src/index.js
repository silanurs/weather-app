const form = document.querySelector('form');
const submit = document.querySelector('button[type=submit]');
form.addEventListener('submit', (e)=> {e.preventDefault()});
submit.addEventListener('click', handleInput)
async function getWeatherData(location){
try{
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1f2a375bcd444a9e917183403230403&q=${location}`, {mode:'cors'});
    const weatherData = await response.json();
    console.log(weatherData)
    displayWeatherData(weatherData);
}
catch(error){
    window.alert(error.message)
}
}
function displayWeatherData(newData){
    document.querySelector('.condition').textContent= newData.current.condition.text;
    document.querySelector('.city').textContent = newData.location.name + " ,";
    document.querySelector('.country').textContent = newData.location.country;
    document.querySelector('.degree').innerHTML= Math.round(newData.current.temp_c) + "&#8451;";
    document.querySelector('.feels-like-c').innerHTML = Math.round(newData.current.feelslike_c) + "&#8451;";
    document.querySelector('.humidity').textContent = newData.current.humidity + "%";
    document.querySelector('.wind').textContent = newData.current.wind_mph + "mph";
}
function handleInput(){
    const city = document.querySelector('.input');
    const cityName = city.value;
    getWeatherData(cityName);
    form.reset()
}
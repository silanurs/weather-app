const form = document.querySelector('form');
const submit = document.querySelector('button[type=submit]');
form.addEventListener('submit', (e)=> {e.preventDefault()});
submit.addEventListener('click', handleInput)
async function getWeatherData(location){
try{
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1f2a375bcd444a9e917183403230403&q=${location}`, {mode:'cors'});
    const weatherData = await response.json();
    console.log(weatherData)
}
catch(error){
    console.log(error)
}
}
function displayWeatherData(newData){
    
}
function handleInput(){
    const city = document.querySelector('.input');
    const cityName = city.value;
    getWeatherData(cityName);
    form.reset()
}
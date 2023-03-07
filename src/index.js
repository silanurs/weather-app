const form = document.querySelector('form');
const submit = document.querySelector('button[type=submit]');
form.addEventListener('submit', (e)=> {e.preventDefault()});
submit.addEventListener('click', handleInput)
async function getWeatherData(location){
try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1f2a375bcd444a9e917183403230403&q=${location}`, {mode:'cors'});
    const weatherData = await response.json();
    displayWeatherData(weatherData);
}
catch(error){
    window.alert(error.message)
}
}
function displayWeatherData(newData){
    document.querySelector('.condition').textContent= newData.current.condition.text;
    document.querySelector('.icon').src= newData.current.condition.icon;
    document.querySelector('.city').textContent = newData.location.name + " ,";
    document.querySelector('.country').textContent = newData.location.country;
    document.querySelector('.degree').innerHTML= Math.round(newData.current.temp_c) + "&#8451;";
    const body = document.querySelector('body');
    if(newData.current.temp_c < 0){
        body.style.backgroundImage = 'url(imgs/snow.jpg)';
        body.style.backgroundAttachment = 'fixed';
        body.style.backgroundRepeat='no-repeat';
        body.style.backgroundSize='100% 100%';
    }
    if(newData.current.temp_c < 20 && newData.current.temp_c > 0){
        body.style.backgroundImage = 'url(imgs/rain.jpg)';
        body.style.backgroundAttachment = 'fixed';
        body.style.backgroundRepeat='no-repeat';
        body.style.backgroundSize='100% 100%';
    }
    if(newData.current.temp_c > 20){
        body.style.backgroundImage = 'url(imgs/sun.jpg)';
        body.style.backgroundAttachment = 'fixed';
        body.style.backgroundRepeat='no-repeat';
        body.style.backgroundSize='100% 100%';
    }
    document.querySelector('.feels-like-c').innerHTML = Math.round(newData.current.feelslike_c) + "&#8451;";
    document.querySelector('.humidity').textContent = newData.current.humidity + "%";
    document.querySelector('.wind').textContent = newData.current.wind_mph + "mph";
    document.querySelector('.displayF').addEventListener('click', ()=>{
       document.querySelector('.displayF').innerHTML= 'Display ' + '&#8457;';
        document.querySelector('.displayF').style.display ='none';
        document.querySelector('.displayC').style.display = 'block';
        document.querySelector('.degree').innerHTML= Math.round(newData.current.temp_f) + "&#8457;";
        document.querySelector('.feels-like-c').innerHTML = Math.round(newData.current.feelslike_f) + "&#8457;";
    })
    document.querySelector('.displayC').addEventListener('click', () => {
        document.querySelector('.displayC').innerHTML = 'Display ' +  '&#8451;'
        document.querySelector('.displayC').style.display ='none';
        document.querySelector('.displayF').style.display = 'block';
        document.querySelector('.degree').innerHTML= Math.round(newData.current.temp_c) + "&#8451;";
        document.querySelector('.feels-like-c').innerHTML = Math.round(newData.current.feelslike_c) + "&#8451;"
    })

   


}
function handleInput(){
    const city = document.querySelector('.input');
    const cityName = city.value;
    getWeatherData(cityName);
    form.reset()
}

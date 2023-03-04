function getDataFromForm() {
    // const cityName = 'pirongia';
    const input = document.querySelector('.search-box-input');
    const cityName = input.value;
  
    // if not an empty string
    if (cityName) {
      // remove whitespace for the api call
  
      return cityName
        .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
        .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
        .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
        .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
    }
    return '';
  }
  


async function getWeatherData(location){
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=1f2a375bcd444a9e917183403230403=${location}', {mode:'cors'});
    const weatherData = await response.json();
    console.log(weatherData)
}
function handleInput(){
    const city = document.querySelector('input');
    const location = city.value;
    getWeatherData(location)
}
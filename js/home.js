
function api(){
  fetch("https://api.weatherapi.com/v1/timezone.json?key=06817976efc84e6d8c4135011242608&q=London&aqi=no")
  .then(res=>res.json())
  .then(data=>console.log(data.localtime_epoch))
 console.log();
 
  
}
function handleLocationSubmit() {
  let locationInput = document.getElementById('location').value;
  console.log(locationInput);
  
  const outputElement = document.getElementById('output');
    
    // Clear existing content
    outputElement.textContent = '';
    
    // Create text node
    const textNode = document.createTextNode(`${locationInput}, Sri Lanka `);
    outputElement.appendChild(textNode);
    
    // Create image element
    const img = document.createElement('img');
    img.width = 60;
    img.height = 60;
    img.src = "https://img.icons8.com/3d-fluency/94/marker.png";
    img.alt = "marker";
    
    // Append image
    outputElement.appendChild(img);

}

function fetchWeatherDetails() {
  const location=document.getElementById('location').value
  const apiKey = '06817976efc84e6d8c4135011242608';
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=10`)
  .then(response => response.json())
  .then(data => {
      //updateWeather(data);
      //const timezone = data.location.tz_id;
      //startClock(timezone);
      fetchCurrentWeather(data)
      console.log(data);
  })
  .catch(error => console.error('Error fetching the weather data:',error));
}

function fetchCurrentWeather(data){
  const location = data.location;
  const current = data.current;
  const forecast=data.forecast;
  //document.getElementById('output').innerText = location.name;
  const locationInput=location.name;
  const locationcountry=location.country;
  const outputElement = document.getElementById('output');
    
    // Clear existing content
    outputElement.textContent = '';
    
    // Create text node
    const textNode = document.createTextNode(`${locationInput},${locationcountry} `);
    outputElement.appendChild(textNode);
    
    // Create image element
    const img = document.createElement('img');
    img.width = 60;
    img.height = 60;
    img.src = "https://img.icons8.com/3d-fluency/94/marker.png";
    img.alt = "marker";
    
    // Append image
    outputElement.appendChild(img);
//-------------now-------------------------------------------------------
    document.getElementById(`Current-temp`).innerHTML=Math.round(current.temp_c)+`°C`;
    document.getElementById(`description`).innerHTML=current.condition.text;
    document.getElementById(`feels-like`).innerHTML=`Feels `+Math.round(current.feelslike_c);
    document.getElementById(`now-weathericon`).src=current.condition.icon;
    document.getElementById('now-weathericon').alt = current.condition.text;
    document.getElementById(`lastUpdate`).innerHTML=`last updated `+current.last_updated
//--------------------------------details----------------------------------
    document.getElementById(`sun-set`).innerHTML=forecast.forecastday[0].date;
    document.getElementById(`sunrise`).innerHTML=forecast.forecastday[0].astro.sunrise;
    document.getElementById(`sunrise`).innerHTML=forecast.forecastday[0].astro.sunset;
    document.getElementById(`wind`).innerHTML=current.wind_kph+` km/h`;
    document.getElementById(`pressure`).innerHTML=current.pressure_mb+` hPa`
    document.getElementById(`humidity`).innerHTML=current.humidity+`%`
    document.getElementById(`visibility`).innerHTML=current.vis_km+` KM`


}




//--------------------------------Panadura----------------------------------------------------------
function fetchCurrentWeatherDetails() {
 // const location=document.getElementById('location').value
  const apiKey = '06817976efc84e6d8c4135011242608';
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=panadura&days=10`)
  .then(response => response.json())
  .then(data => {
      //updateWeather(data);
      //const timezone = data.location.tz_id;
      //startClock(timezone);
      currentLocation(data)
       console.log(data);
  })
  .catch(error => console.error('Error fetching the weather data:',error));
}
function currentLocation(data){
  const location = data.location;
  const current = data.current;
  const forecast=data.forecast;
  //document.getElementById('output').innerText = location.name;
  const locationInput=location.name;
  const locationcountry=location.country;
  const outputElement = document.getElementById('output');
  outputElement.textContent = '';
    
    // Create text node
    const textNode = document.createTextNode(`${locationInput},${locationcountry} `);
    outputElement.appendChild(textNode);
    
    // Create image element
    const img = document.createElement('img');
    img.width = 60;
    img.height = 60;
    img.src = "https://img.icons8.com/3d-fluency/94/marker.png";
    img.alt = "marker";
    
    // Append image
    outputElement.appendChild(img);
//-------------now-------------------------------------------------------
    document.getElementById(`Current-temp`).innerHTML=Math.round(current.temp_c)+`°C`;
    document.getElementById(`description`).innerHTML=current.condition.text;
    document.getElementById(`feels-like`).innerHTML=`Feels `+Math.round(current.feelslike_c);
    document.getElementById(`now-weathericon`).src=current.condition.icon;
    document.getElementById('now-weathericon').alt = current.condition.text;
    document.getElementById(`lastUpdate`).innerHTML=`last updated `+current.last_updated
    document.getElementById(`sun-set`).innerHTML=forecast.forecastday[0].date;
  //--------------------------------details----------------------------------
    document.getElementById(`sun-set`).innerHTML=forecast.forecastday[0].date;
    document.getElementById(`sunrise`).innerHTML=forecast.forecastday[0].astro.sunrise;
    document.getElementById(`sunrise`).innerHTML=forecast.forecastday[0].astro.sunset;
    document.getElementById(`wind`).innerHTML=current.wind_kph+` km/h`;
    document.getElementById(`pressure`).innerHTML=current.pressure_mb+` hPa`
    document.getElementById(`humidity`).innerHTML=current.humidity+`%`
    document.getElementById(`visibility`).innerHTML=current.vis_km+` KM`
}
fetchCurrentWeatherDetails()
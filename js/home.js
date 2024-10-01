
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
  const apiKey = '6905a011e0bd47c8ac7140512240110';
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
    document.getElementById(`feels-like`).innerHTML=`Feels `+Math.round(current.feelslike_c)+`°C`;
    document.getElementById(`now-weathericon`).src=current.condition.icon;
    document.getElementById('now-weathericon').alt = current.condition.text;
    document.getElementById(`lastUpdate`).innerHTML=`last updated `+current.last_updated
//--------------------------------details----------------------------------
    document.getElementById(`sun-set`).innerHTML=forecast.forecastday[0].date;
    document.getElementById(`sunrise`).innerHTML=forecast.forecastday[0].astro.sunrise;
    document.getElementById(`sunset`).innerHTML=forecast.forecastday[0].astro.sunset;
    document.getElementById(`wind`).innerHTML=current.wind_kph+` km/h`;
    document.getElementById(`pressure`).innerHTML=current.pressure_mb+` hPa`
    document.getElementById(`humidity`).innerHTML=current.humidity+`%`
    document.getElementById(`visibility`).innerHTML=current.vis_km+` KM`
//-------------------------------days----------------------------------------------
    document.getElementById(`day1-date`).innerHTML=forecast.forecastday[1].date;
    document.getElementById(`day1-img`).src=forecast.forecastday[1].day.condition.icon;
    document.getElementById('day1-img').alt = forecast.forecastday[1].day.condition.text;
    document.getElementById(`day1-temp`).innerHTML=Math.round(forecast.forecastday[1].day.avgtemp_c)+`°C`;
    document.getElementById(`day1-rain`).innerHTML=forecast.forecastday[1].day.daily_chance_of_rain+`%`;

    document.getElementById(`day2-date`).innerHTML=forecast.forecastday[2].date;
    document.getElementById(`day2-img`).src=forecast.forecastday[2].day.condition.icon;
    document.getElementById('day2-img').alt = forecast.forecastday[2].day.condition.text;
    document.getElementById(`day2-temp`).innerHTML=Math.round(forecast.forecastday[2].day.avgtemp_c)+`°C`;
    document.getElementById(`day2-rain`).innerHTML=forecast.forecastday[2].day.daily_chance_of_rain+`%`;

    document.getElementById(`day3-date`).innerHTML=forecast.forecastday[3].date;
    document.getElementById(`day3-img`).src=forecast.forecastday[3].day.condition.icon;
    document.getElementById('day3-img').alt = forecast.forecastday[3].day.condition.text;
    document.getElementById(`day3-temp`).innerHTML=Math.round(forecast.forecastday[3].day.avgtemp_c)+`°C`;
    document.getElementById(`day3-rain`).innerHTML=forecast.forecastday[3].day.daily_chance_of_rain+`%`;

    document.getElementById(`day4-date`).innerHTML=forecast.forecastday[4].date;
    document.getElementById(`day4-img`).src=forecast.forecastday[4].day.condition.icon;
    document.getElementById('day4-img').alt = forecast.forecastday[4].day.condition.text;
    document.getElementById(`day4-temp`).innerHTML=Math.round(forecast.forecastday[4].day.avgtemp_c)+`°C`;
    document.getElementById(`day4-rain`).innerHTML=forecast.forecastday[4].day.daily_chance_of_rain+`%`;

    document.getElementById(`day5-date`).innerHTML=forecast.forecastday[5].date;
    document.getElementById(`day5-img`).src=forecast.forecastday[5].day.condition.icon;
    document.getElementById('day5-img').alt = forecast.forecastday[5].day.condition.text;
    document.getElementById(`day5-temp`).innerHTML=Math.round(forecast.forecastday[5].day.avgtemp_c)+`°C`;
    document.getElementById(`day5-rain`).innerHTML=forecast.forecastday[5].day.daily_chance_of_rain+`%`;

    document.getElementById(`day6-date`).innerHTML=forecast.forecastday[6].date;
    document.getElementById(`day6-img`).src=forecast.forecastday[6].day.condition.icon;
    document.getElementById('day6-img').alt = forecast.forecastday[6].day.condition.text;
    document.getElementById(`day6-temp`).innerHTML=Math.round(forecast.forecastday[6].day.avgtemp_c)+`°C`;
    document.getElementById(`day6-rain`).innerHTML=forecast.forecastday[6].day.daily_chance_of_rain+`%`;

    document.getElementById(`day7-date`).innerHTML=forecast.forecastday[7].date;
    document.getElementById(`day7-img`).src=forecast.forecastday[7].day.condition.icon;
    document.getElementById('day7-img').alt = forecast.forecastday[7].day.condition.text;
    document.getElementById(`day7-temp`).innerHTML=Math.round(forecast.forecastday[7].day.avgtemp_c)+`°C`;
    document.getElementById(`day7-rain`).innerHTML=forecast.forecastday[7].day.daily_chance_of_rain+`%`;

    //-------------------------------hour----------------------------------------------
    document.getElementById(`hour0-img`).src=forecast.forecastday[0].hour[0].condition.icon;
    document.getElementById(`hour0-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[0].temp_c)+`°C`;
    document.getElementById(`hour0-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[0].feelslike_c)+`°C`;
    document.getElementById(`hour0-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[0].chance_of_rain)+`%`;

    document.getElementById(`hour1-img`).src=forecast.forecastday[0].hour[1].condition.icon;
    document.getElementById(`hour1-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[1].temp_c)+`°C`;
    document.getElementById(`hour1-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[1].feelslike_c)+`°C`;
    document.getElementById(`hour1-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[1].chance_of_rain)+`%`;

    document.getElementById(`hour2-img`).src=forecast.forecastday[0].hour[2].condition.icon;
    document.getElementById(`hour2-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[2].temp_c)+`°C`;
    document.getElementById(`hour2-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[2].feelslike_c)+`°C`;
    document.getElementById(`hour2-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[2].chance_of_rain)+`%`;

    document.getElementById(`hour3-img`).src=forecast.forecastday[0].hour[3].condition.icon;
    document.getElementById(`hour3-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[3].temp_c)+`°C`;
    document.getElementById(`hour3-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[3].feelslike_c)+`°C`;
    document.getElementById(`hour3-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[3].chance_of_rain)+`%`;
    
    document.getElementById(`hour4-img`).src=forecast.forecastday[0].hour[4].condition.icon;
    document.getElementById(`hour4-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[4].temp_c)+`°C`;
    document.getElementById(`hour4-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[4].feelslike_c)+`°C`;
    document.getElementById(`hour4-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[4].chance_of_rain)+`%`;

    
}




//--------------------------------Panadura----------------------------------------------------------
function fetchCurrentWeatherDetails() {
 // const location=document.getElementById('location').value
  const apiKey = '6905a011e0bd47c8ac7140512240110';
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
    document.getElementById(`feels-like`).innerHTML=`Feels `+Math.round(current.feelslike_c)+`°C`;
    document.getElementById(`now-weathericon`).src=current.condition.icon;
    document.getElementById('now-weathericon').alt = current.condition.text;
    document.getElementById(`lastUpdate`).innerHTML=`last updated `+current.last_updated
    document.getElementById(`sun-set`).innerHTML=forecast.forecastday[0].date;
  //--------------------------------details----------------------------------
    document.getElementById(`sun-set`).innerHTML=forecast.forecastday[0].date;
    document.getElementById(`sunrise`).innerHTML=forecast.forecastday[0].astro.sunrise;
    document.getElementById(`sunset`).innerHTML=``+forecast.forecastday[0].astro.sunset;
    document.getElementById(`wind`).innerHTML=current.wind_kph+` km/h`;
    document.getElementById(`pressure`).innerHTML=current.pressure_mb+` hPa`
    document.getElementById(`humidity`).innerHTML=current.humidity+`%`
    document.getElementById(`visibility`).innerHTML=current.vis_km+` KM`
//-------------------------------days----------------------------------------------
    document.getElementById(`day1-date`).innerHTML=forecast.forecastday[1].date;
    document.getElementById(`day1-img`).src=forecast.forecastday[1].day.condition.icon;
    document.getElementById('day1-img').alt = forecast.forecastday[1].day.condition.text;
    document.getElementById(`day1-temp`).innerHTML=Math.round(forecast.forecastday[1].day.avgtemp_c)+`°C`;
    document.getElementById(`day1-rain`).innerHTML=forecast.forecastday[1].day.daily_chance_of_rain+`%`;
    // document.getElementById(`day1-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[1].day.avgtemp_c)
    
    document.getElementById(`day2-date`).innerHTML=forecast.forecastday[2].date;
    document.getElementById(`day2-img`).src=forecast.forecastday[2].day.condition.icon;
    document.getElementById('day2-img').alt = forecast.forecastday[2].day.condition.text;
    document.getElementById(`day2-temp`).innerHTML=Math.round(forecast.forecastday[2].day.avgtemp_c)+`°C`;
    document.getElementById(`day2-rain`).innerHTML=forecast.forecastday[2].day.daily_chance_of_rain+`%`;

    document.getElementById(`day3-date`).innerHTML=forecast.forecastday[3].date;
    document.getElementById(`day3-img`).src=forecast.forecastday[3].day.condition.icon;
    document.getElementById('day3-img').alt = forecast.forecastday[3].day.condition.text;
    document.getElementById(`day3-temp`).innerHTML=Math.round(forecast.forecastday[3].day.avgtemp_c)+`°C`;
    document.getElementById(`day3-rain`).innerHTML=forecast.forecastday[3].day.daily_chance_of_rain+`%`;

    document.getElementById(`day4-date`).innerHTML=forecast.forecastday[4].date;
    document.getElementById(`day4-img`).src=forecast.forecastday[4].day.condition.icon;
    document.getElementById('day4-img').alt = forecast.forecastday[4].day.condition.text;
    document.getElementById(`day4-temp`).innerHTML=Math.round(forecast.forecastday[4].day.avgtemp_c)+`°C`;
    document.getElementById(`day4-rain`).innerHTML=forecast.forecastday[4].day.daily_chance_of_rain+`%`;

    document.getElementById(`day5-date`).innerHTML=forecast.forecastday[5].date;
    document.getElementById(`day5-img`).src=forecast.forecastday[5].day.condition.icon;
    document.getElementById('day5-img').alt = forecast.forecastday[5].day.condition.text;
    document.getElementById(`day5-temp`).innerHTML=Math.round(forecast.forecastday[5].day.avgtemp_c)+`°C`;
    document.getElementById(`day5-rain`).innerHTML=forecast.forecastday[5].day.daily_chance_of_rain+`%`;

    document.getElementById(`day6-date`).innerHTML=forecast.forecastday[6].date;
    document.getElementById(`day6-img`).src=forecast.forecastday[6].day.condition.icon;
    document.getElementById('day6-img').alt = forecast.forecastday[6].day.condition.text;
    document.getElementById(`day6-temp`).innerHTML=Math.round(forecast.forecastday[6].day.avgtemp_c)+`°C`;
    document.getElementById(`day6-rain`).innerHTML=forecast.forecastday[6].day.daily_chance_of_rain+`%`;

    document.getElementById(`day7-date`).innerHTML=forecast.forecastday[7].date;
    document.getElementById(`day7-img`).src=forecast.forecastday[7].day.condition.icon;
    document.getElementById('day7-img').alt = forecast.forecastday[7].day.condition.text;
    document.getElementById(`day7-temp`).innerHTML=Math.round(forecast.forecastday[7].day.avgtemp_c)+`°C`;
    document.getElementById(`day7-rain`).innerHTML=forecast.forecastday[7].day.daily_chance_of_rain+`%`;

    //-------------------------------hour----------------------------------------------
    //document.getElementById(`hour0-time`).innerHTML=forecast.forecastday[0].hour[0].time;
    document.getElementById(`hour0-img`).src=forecast.forecastday[0].hour[0].condition.icon;
    document.getElementById(`hour0-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[0].temp_c)+`°C`;
    document.getElementById(`hour0-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[0].feelslike_c)+`°C`;
    document.getElementById(`hour0-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[0].chance_of_rain)+`%`;

    document.getElementById(`hour1-img`).src=forecast.forecastday[0].hour[1].condition.icon;
    document.getElementById(`hour1-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[1].temp_c)+`°C`;
    document.getElementById(`hour1-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[1].feelslike_c)+`°C`;
    document.getElementById(`hour1-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[1].chance_of_rain)+`%`;

    document.getElementById(`hour2-img`).src=forecast.forecastday[0].hour[2].condition.icon;
    document.getElementById(`hour2-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[2].temp_c)+`°C`;
    document.getElementById(`hour2-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[2].feelslike_c)+`°C`;
    document.getElementById(`hour2-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[2].chance_of_rain)+`%`;

    document.getElementById(`hour3-img`).src=forecast.forecastday[0].hour[3].condition.icon;
    document.getElementById(`hour3-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[3].temp_c)+`°C`;
    document.getElementById(`hour3-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[3].feelslike_c)+`°C`;
    document.getElementById(`hour3-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[3].chance_of_rain)+`%`;

    document.getElementById(`hour4-img`).src=forecast.forecastday[0].hour[4].condition.icon;
    document.getElementById(`hour4-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[4].temp_c)+`°C`;
    document.getElementById(`hour4-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[4].feelslike_c)+`°C`;
    document.getElementById(`hour4-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[4].chance_of_rain)+`%`;




    
}
fetchCurrentWeatherDetails()

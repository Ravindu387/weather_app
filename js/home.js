
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

    document.getElementById(`hour5-img`).src=forecast.forecastday[0].hour[5].condition.icon;
    document.getElementById(`hour5-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[5].temp_c)+`°C`;
    document.getElementById(`hour5-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[5].feelslike_c)+`°C`;
    document.getElementById(`hour5-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[5].chance_of_rain)+`%`;

    document.getElementById(`hour6-img`).src=forecast.forecastday[0].hour[6].condition.icon;
    document.getElementById(`hour6-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[6].temp_c)+`°C`;
    document.getElementById(`hour6-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[6].feelslike_c)+`°C`;
    document.getElementById(`hour6-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[6].chance_of_rain)+`%`;

    document.getElementById(`hour7-img`).src=forecast.forecastday[0].hour[7].condition.icon;
    document.getElementById(`hour7-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[7].temp_c)+`°C`;
    document.getElementById(`hour7-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[7].feelslike_c)+`°C`;
    document.getElementById(`hour7-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[7].chance_of_rain)+`%`;

    document.getElementById(`hour8-img`).src=forecast.forecastday[0].hour[8].condition.icon;
    document.getElementById(`hour8-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[8].temp_c)+`°C`;
    document.getElementById(`hour8-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[8].feelslike_c)+`°C`;
    document.getElementById(`hour8-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[8].chance_of_rain)+`%`;

    document.getElementById(`hour9-img`).src=forecast.forecastday[0].hour[9].condition.icon;
    document.getElementById(`hour9-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[9].temp_c)+`°C`;
    document.getElementById(`hour9-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[9].feelslike_c)+`°C`;
    document.getElementById(`hour9-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[9].chance_of_rain)+`%`;

    document.getElementById(`hour10-img`).src=forecast.forecastday[0].hour[10].condition.icon;
    document.getElementById(`hour10-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[10].temp_c)+`°C`;
    document.getElementById(`hour10-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[10].feelslike_c)+`°C`;
    document.getElementById(`hour10-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[10].chance_of_rain)+`%`;

    document.getElementById(`hour11-img`).src=forecast.forecastday[0].hour[11].condition.icon;
    document.getElementById(`hour11-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[11].temp_c)+`°C`;
    document.getElementById(`hour11-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[11].feelslike_c)+`°C`;
    document.getElementById(`hour11-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[11].chance_of_rain)+`%`;

    document.getElementById(`hour12-img`).src=forecast.forecastday[0].hour[12].condition.icon;
    document.getElementById(`hour12-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[12].temp_c)+`°C`;
    document.getElementById(`hour12-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[12].feelslike_c)+`°C`;
    document.getElementById(`hour12-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[12].chance_of_rain)+`%`;

    document.getElementById(`hour13-img`).src=forecast.forecastday[0].hour[13].condition.icon;
    document.getElementById(`hour13-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[13].temp_c)+`°C`;
    document.getElementById(`hour13-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[13].feelslike_c)+`°C`;
    document.getElementById(`hour13-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[13].chance_of_rain)+`%`;

    document.getElementById(`hour14-img`).src=forecast.forecastday[0].hour[14].condition.icon;
    document.getElementById(`hour14-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[14].temp_c)+`°C`;
    document.getElementById(`hour14-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[14].feelslike_c)+`°C`;
    document.getElementById(`hour14-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[14].chance_of_rain)+`%`;

    document.getElementById(`hour15-img`).src=forecast.forecastday[0].hour[15].condition.icon;
    document.getElementById(`hour15-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[15].temp_c)+`°C`;
    document.getElementById(`hour15-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[15].feelslike_c)+`°C`;
    document.getElementById(`hour15-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[15].chance_of_rain)+`%`;

    document.getElementById(`hour16-img`).src=forecast.forecastday[0].hour[16].condition.icon;
    document.getElementById(`hour16-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[16].temp_c)+`°C`;
    document.getElementById(`hour16-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[16].feelslike_c)+`°C`;
    document.getElementById(`hour16-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[16].chance_of_rain)+`%`;

    document.getElementById(`hour17-img`).src=forecast.forecastday[0].hour[17].condition.icon;
    document.getElementById(`hour17-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[17].temp_c)+`°C`;
    document.getElementById(`hour17-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[17].feelslike_c)+`°C`;
    document.getElementById(`hour17-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[16].chance_of_rain)+`%`;
    
    document.getElementById(`hour18-img`).src=forecast.forecastday[0].hour[18].condition.icon;
    document.getElementById(`hour18-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[18].temp_c)+`°C`;
    document.getElementById(`hour18-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[18].feelslike_c)+`°C`;
    document.getElementById(`hour18-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[18].chance_of_rain)+`%`;

    document.getElementById(`hour19-img`).src=forecast.forecastday[0].hour[19].condition.icon;
    document.getElementById(`hour19-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[19].temp_c)+`°C`;
    document.getElementById(`hour19-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[19].feelslike_c)+`°C`;
    document.getElementById(`hour19-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[19].chance_of_rain)+`%`;

    document.getElementById(`hour20-img`).src=forecast.forecastday[0].hour[20].condition.icon;
    document.getElementById(`hour20-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[20].temp_c)+`°C`;
    document.getElementById(`hour20-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[20].feelslike_c)+`°C`;
    document.getElementById(`hour20-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[20].chance_of_rain)+`%`;

    document.getElementById(`hour21-img`).src=forecast.forecastday[0].hour[21].condition.icon;
    document.getElementById(`hour21-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[21].temp_c)+`°C`;
    document.getElementById(`hour21-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[21].feelslike_c)+`°C`;
    document.getElementById(`hour21-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[21].chance_of_rain)+`%`;

    document.getElementById(`hour22-img`).src=forecast.forecastday[0].hour[22].condition.icon;
    document.getElementById(`hour22-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[22].temp_c)+`°C`;
    document.getElementById(`hour22-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[22].feelslike_c)+`°C`;
    document.getElementById(`hour22-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[22].chance_of_rain)+`%`;

    document.getElementById(`hour23-img`).src=forecast.forecastday[0].hour[23].condition.icon;
    document.getElementById(`hour23-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[23].temp_c)+`°C`;
    document.getElementById(`hour23-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[23].feelslike_c)+`°C`;
    document.getElementById(`hour23-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[23].chance_of_rain)+`%`;






    
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

    document.getElementById(`hour5-img`).src=forecast.forecastday[0].hour[5].condition.icon;
    document.getElementById(`hour5-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[5].temp_c)+`°C`;
    document.getElementById(`hour5-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[5].feelslike_c)+`°C`;
    document.getElementById(`hour5-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[5].chance_of_rain)+`%`;

    document.getElementById(`hour6-img`).src=forecast.forecastday[0].hour[6].condition.icon;
    document.getElementById(`hour6-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[6].temp_c)+`°C`;
    document.getElementById(`hour6-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[6].feelslike_c)+`°C`;
    document.getElementById(`hour6-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[6].chance_of_rain)+`%`;

    document.getElementById(`hour7-img`).src=forecast.forecastday[0].hour[7].condition.icon;
    document.getElementById(`hour7-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[7].temp_c)+`°C`;
    document.getElementById(`hour7-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[7].feelslike_c)+`°C`;
    document.getElementById(`hour7-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[7].chance_of_rain)+`%`;

    document.getElementById(`hour8-img`).src=forecast.forecastday[0].hour[8].condition.icon;
    document.getElementById(`hour8-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[8].temp_c)+`°C`;
    document.getElementById(`hour8-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[8].feelslike_c)+`°C`;
    document.getElementById(`hour8-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[8].chance_of_rain)+`%`;

    document.getElementById(`hour9-img`).src=forecast.forecastday[0].hour[9].condition.icon;
    document.getElementById(`hour9-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[9].temp_c)+`°C`;
    document.getElementById(`hour9-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[9].feelslike_c)+`°C`;
    document.getElementById(`hour9-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[9].chance_of_rain)+`%`;

    document.getElementById(`hour10-img`).src=forecast.forecastday[0].hour[10].condition.icon;
    document.getElementById(`hour10-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[10].temp_c)+`°C`;
    document.getElementById(`hour10-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[10].feelslike_c)+`°C`;
    document.getElementById(`hour10-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[10].chance_of_rain)+`%`;

    document.getElementById(`hour11-img`).src=forecast.forecastday[0].hour[11].condition.icon;
    document.getElementById(`hour11-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[11].temp_c)+`°C`;
    document.getElementById(`hour11-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[11].feelslike_c)+`°C`;
    document.getElementById(`hour11-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[11].chance_of_rain)+`%`;

    document.getElementById(`hour12-img`).src=forecast.forecastday[0].hour[12].condition.icon;
    document.getElementById(`hour12-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[12].temp_c)+`°C`;
    document.getElementById(`hour12-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[12].feelslike_c)+`°C`;
    document.getElementById(`hour12-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[12].chance_of_rain)+`%`;

    document.getElementById(`hour13-img`).src=forecast.forecastday[0].hour[13].condition.icon;
    document.getElementById(`hour13-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[13].temp_c)+`°C`;
    document.getElementById(`hour13-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[13].feelslike_c)+`°C`;
    document.getElementById(`hour13-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[13].chance_of_rain)+`%`;

    document.getElementById(`hour14-img`).src=forecast.forecastday[0].hour[14].condition.icon;
    document.getElementById(`hour14-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[14].temp_c)+`°C`;
    document.getElementById(`hour14-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[14].feelslike_c)+`°C`;
    document.getElementById(`hour14-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[14].chance_of_rain)+`%`;

    document.getElementById(`hour15-img`).src=forecast.forecastday[0].hour[15].condition.icon;
    document.getElementById(`hour15-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[15].temp_c)+`°C`;
    document.getElementById(`hour15-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[15].feelslike_c)+`°C`;
    document.getElementById(`hour15-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[15].chance_of_rain)+`%`;

    document.getElementById(`hour16-img`).src=forecast.forecastday[0].hour[16].condition.icon;
    document.getElementById(`hour16-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[16].temp_c)+`°C`;
    document.getElementById(`hour16-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[16].feelslike_c)+`°C`;
    document.getElementById(`hour16-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[16].chance_of_rain)+`%`;

    document.getElementById(`hour17-img`).src=forecast.forecastday[0].hour[17].condition.icon;
    document.getElementById(`hour17-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[17].temp_c)+`°C`;
    document.getElementById(`hour17-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[17].feelslike_c)+`°C`;
    document.getElementById(`hour17-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[16].chance_of_rain)+`%`;

    document.getElementById(`hour18-img`).src=forecast.forecastday[0].hour[18].condition.icon;
    document.getElementById(`hour18-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[18].temp_c)+`°C`;
    document.getElementById(`hour18-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[18].feelslike_c)+`°C`;
    document.getElementById(`hour18-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[18].chance_of_rain)+`%`;

    document.getElementById(`hour19-img`).src=forecast.forecastday[0].hour[19].condition.icon;
    document.getElementById(`hour19-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[19].temp_c)+`°C`;
    document.getElementById(`hour19-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[19].feelslike_c)+`°C`;
    document.getElementById(`hour19-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[19].chance_of_rain)+`%`;

    document.getElementById(`hour20-img`).src=forecast.forecastday[0].hour[20].condition.icon;
    document.getElementById(`hour20-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[20].temp_c)+`°C`;
    document.getElementById(`hour20-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[20].feelslike_c)+`°C`;
    document.getElementById(`hour20-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[20].chance_of_rain)+`%`;

    document.getElementById(`hour21-img`).src=forecast.forecastday[0].hour[21].condition.icon;
    document.getElementById(`hour21-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[21].temp_c)+`°C`;
    document.getElementById(`hour21-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[21].feelslike_c)+`°C`;
    document.getElementById(`hour21-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[21].chance_of_rain)+`%`;

    document.getElementById(`hour22-img`).src=forecast.forecastday[0].hour[22].condition.icon;
    document.getElementById(`hour22-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[22].temp_c)+`°C`;
    document.getElementById(`hour22-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[22].feelslike_c)+`°C`;
    document.getElementById(`hour22-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[22].chance_of_rain)+`%`;

    document.getElementById(`hour23-img`).src=forecast.forecastday[0].hour[23].condition.icon;
    document.getElementById(`hour23-temp`).innerHTML=Math.round(forecast.forecastday[0].hour[23].temp_c)+`°C`;
    document.getElementById(`hour23-feels`).innerHTML=`Feels `+Math.round(forecast.forecastday[0].hour[23].feelslike_c)+`°C`;
    document.getElementById(`hour23-rain`).innerHTML=Math.round(forecast.forecastday[0].hour[23].chance_of_rain)+`%`;






    
}
fetchCurrentWeatherDetails()

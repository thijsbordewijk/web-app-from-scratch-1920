export default(weatherData) => {

//for loops to find the average temperatures and average wind speeds

var hourlyArray = weatherData.hourly.data;
var dailyArray = weatherData.daily.data;
var totalHourlytemp = 0;
var totalDailytemp = 0;
var totalHourlywind = 0;
var totalDailywind = 0;


var i;
for(i=0; i < hourlyArray.length; i++) {
  totalHourlytemp += hourlyArray[i].temperature;
}
var actualHourlytemp = (totalHourlytemp / hourlyArray.length);

var x;
for(x=0; x < dailyArray.length; x++) {
  var averageDaytemp = (dailyArray[x].temperatureLow += dailyArray[x].temperatureHigh) / 2
  totalDailytemp += averageDaytemp;
}
var actualDailytemp = (totalDailytemp / dailyArray.length);

var w;
for(w=0; w < hourlyArray.length; w++) {
  totalHourlywind += hourlyArray[w].windSpeed;
}
var actualHourlywind = (totalHourlywind / hourlyArray.length);

var y;
for(y=0; y < dailyArray.length; y++) {
  totalDailywind +=  dailyArray[y].windSpeed;
}
var actualDailywind = (totalDailywind / dailyArray.length);

// end loops

// Hier wordt de opgehaalde data uitgekozen en in HTML gezet, deze wordt vervolgens in een section in de html code geplaatst

const currContainer = document.getElementById('currentContent');
var currentMarkup = 
`  <section>
    <article><p>The weather forecast is:</p><h2>${weatherData.currently.summary}</h2></article>
    <article><p>The temperature is:</p><h2>${weatherData.currently.temperature}</h2></article>
    <article><p>The windspeed is:</p><h2>${weatherData.currently.windSpeed}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2></article>
  </section> `
currContainer.insertAdjacentHTML('beforeend', currentMarkup);

const dailyContainer = document.getElementById('dailyContent');
var dailyMarkup = 
`  <section>
    <article><p>The weather forecast today is:</p><h2>${weatherData.hourly.summary}</h2></article>
    <article><p>The average temperature is:</p><h2>${Math.round(actualHourlytemp)}</h2></article>
    <article><p>The average windspeed is:</p><h2>${Math.round(actualHourlywind)}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2></article>
  </section> `
dailyContainer.insertAdjacentHTML('beforeend', dailyMarkup);

const weekContainer = document.getElementById('weeklyContent');
var weeklyMarkup = 
`  <section>
    <article><p>The weather forecast this week is:</p><h2>${weatherData.daily.summary}</h2></article>
    <article><p>The average temperature is:</p><h2>${Math.round(actualDailytemp)}</h2></article>
    <article><p>The average windspeed is:</p><h2>${Math.round(actualDailywind)}</h2></article>
    <article><p>The daily chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2></article>
  </section> `
weekContainer.insertAdjacentHTML('beforeend', weeklyMarkup);

}


export default(weatherData) => {

// Hier wordt de opgehaalde data uitgekozen en in HTML gezet, deze wordt vervolgens in een section in de html code geplaatst

const currContainer = document.getElementById('currentContent');
var currentMarkup = 
`  <section>
    <article><p>The weather forecast is:</p><h2>${weatherData.currently.summary}</h2></article>
    <article><p>The temperature is:</p><h2>${weatherData.currently.temperature}</h2></article>
    <article><p>The windspeed is:</p><h2>${weatherData.currently.windSpeed}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2>
  </section> `
currContainer.insertAdjacentHTML('beforeend', currentMarkup);

const hourContainer = document.getElementById('hourlyContent');
var hourlyMarkup = 
`  <section>
    <article><p>The weather forecast is:</p><h2>${weatherData.minutely.summary}</h2></article>
    <article><p>The temperature is:</p><h2>${weatherData.minutely.temperature}</h2></article>
    <article><p>The windspeed is:</p><h2>${weatherData.minutely.windSpeed}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2>
  </section> `
hourContainer.insertAdjacentHTML('beforeend', hourlyMarkup);

const dailyContainer = document.getElementById('dailyContent');
var dailyMarkup = 
`  <section>
    <article><p>The weather forecast today is:</p><h2>${weatherData.hourly.summary}</h2></article>
    <article><p>The temperature is:</p><h2>${weatherData.hourly.temperature}</h2></article>
    <article><p>The windspeed is:</p><h2>${weatherData.hourly.windSpeed}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2>
  </section> `
dailyContainer.insertAdjacentHTML('beforeend', dailyMarkup);

const weekContainer = document.getElementById('weeklyContent');
var weeklyMarkup = 
`  <section>
    <article><p>The weather forecast this week is:</p><h2>${weatherData.daily.summary}</h2></article>
    <article><p>The temperature is:</p><h2>${weatherData.daily.temperature}</h2></article>
    <article><p>The windspeed is:</p><h2>${weatherData.daily.windSpeed}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2>
  </section> `
weekContainer.insertAdjacentHTML('beforeend', weeklyMarkup);

}


export default weatherData => {
  //for loops to find the average temperatures and average wind speeds

  const loadingAnimation = document.getElementById("loadingSection");
  const hourlyArray = weatherData.hourly.data;
  const dailyArray = weatherData.daily.data;
  var totalHourlytemp = 0;
  var totalDailytemp = 0;
  var totalHourlywind = 0;
  var totalDailywind = 0;

  // here i will use map to edit all temperature values to celsius instead of fahrenheit

  // i make an empty array to push all temperature values in

  var celsTempArray = [];

  for (var i = 0; i < hourlyArray.length; i++) {
    celsTempArray.push(hourlyArray[i].temperature);
  }

  // with the math function i convert fahrenheit to celsius

  var celsius = celsTempArray.map(function(elem) {
    return Math.round(((elem - 32) * 5) / 9);
  });

  //all celsius values are added up in the totalhourlytemp variable

  for (var i = 0; i < celsius.length; i++) {
    totalHourlytemp += celsius[i];
  }

  //by deviding totalhourlytemp by the langth of the array i will get the average temperature of the day

  var actualHourlytemp = totalHourlytemp / celsius.length;

  //this loop also finds an average temperature but of the whole week

  for (var x = 0; x < dailyArray.length; x++) {
    var averageDaytemp =
      (dailyArray[x].temperatureLow += dailyArray[x].temperatureHigh) / 2;
    totalDailytemp += averageDaytemp;
  }
  var actualDailytemp = totalDailytemp / dailyArray.length;

  //loop to find average windspeed of the day per hour

  for (var w = 0; w < hourlyArray.length; w++) {
    totalHourlywind += hourlyArray[w].windSpeed;
  }
  var actualHourlywind = totalHourlywind / hourlyArray.length;

  //loop to find the average windspeed of the week

  for (var y = 0; y < dailyArray.length; y++) {
    totalDailywind += dailyArray[y].windSpeed;
  }
  var actualDailywind = totalDailywind / dailyArray.length;

  // ---end loops

  // the fetched data is placed in html elements which are then placed in a section in the html file for the home page

  const timezoneContainer = document.getElementById("timezoneContainer");
  var timezoneMarkup = `${weatherData.timezone}`;
  timezoneContainer.insertAdjacentHTML("beforeend", timezoneMarkup);

  // Hieronder heb ik geprobeerd met Transparency de data direct in te renderen, maar dit wou niet werken, zelfs de eerste console.log pakt ie niet

  // function getTimezoneData () {
  //   var timezoneData = {
  //     timezone: weatherData.timezone
  //   }
  //   console.log(weatherData.timezone)

  //   Transparency.render(document.getElementById('#timezoneContainer'), timezoneData)

  //   console.log('hallo')
  // }

  // getTimezoneData

  const currContainerHome = document.getElementById("currentContent");
  var currentMarkup = ` <section>
    <article><p>The weather forecast is:</p><h2>${weatherData.currently.summary}</h2></article>
    <article><p>The temperature is:</p><h2>${weatherData.currently.temperature}</h2></article>
    <article><p>The windspeed is:</p><h2>${weatherData.currently.windSpeed}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2></article>
  </section>
  <section>
    <button><a href="#currentDetailButton">More data</a></button>
  </section> `;
  currContainerHome.insertAdjacentHTML("beforeend", currentMarkup);

  const dailyContainerHome = document.getElementById("dailyContent");
  var dailyMarkup = `  <section>
    <article><p>The weather forecast today is:</p><h2>${
      weatherData.hourly.summary
    }</h2></article>
    <article><p>The average temperature(celsius) is:</p><h2>${Math.round(
      actualHourlytemp
    )}</h2></article>
    <article><p>The average windspeed is:</p><h2>${Math.round(
      actualHourlywind
    )}</h2></article>
    <article><p>The chance of rain is:</p><h2>${
      weatherData.currently.precipProbability
    }</h2></article>
  </section>
  <section>
    <button><a href="#dailyDetailButton">More data</a></button>
  </section> `;
  dailyContainerHome.insertAdjacentHTML("beforeend", dailyMarkup);

  const weekContainerHome = document.getElementById("weeklyContent");
  var weeklyMarkup = `  <section>
    <article><p>The weather forecast this week is:</p><h2>${
      weatherData.daily.summary
    }</h2></article>
    <article><p>The average temperature is:</p><h2>${Math.round(
      actualDailytemp
    )}</h2></article>
    <article><p>The average windspeed is:</p><h2>${Math.round(
      actualDailywind
    )}</h2></article>
    <article><p>The daily chance of rain is:</p><h2>${
      weatherData.currently.precipProbability
    }</h2></article>
  </section>
  <section>
    <button><a href="#weeklyDetailButton">More data </a></button>
  </section> `;
  weekContainerHome.insertAdjacentHTML("beforeend", weeklyMarkup);

  // More fetched data is loaded into the sections for the detail pages of the current, daily and weekly weather.

  const currContainerDetail = document.getElementById("currentDetail");
  var currentMarkup = ` <article><p>The weather forecast is:</p><h2>${weatherData.currently.summary}</h2></article> 
  <section> 
    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2></article>
    <article><p>The temperature is:</p><h2>${weatherData.currently.temperature}</h2></article>
    <article><p>The windspeed is:</p><h2>${weatherData.currently.windSpeed}</h2></article>
    <article><p>The gust speed is:</p><h2>${weatherData.currently.windGust}</h2></article>
  </section>
  <section>
    <article><p>The rain strength is:</p><h2>${weatherData.currently.precipIntensity}</h2></article>
    <article><p>The humidity is:</p><h2>${weatherData.currently.humidity}</h2></article>
    <article><p>The amount of cloud cover is:</p><h2>${weatherData.currently.cloudCover}</h2></article>
    <article><p>The UV-index score is:</p><h2>${weatherData.currently.uvIndex}</h2></article>
  </section> `;
  currContainerDetail.insertAdjacentHTML("beforeend", currentMarkup);

  //De code die op de "daily" pagina geplaatst word geeft data per uur van de komende 5 uur van de dag.

  const dailyContainerDetail = document.getElementById("dailyDetail");
  var dailyMarkup = ` <article><p>The weather forecast is:</p><h2>${weatherData.hourly.summary}</h2></article> 

  <section>
    <article><h2>In 1 Hour(s):</h2></article>
    <article><p>The average temperature is:</p><h2>${weatherData.hourly.data[1].temperature}</h2></article>
    <article><p>The average windspeed is:</p><h2>${weatherData.hourly.data[1].temperature}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.hourly.data[1].precipProbability}</h2></article>
    <article><p>The intensity of the rain is:</p><h2>${weatherData.hourly.data[1].precipIntensity}</h2></article>
  </section>
  
  <section>
    <article><h2>In 2 Hour(s):</h2></article>
    <article><p>The average temperature is:</p><h2>${weatherData.hourly.data[2].temperature}</h2></article>
    <article><p>The average windspeed is:</p><h2>${weatherData.hourly.data[2].temperature}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.hourly.data[2].precipProbability}</h2></article>
    <article><p>The intensity of the rain is:</p><h2>${weatherData.hourly.data[2].precipIntensity}</h2></article>
  </section>
  
  <section>
    <article><h2>In 3 Hour(s):</h2></article>
    <article><p>The average temperature is:</p><h2>${weatherData.hourly.data[3].temperature}</h2></article>
    <article><p>The average windspeed is:</p><h2>${weatherData.hourly.data[3].temperature}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.hourly.data[3].precipProbability}</h2></article>
    <article><p>The intensity of the rain is:</p><h2>${weatherData.hourly.data[3].precipIntensity}</h2></article>
  </section>

  <section>
    <article><h2>In 4 Hour(s):</h2></article>
    <article><p>The average temperature is:</p><h2>${weatherData.hourly.data[4].temperature}</h2></article>
    <article><p>The average windspeed is:</p><h2>${weatherData.hourly.data[4].temperature}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.hourly.data[4].precipProbability}</h2></article>
    <article><p>The intensity of the rain is:</p><h2>${weatherData.hourly.data[4].precipIntensity}</h2></article>
  </section>

  <section>
    <article><h2>In 5 Hour(s):</h2></article>
    <article><p>The average temperature is:</p><h2>${weatherData.hourly.data[5].temperature}</h2></article>
    <article><p>The average windspeed is:</p><h2>${weatherData.hourly.data[4].temperature}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.hourly.data[4].precipProbability}</h2></article>
    <article><p>The intensity of the rain is:</p><h2>${weatherData.hourly.data[4].precipIntensity}</h2></article>
  </section>`;
  dailyContainerDetail.insertAdjacentHTML("beforeend", dailyMarkup);

  const weekContainerDetail = document.getElementById("weeklyDetail");
  var weeklyMarkup = ` <article><p>The weather forecast this week is:</p><h2>${weatherData.daily.summary}</h2></article>
  <section>
    <article><h2>Tomorrow</h2></article>
    <article><p>The average temperature is:</p><h2>${weatherData.daily.data[1].temperatureHigh}</h2></article>
    <article><p>The average windspeed is:</p><h2>${weatherData.daily.data[1].windSpeed}</h2></article>
    <article><p>The chance of rain is:</p><h2>${weatherData.daily.data[1].precipProbability}</h2></article>
    <article><p>The intensity of the rain is:</p><h2>${weatherData.daily.data[1].precipIntensity}</h2></article>
  </section>

  <section>
  <article><h2>In 2 days</h2></article>
  <article><p>The average temperature is:</p><h2>${weatherData.daily.data[2].temperatureHigh}</h2></article>
  <article><p>The average windspeed is:</p><h2>${weatherData.daily.data[2].windSpeed}</h2></article>
  <article><p>The chance of rain is:</p><h2>${weatherData.daily.data[2].precipProbability}</h2></article>
  <article><p>The intensity of the rain is:</p><h2>${weatherData.daily.data[2].precipIntensity}</h2></article>
</section>

<section>
<article><h2>In 3 days</h2></article>
<article><p>The average temperature is:</p><h2>${weatherData.daily.data[3].temperatureHigh}</h2></article>
<article><p>The average windspeed is:</p><h2>${weatherData.daily.data[3].windSpeed}</h2></article>
<article><p>The chance of rain is:</p><h2>${weatherData.daily.data[3].precipProbability}</h2></article>
<article><p>The intensity of the rain is:</p><h2>${weatherData.daily.data[3].precipIntensity}</h2></article>
</section>

<section>
<article><h2>In 4 days</h2></article>
<article><p>The average temperature is:</p><h2>${weatherData.daily.data[4].temperatureHigh}</h2></article>
<article><p>The average windspeed is:</p><h2>${weatherData.daily.data[4].windSpeed}</h2></article>
<article><p>The chance of rain is:</p><h2>${weatherData.daily.data[4].precipProbability}</h2></article>
<article><p>The intensity of the rain is:</p><h2>${weatherData.daily.data[4].precipIntensity}</h2></article>
</section>

<section>
<article><h2>In 5 days</h2></article>
<article><p>The average temperature is:</p><h2>${weatherData.daily.data[5].temperatureHigh}</h2></article>
<article><p>The average windspeed is:</p><h2>${weatherData.daily.data[5].windSpeed}</h2></article>
<article><p>The chance of rain is:</p><h2>${weatherData.daily.data[5].precipProbability}</h2></article>
<article><p>The intensity of the rain is:</p><h2>${weatherData.daily.data[5].precipIntensity}</h2></article>
</section>
`;

  //Het onderstaande stuk code geeft de loadinganimatie 3 seconden de tijd voordat deze verdwijnt

  weekContainerDetail.insertAdjacentHTML("beforeend", weeklyMarkup);

  function delayFunction() {
    loadingAnimation = setTimeout(loadingAnimatieTijd, 2000);
  }

  function loadingAnimatieTijd() {
    loadingAnimation.classList.add("hidden");
  }
  delayFunction();
};

<em> GITHUB PAGES LINK: https://thijsbordewijk.github.io/web-app-from-scratch-1920/ </em> 
 
<h1> Weatherapp using the DarkSky weather API </h1>

<p>with this app users can check the weather forecast for the next hour, the day or the week. the data is being gathered from an API which returns data based on coordinates given</p>

![Project image](https://github.com/thijsbordewijk/web-app-from-scratch-1920/blob/master/docs/img/landingspagina.PNG)
> De landingspagina
 
<h2>Description</h2>

<p>This project is a website using the DarkSky API to display weather data, the upcoming weather forecast for the upcoming hour, the rest of the day and the rest of the week. The homepage displays a little information about all these catagories, the user can then navigate to a detail page displaying more innformation about these specific categories</p>

<p>Using a router these different pages are all on the same page. The navigation hides irrelevant sections and expands the section that was selected. </p>

![Project image](https://github.com/thijsbordewijk/web-app-from-scratch-1920/blob/master/docs/img/detailpagina.PNG)
> De detailpagina

<h2>Actor Diagram</h2>

<p>The actor diagram display the most important actors and the relations between them</p>

<h2>Interaction Diagram</h2>

<p>The interaction diagram follows the user and shows the path he might take while using the app</p>

<h2>Installation</h2>

<p>To install my app and use it you must clone this repo, to do this write the following codes into your terminal in this order:</p>

```git clone https://github.com/thijsbordewijk/web-app-from-scratch-1920.git && cd web-app-from-scratch-1920```<br />
```npm install```<br />
```npm run watch```<br />
 
 <h2>The DarkSky API</h2>
 
 <p>The API that i used is the DarkSky weather API, this API contains a very broad range of realtime data about the weather of any location on earth, as well as the forecast for the upcoming hours and days. The different datapoints that are available contain the following:</p>
 
 <p><strong>currently:</strong><br />
time: 1582832129<br />
summary: "Possible Drizzle"<br />
icon: "rain"<br />
precipIntensity: 0.0045<br />
precipProbability: 0.37<br />
precipType: "rain"<br />
temperature: 39.64<br />
apparentTemperature: 31.28<br />
dewPoint: 37.21<br />
humidity: 0.91<br />
pressure: 1004.2<br />
windSpeed: 15.27<br />
windGust: 28.04<br />
windBearing: 309<br />
cloudCover: 0.81<br />
uvIndex: 0<br />
visibility: 10<br />
ozone: 416.8<br />
 </p>
 
 <p>This data is available for the next 48 hours, the days after these have a little different data due to it being a little further away and being a little less precise:</p>
 
 <p>
<strong>daily:</strong><br />
time: 1582758000<br />
summary: "Light rain until evening."<br />
icon: "rain"<br />
sunriseTime: 1582785240<br />
sunsetTime: 1582823760<br />
moonPhase: 0.13<br />
precipIntensity: 0.0083<br />
precipIntensityMax: 0.0264<br />
precipIntensityMaxTime: 1582814520<br />
precipProbability: 0.94<br />
precipType: "rain"<br />
temperatureHigh: 39.51<br />
temperatureHighTime: 1582826400<br />
temperatureLow: 75.00999999999999<br />
temperatureLowTime: 1582870380<br />
apparentTemperatureHigh: 31.44<br />
apparentTemperatureHighTime: 1582818240<br />
apparentTemperatureLow: 29.57<br />
apparentTemperatureLowTime: 1582870440<br />
dewPoint: 36.84<br />
humidity: 0.96<br />
pressure: 1001.5<br />
windSpeed: 10.1<br />
windGust: 28.23<br />
windGustTime: 1582830360<br />
windBearing: 255<br />
cloudCover: 0.74<br />
uvIndex: 1<br />
uvIndexTime: 1582804500<br />
visibility: 6.886<br />
ozone: 396.4<br />
temperatureMin: 35.58<br />
temperatureMinTime: 1582809000<br />
temperatureMax: 40.22<br />
temperatureMaxTime: 1582834080<br />
apparentTemperatureMin: 29.23<br />
apparentTemperatureMinTime: 1582796460<br />
apparentTemperatureMax: 33.78<br />
apparentTemperatureMaxTime: 1582758000<br />
</p>
 
 <p>The API can be found here: https://darksky.net/dev</p>
 
 <h2>Credits</h2>
 
 <p>Due to me not having that much experience with javascript or coding in general i had a lot of help from my classmates, these in perticular deserve a little shoutout:</p>
 
 <p>
 Giovanni kaaijk<br />
 Kyle Bot<br />
 Rick Chardet<br />
 Max Weijers<br />
 Tim Terwijn<br />
</p>


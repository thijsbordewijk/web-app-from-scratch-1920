const minContainer = document.getElementById('mainContent');

function render(weatherData) {
  console.log(weatherData)
  var markup = `<h1>${weatherData.timezone}</h1>`
  minContainer.insertAdjacentHTML('beforeend', markup);
} 


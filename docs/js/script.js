const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f7728ea8db68a12bfc3c597a2d5cc1bb/37.8267,-122.4233';
const minContainer = document.getElementById('mainContent');


fetch(url)
.then((response) => {
  return response.json();
})

.then((myJson) => {
  console.table(myJson);
  render(myJson);
});

function render(weatherData) {
  console.log(weatherData)
  var markup = `<h1>${weatherData.timezone}</h1>`
  minContainer.insertAdjacentHTML('beforeend', markup);
} 

// to push: (git add .) > (git commit -m "message") 
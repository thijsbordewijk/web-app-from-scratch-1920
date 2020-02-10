export default(weatherData) => {

const minContainer = document.getElementById('mainContent');
  var markup = 
    `
    <section>
      <article>${weatherData.timezone}</article>
      <article>${weatherData.currently.summary}</article>
      <article></article>
    </section>
    `
  minContainer.insertAdjacentHTML('beforeend', markup);
}


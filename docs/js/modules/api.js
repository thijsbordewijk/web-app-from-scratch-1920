//fetch code

export default async() => {
   
const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f7728ea8db68a12bfc3c597a2d5cc1bb/37.8267,-122.4233';

let data = await fetch(url)
.then((response) => {
  return response.json();
})

.then((myJson) => {
    console.table(myJson);
    return myJson;
});
return data
}


// to push: (git add .) > (git commit -m "message") 
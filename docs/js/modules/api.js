//fetch code

export default async() => {

const endpoint = 'https://api.darksky.net/forecast/'
const key = 'f7728ea8db68a12bfc3c597a2d5cc1bb'
var coords = '52.379189, 4.899431'
const url = `https://cors-anywhere.herokuapp.com/${endpoint}${key}/${coords}`;



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
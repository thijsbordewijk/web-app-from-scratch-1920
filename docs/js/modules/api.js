//fetch code

export default async () => {
  const cors = "https://cors-anywhere.herokuapp.com/";
  const endpoint = "https://api.darksky.net/forecast/";
  const key = "db98ac419b9a681fad0532f652a7c218";
  const coords = "52.379189, 4.899431";

  const url = `${cors}${endpoint}${key}/${coords}`;

  const data = await fetch(url)
    .then(response => {
      return response.json();
    })

    .then(myJson => {
      console.log(myJson);
      return myJson;
    });

  return data;
};

// to push: (git add .) > (git commit -m "message")

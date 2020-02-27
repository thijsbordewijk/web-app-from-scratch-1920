import api from "../js/modules/api";
import render from "../js/modules/render";
import routing from "../js/modules/router";

//this code makes sure the data will be rendered after the fetch has been completed
app();

async function app() {
  let data = await api();
  render(data);
}

routing();

// to use live preview: npm run watch
// to push: (git add .) > (git commit -m "message") > (git push)

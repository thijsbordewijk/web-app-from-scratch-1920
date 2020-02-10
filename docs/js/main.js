import api from "../js/modules/api.js";
import render from "../js/modules/render.js"

//onderstaande code zorgt ervoor dat de data pas ingeladen wordt zodra de fetch is afgelopen

app()
async function app() {
    let data = await api()
    console.log(data)
    render(data)
}
 


// to push: (git add .) > (git commit -m "message") > (git push)

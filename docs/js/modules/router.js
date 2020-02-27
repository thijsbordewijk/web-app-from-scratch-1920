import routie from "../vendor/routie.min.js";

const sections = document.querySelectorAll("section");

export default function routing() {
  //De volgende functie zorgt ervoor dat wanneer de "current weather" geselecteerd word, deze categorie uitklapt en de anderen verdwijnen

  routie("currentDetailButton", () => {
    console.log("current");
    sections.forEach(section => {
      section.classList.remove("active");
      section.classList.add("hidden");
    });
    document.querySelector("#currentDetail").classList.add("active");
  });

  // deze functie doet hetzelfde met de "hourly weather" pagina

  routie("dailyDetailButton", () => {
    console.log("daily");
    sections.forEach(section => {
      section.classList.remove("active");
      section.classList.add("hidden");
    });
    document.querySelector("#dailyDetail").classList.add("active");
  });

  // en hier de pagina voor het weer van de hele week

  routie("weeklyDetailButton", () => {
    console.log("weekly");
    sections.forEach(section => {
      section.classList.remove("active");
      section.classList.add("hidden");
    });
    document.querySelector("#weeklyDetail").classList.add("active");
  });
}

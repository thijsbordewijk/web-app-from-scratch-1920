import routie from "../vendor/routie.min.js";

const sections = document.querySelectorAll('section')

export default function routing() {

routie('currentDetailButton', () => {
    console.log("hij werkt")
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden')
      })
      document.querySelector('#currentDetail').classList.add('active');
})
routie('dailyDetailButton', () => {
  console.log("hij werkt")
  sections.forEach(section => {
      section.classList.remove('active');
      section.classList.add('hidden')
    })
    document.querySelector('#dailyDetail').classList.add('active');
})
routie('weeklyDetailButton', () => {
  console.log("hij werkt")
  sections.forEach(section => {
      section.classList.remove('active');
      section.classList.add('hidden')
    })
    document.querySelector('#weeklyDetail').classList.add('active');
})

}

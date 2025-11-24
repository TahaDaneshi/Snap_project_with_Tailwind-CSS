// variabels

const imagesSliderArray = [
  "./src/img/slider/Club.jpg",
  "./src/img/slider/Food.jpg",
  "./src/img/slider/Market.jpg",
]
const slider = document.getElementById("slider")
const controlsSliderArray = document.getElementsByClassName('controls-slider')
const darkMode = document.getElementsByClassName("darkMode");
const modeIcons = [
  ``,
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
]
let flagSliderImage = 0;

// functions 

function changeDarkMode() {
  for (i = 0; i < darkMode.length; i++) {
    darkMode[i].innerHTML = modeIcons[1];
  }

}
changeDarkMode();

function changeSpanActive() {
  for (let i = 0; i < controlsSliderArray.length; i++) {
    controlsSliderArray[i].classList.remove("bg-gray-700")
    controlsSliderArray[i].classList.remove("bg-gray-500")
    controlsSliderArray[i].classList.add("bg-gray-500")
  }
  controlsSliderArray[flagSliderImage].classList.add("bg-gray-700")
}

setInterval(() => {
  flagSliderImage++

  if (flagSliderImage >= 3) { flagSliderImage = 0 }

  changeSpanActive()

  slider.setAttribute("src", imagesSliderArray[flagSliderImage])
}, 3000)

// Events

for (let i of controlsSliderArray) {
  i.addEventListener("click", (i) => {

    flagSliderImage = i.target.dataset.number
    slider.setAttribute("src", imagesSliderArray[i.target.dataset.number])

    changeSpanActive()
  })
}
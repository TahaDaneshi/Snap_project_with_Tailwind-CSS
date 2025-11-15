// variabels

const imagesSliderArray = [
  "./src/img/slider/Club.jpg",
  "./src/img/slider/Food.jpg",
  "./src/img/slider/Market.jpg",
]
const slider = document.getElementById("slider")
const controlsSliderArray = document.getElementsByClassName('controls-slider')

let flagSliderImage = 0;

// functions 

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
// variabels

const imagesSliderArray = [
  "./src/img/slider/Club.jpg",
  "./src/img/slider/Food.jpg",
  "./src/img/slider/Market.jpg",
]
const slider = document.getElementById("slider")
const controlsSliderArray = document.getElementsByClassName('controls-slider')
const darkMode = document.getElementsByClassName("darkMode");
const productsSection = document.getElementById('products');
const modeIcons = [
  `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
]
const iconsProduct = [
  './src/img/icons/taxi.svg',
  './src/img/icons/train.svg',
  './src/img/icons/shop.svg',
  './src/img/icons/pickup.svg',
  './src/img/icons/pharmacy.svg',
  './src/img/icons/moving.svg',
  './src/img/icons/investment.svg',
  './src/img/icons/intflight.svg',
  './src/img/icons/wallet.png',
  './src/img/icons/spdiscount.png',
  './src/img/icons/Pro.png',
  './src/img/icons/insdiscount.png',
  './src/img/icons/fdom-t.png'
]
let flagSliderImage = 0;

// functions 

function createProduct() {
  iconsProduct.forEach(element => {
    productsSection.insertAdjacentHTML('beforeend', `
      <div class="w-1/3 my-4">
        <div class="w-3/4 bg-white rounded-2xl flex lg:flex-row flex-col shadow py-3 px-2 items-center">
          <img class="rounded-xl flex lg:justify-center" src="${element}" width="65" height="65"
            alt="" />
          <div class="flex flex-col justify-center lg:items-start items-center lg:text-right text-center">
            <h3 class="font-iran_Bold mx-3 lg:text-right text-center">
              تاکسی اینترنتی
            </h3>
            <p class="font-iran_Light md:flex hidden text-text_nav mx-3 lg:text-right text-center">
              خدماتی برای همه عصر ها
            </p>
          </div>
        </div>`)
  });
};
createProduct();

// Change Mode
function changeDarkMode(flag) {
  document.documentElement.classList.toggle("dark");
  for (i = 0; i < darkMode.length; i++) {
    darkMode[i].innerHTML = modeIcons[flag];
  }
}
changeDarkMode(1);

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

// EVENTS

for (let i of controlsSliderArray) {
  i.addEventListener("click", (i) => {

    flagSliderImage = i.target.dataset.number
    slider.setAttribute("src", imagesSliderArray[i.target.dataset.number])

    changeSpanActive()
  })
}

// change mode button
for (i = 0; i < darkMode.length; i++) {
  let flagMode = 1;
  darkMode[i].addEventListener('click', function () {
    if (flagMode) {
      changeDarkMode(0);
      flagMode = 0
    } else {
      changeDarkMode(1);
      flagMode = 1;
    }

  })
}
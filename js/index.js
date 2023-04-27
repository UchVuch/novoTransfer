const toggleBtnPark = document.querySelector('[data-park-open]')
const listPark = document.querySelector('[data-park]')
const openBtnPark = `
  <span>Свернуть</span>
  <img src="./images/icons/eye-slash.svg" aria-hidden="true"></img>
`
const closeBtnPark = `
  <span>Посмотреть автопарк</span>
  <img src="./images/icons/eye.svg" aria-hidden="true">
`

function togglePark() {
  const statePark = toggleBtnPark.dataset.parkOpen
  switch (statePark) {
    case 'false':
      listPark.classList.add('car-park__list--open')
      listPark.style.maxHeight = listPark.scrollHeight + 'px'
      if (window.innerWidth <= 620) listPark.style.maxHeight = 1200 + 'px'
      toggleBtnPark.innerHTML = openBtnPark
      toggleBtnPark.setAttribute('data-park-open', 'true')
      break
    case 'true':
      listPark.classList.remove('car-park__list--open')
      listPark.style.maxHeight = null
      toggleBtnPark.innerHTML = closeBtnPark
      toggleBtnPark.setAttribute('data-park-open', 'false')
      break
  }
}

toggleBtnPark.addEventListener('click', togglePark)



const $advantageSlider1 = document.querySelector(".advantage-swiper1")
const $advantageSlider2 = document.querySelector(".advantage-swiper2")
const $carParkSlider = document.querySelector(".car-park-swiper")
let advantageSlider1 = null
let advantageSlider2 = null
let carParkSlider = null
function mobileSlider() {
  console.log('функция')
  if (window.innerWidth <= 620 && "false" == $advantageSlider1.dataset.mobile) {
    console.log('активировать')
    advantageSlider1 = new Swiper($advantageSlider1, {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 13,
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
    })
    $advantageSlider1.dataset.mobile = "true"

    advantageSlider2 = new Swiper($advantageSlider2, {
      slidesPerView: 2,
      spaceBetween: 13,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
    })
    $advantageSlider2.dataset.mobile = "true"

    carParkSlider = new Swiper($carParkSlider, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 3,
      },
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination3",
        clickable: true,
      },
    })
    $carParkSlider.dataset.mobile = "true"
  }
  if (window.innerWidth > 620) {
    console.log('деактивировать')
    $advantageSlider1.dataset.mobile = "false"
    $advantageSlider2.dataset.mobile = "false"
    $advantageSlider2.dataset.mobile = "false"
    if ($advantageSlider1.classList.contains("swiper-initialized")) advantageSlider1.destroy()
    if ($advantageSlider2.classList.contains("swiper-initialized")) advantageSlider2.destroy()
    if ($carParkSlider.classList.contains("swiper-initialized")) carParkSlider.destroy()
  }
}
mobileSlider()
window.addEventListener("resize", mobileSlider)
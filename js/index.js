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
  switch(statePark) {
    case 'false':
      listPark.classList.add('car-park__list--open')
      listPark.style.maxHeight = listPark.scrollHeight + 'px'
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
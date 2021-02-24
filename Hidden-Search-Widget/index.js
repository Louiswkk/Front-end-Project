const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
let count = 0
btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})
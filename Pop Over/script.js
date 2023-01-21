let modalClick = document.getElementById('button')

let modal = document.getElementById('modalContainer')

let overlay = document.querySelector('.overlay')

modalClick.addEventListener('click',()=>{
  overlay.classList.remove('hidden')
  modal.style.transform = 'scale(1)'
  modal.classList.add('active')
})

overlay.addEventListener('click',()=>{
  modal.style.transform = 'scale(0)'
  overlay.classList.add('hidden')
})

document.getElementById('close').addEventListener('click',()=>{
  modal.style.transform = 'scale(0)'
  overlay.classList.add('hidden')
})
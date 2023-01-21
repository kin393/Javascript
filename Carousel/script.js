
let containers = Array.from(document.getElementsByClassName('carousel-container'));

let jumpButtonsContainer = document.querySelector(".button-container")

let navButton = Array.from(document.getElementsByClassName('nav-button'))

let current = 0


containers.forEach(container => {
let jumpButtons = document.createElement('button');
  jumpButtonsContainer.appendChild(jumpButtons);
  jumpButtons.className = 'jumpButtons';
  if(container.classList.contains('active')) 
  {jumpButtons.classList.add('button-active')}
})

let jumpButtonsNew = Array.from(document.getElementsByClassName('jumpButtons'))


function handleChange(newPos){
containers[current].classList.remove('active')
jumpButtonsNew[current].classList.remove('button-active')
jumpButtonsNew[newPos].classList.add('button-active')
containers[newPos].classList.add('active')
current = newPos
 
}

for(let i = 0; i<jumpButtonsNew.length;i++){
jumpButtonsNew[i].addEventListener('click',()=>{
  handleChange(i)
})
}


for(let i = 0; i<navButton.length;i++){
  let direction = navButton[i]
  navButton[i].addEventListener('click',()=>{
    
    if(direction.classList.contains('next'))
      {
        let newPos = current+1 <= containers.length-1 ? current+1 : 0
       handleChange(newPos)
      }
   else{
     let newPos = current-1 < 0 ? containers.length-1: current - 1
     handleChange(newPos)
   }
    
  })
  
}

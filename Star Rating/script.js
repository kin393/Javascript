let stars = document.getElementsByClassName('star');

stars = Array.from(stars);

for(let i = 0; i < stars.length;i++){
  stars[i].addEventListener('click',handleClick(i));
}


function handleClick(i){
  {
    let currNode = i;
    for(let k = currNode + 1; k < stars.length;k++){
      if(stars[k].classList.contains('active'))
      stars[k].classList.remove('active');
    }
    for(let j = 0; j < currNode + 1;j++ )
      {
        stars[j].classList.add('active');
      }
    
  }
}
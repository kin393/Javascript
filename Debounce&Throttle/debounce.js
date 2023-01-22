//DEBOUNCE

const debounce = function(fn,delay){

let timer
return function(){
let context = this,
args = arguments;

clearTimeOut(timer)
  
timer = setTimeOut(()=>{
fn.apply(context,args);
},delay)
}
  
}

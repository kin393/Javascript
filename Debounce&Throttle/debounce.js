//DEBOUNCE

const debounce = function(fn,delay){

let timer
return function(){
let context = this,
Args = arguments;

clearTimeOut(timer)
  
timer = setTimeOut(()=>{
fn.apply(context,args);
},delay)
}
  
}

//Map
//======================================================================================================================================================/


let arr = [1,2,4,5,6,7,8]
let newArr = arr.map(a=>a+1)

console.log(newArr)

Array.prototype.ourMap = function(callback) {
  let arr = [] 
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]))
  }
  return arr 
}

let newArr1 = arr.ourMap(a=>a+1)
console.log(newArr1)
//======================================================================================================================================================/

//Filter
let filterArr = arr.filter(a=>a%2==0)

console.log(filterArr)


Array.prototype.myFilter = function(callback) {
  let newArr = [];
   for (let i = 0; i < this.length; i++) {
    if(callback(this[i]))
      {
        newArr.push(this[i])
      }
  }
  return newArr;
}


let filterArr1 = arr.myFilter(a=>a%2==0)

console.log(filterArr1)

//======================================================================================================================================================/

//Reduce
let sum = arr.reduce(getSum, 0);

function getSum(accumulator, a) {
  return accumulator + a;
}

console.log(sum)


Array.prototype.myreduce = function(callback,acc){
  let res = 0
  for(let i =0; i < this.length;i++){
    res+=callback(acc,this[i])
  }
  return res;
}

let sum1 = arr.myreduce(getSum, 0);

console.log(sum1)




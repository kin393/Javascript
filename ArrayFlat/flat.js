//Flatten Array

//========================================================================================================================================================

function flat(arr, depth = 1, result=[]) {  
for(let i = 0; i < arr.length; i++){
	let curr = arr[i];
	if(Array.isArray(curr) && depth != 0)
{
		flat(curr,depth - 1,result);
}
else
	    result.push(curr)
	}
	return result;
}

//========================================================================================================================================================
const flatten = function(arr, result = []) { 
for (let i = 0, length = arr.length; i < length; i++) 
{
 const value = arr[i]; 
if (Array.isArray(value)) { 
  flatten(value, result);
} 
else { result.push(value); } }
 return result; }


//========================================================================================================================================================

fucntion flat(arr){ return arr.reduce(function(acc,curr){
 return acc.concat(Array.isArray(curr) ? flat(curr) : curr)},
[])}

//========================================================================================================================================================
function flat(arr){
 return arr.reduce(function (acc, curr) { return acc.concat(Array.isArray(curr) ? flatten(curr) : curr); }, []); }

//========================================================================================================================================================

//Flatten Object JS

function recursive(arr) {
  const list = []
  for (let i = 0; i < data.length; i++) {
    if (arr[i] && arr[i].items && Array.isArray(arr[i].items)) {
      return [...list, ...recursive(arr[i].items)];
    }
    if (arr[i] && arr[i].type === 'file') {
      list.push(arr[i]);
    }
  }
  return list;

}

console.log(recursive(data))


//Object.functionName.call(ObjectBorrowingtheMethod) OR functionName.call(ObjectBorrowingtheMethod)

let person = {
  name: 'Kinjal',
  greet: function (){
    console.log('Hello!')
  },
  bye: function (){
    console.log('Bye!')
  }
}


let person1 = {
  name: 'Kinjal R'
}

person.greet.call(person1)

// Polyfill for Call

Function.prototype.mycall = function(context, ...args){
  context.fn = this;
  context.fn(...args);
}

person.greet.mycall(person1)
person.bye.mycall(person1)

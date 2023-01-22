//Object.functionName.call(ObjectBorrowingtheMethod,args) OR functionName.call(ObjectBorrowingtheMethod,args)



let person = {
  name: 'Kinjal',
  greet: function (name1,loc){
    console.log('Hello '+name1+' from '+loc)
  },
  bye: function (){
    console.log('Bye!')
  }
}


let person1 = {
  name: 'Kinjal R'
}

//Call
person.greet.call(person1,'Akshay','Brooklyn')

// Polyfill for Call

Function.prototype.mycall = function(context, ...args){
  context.fn = this;
  context.fn(...args);
}

person.greet.mycall(person1,'John','India')
person.bye.mycall(person1)

//======================================================================================================================================================/
//Object.functionName.apply(ObjectBorrowingtheMethod,[args]) OR functionName.apply(ObjectBorrowingtheMethod,[args])

//Apply

person.greet.apply(person1,['Akshay','Brooklyn'])

// Polyfill for Apply

Function.prototype.myapply = function(context,args){
  context.fn = this;
  context.fn(...args)
}

person.greet.myapply(person1,['Pahi','India'])

//======================================================================================================================================================/
//Object.functionName.bind(ObjectBorrowingtheMethod,args) OR functionName.bind(ObjectBorrowingtheMethod,args)
//Bind

let person2 = person.greet.bind(person1,'Cristelle','Bronx');

person2();

// Polyfill for Bind

Function.prototype.mybind = function(context,...args){
  context.fn = this;
  return function () {
   return context.fn(...args)
  };
}

let person3 = person.greet.mybind(person1,'Raj','Manhattan');

person3()


# Javascript Notes

<h1 style="color:orange;">EXECUTION CONTEXT</h1>

Everything in Javascript happens inside execution context

Execution context has 2 components -> Memory, Code Component

Memory ( Variable environment) -> variable and functions are stored as key value pair
Code(Thread of execution) -> code is executed one line at the time.

Javascript is synchronous single threaded language
Javascript can only execute one command at a time in a single line

<h1 style="color:orange;">HOW JAVASCRIPT CODE IS EXECUTED & CALL STACK</h1>

Javascript skims through the code and In the memory creation phase -> variables are stored as undefined
For functions-> the functions are stored as is

In code execution phase -> now the values start assigning to values in memory
When you invoke a  function a brand new execution context is created and the same steps of variable assignment are created. After the function is executed the execution context is deleted.

The call stack is used to manage the execution context > At the bottom of the call stack the global execution context (GEC) is pushed and then one by one ec is pushed and popped as soon as execution is done and finally the GEC is also popped

<h1 style="color:red;">HOISTING IN JS</h1>

Hoisting is a phenomenon in JS where you can access variables and functions before defining the variable/function

The key thing to remember about hoisting is that declarations are hoisted and initializations are not hoisted. 

Undefined: a variable is 'declared', it has its own placeholder but not having the value of itself 'defined' hence 'undefined' and until the variable has assigned a value, the 'undefined' fills that particular placeholder and 'undefined' is itself a datatype

Not Defined: This case comes in error where js engine neither find that particular variable nor its placeholder and cannot find the variable in 1st phase of context (Memory allocation context)

For arrow functions, hoisting does not work because it will work as a variable.

3. Variables are initialized to UNDEFINED when they are declared and Function definition is stored AS IT IS.
4. They are declared in the Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
6. When we assign Variable to a Function definition, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.

<h1 style="color:red;">FUNCTIONS</h1>

1.At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
2. In the first phase, the variables are assigned "undefined" while functions have their own code.
3. On function invocation rather than function declaration a local EC is created and pushed to the call stack having its own local and global scope
4. Once the function ends, the EC is removed from the call stack.
5. When the program ends, even the global EC is pulled out of the call stack.


<h1 style="color:red;">CLOSURE</h1>

Q)What is closure?
A)

Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !!

This means an inner nested function has access to its parents' lexical scope, and is able to remember variables the were declared in that environment, even after that functions has been removed from the call stack. 

Values in variable are 'pass by reference' hence there values can be changed, and whenever comes the closure inside closure(multilevel one) we can see the function refers the 'parent' variable 

1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.
2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown.
3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure.

<h1 style="color:red;">This Keyword</h1>
this keyword refers to an object, that object which is executing the current bit of javascript code.

In the global context, the this references the global object, which is the window object on the web browser or global object on Node.js.If you assign a property to this object in the global context, JavaScript will add the property to the global object as shown in the following example:


• window object is created by the JS engines of the respective browsers when global execution context is created.
	• whenever an execution context is created a "this" variable is also created.
	• at the global level "this" points to the global object( window object in case of browsers).
	• anything that is not inside a function is the "global space".
	• Whenever we create any variables or functions in the "global space", they get attached to the global object( window object in case of browsers).

1. Undefined is like a placeholder till a variable is not assigned a value.
2. undefined !== not defined
3. JS- weakly typed language since it doesn't depend on data type declarations.


<h1 style="color:red;">THE SCOPE CHAIN AND LEXICAL SCOPE</h1>
Scope in js is directly related to lexical environment
Lexical environment is the local memory along with the lexical env of its parent
Lexical environment is created whenever Execution context is created
0) Lexical environment = EC's Local Memory + Reference to Lexical Environment of its parent.
1) Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory.
2) Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked
.3) Global execution context holds reference to null.
4)  Javascript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed.
5) The mechanism mentioned in point 4 above is called SCOPE CHAIN.
6) If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the  browser's console.


<h1 style="color:red;">LET AND VAR</h1>
Let and const are hoisted 
1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable(let&const) is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.


<h1 style="color:red;">BLOCK SCOPE & SHADOWING</h1>


Block :- It is used to combine multiple statement into one statement so that we can use it at those places where javascript expects to have single statement.
Scope :- scope of a variable or a function is the place where these are accessible.
Block scope :-  The variables and function present within the scope of a block section. And block follows the lexical scope chain pattern while accessing the variable.
Shadowing :-  Providing same name to the variable as of those variable which are present in outer scope.
Q) What is block in JavaScript?
> multiple js statements formed in a group enclosed in brackets and it forms a block


Q) What is need of a block/Grouping?
> JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block


<h1 style="color:red;">FUNCTIONS</h1>


1.  What is a Function Statement ?
A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
      For Ex  -  function xyz(){
                            console.log("Function Statement");
                       }

2.  What is Function Expression ?
A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable. Variable is hoisted. It means  It cannot execute as function until it is defined as function.
      For Ex - var a = function(){
                            console.log("Function Expression");
                    }


3.  What is Anonymous Function ?
A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
      For Ex - function(){
                     }


4.  What is Named Function Expression ?
A.  A function with a name is known as Named Function Expression.
      For Ex - var a = function xyx(){
                            console.log("Names Function Expression");
                     }


5.  Difference b/w Parameters and Arguments ?
A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log("
                      }
       & When we call this function & pass a variabel in this ( ) that is our Arguments
       For Ex - ab( 4, 5 );


6.  What is First Class Function Or First class citizens?
A.   The Ability of use function as value,
*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } 


7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.

1. Function that is passed on as argument to another function is called callback function.
2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
3. Event listeners can also invoke closures with scope.
4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

<h1 style="color:red;">EVENT LOOP</h1>

1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
5. Micro task is given priority over callback tasks.
6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).

write a simple function:
// even empty script is perfectly valid js script, what about empty brackets!!
`{
 var a = 10;
 let b = 20;
 const c =30; 
}`


When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment' 


This become especially important when deciding the scope of a particular variable, since b and c are located in 'Block environment' and for a as we know exists in 'Global environment' any statement out of the "Block" can access 'a' ie.  ' Variable in Global environment' and other are not!


so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'


see script in 7:03


`var a = 100;
{
 var a = 10;
 let b = 20;
 const c =30; 
 console.log(a);
 console.log(b);
 console.log(c);
}
 console.log(a);
 console.log(b);
 console.log(c);
`

So in block " var a = 10;" influences the value within the block hence  console.log(a); >> 10 and outside of the block 'Variable in Global environment' influences value of a hence console.log(a); >> 100


<h1 style="color:red;">Illegal shadowing:</h1>

`
let a = 200;
{
 var a =20;
}
`

as 'var' declaration goes to 'Global environment' and sets in Memory context, it cannot be set using 'Block environment' value Hence:    Uncaught SyntaxError: Identifier 'a' has already been declared


When shadowing a variable should not cross the boundary of its scope scoped so 
Var is function scoped -> so if a variable is shadowed from let to var inside a function it will work

Simple function invocation
In the non-strict mode, the this references the global object when the function is called as follows


Method invocation
When you call a method of an object, JavaScript sets this to the object that owns the method.
Arrow function This
ES6 introduced a new concept named arrow function. In arrow functions, JavaScript sets the this lexically.


It means the arrow function does not create its own execution context, but inherits the this from the outer function where the arrow function is defined. 


<h1 style="color:red;">Callbacks</h1>

A callback is a simple function that's passed as a value to another function, and will only be executed when the event happens.

 First-class functions 
We can do this because JavaScript has first-class functions, which can be assigned to variables and passed around to other functions (called higher-order functions)



<h1 style="color:red;">Event Loop:</h1>

Web APIs:
setTimeout() 
DOM APIs
fetch()                     <- These are part of browsers
Local storage
Console
Location

These are part of global object

The callback lives in the web api environment
 As soon as the timeout or button click expires the callback is pushed into the callback Queue.

Event Loop: checks if something is in the callback queue and puts it into call stack;

Event loops only job is to monitor callback queue/microtask Queue and callstack
Once callback queue is full it pushed to stack and then gets executed


For fetch-

all callback that comes through promises as well as mutation observers goes inside microtask Queue.

Microtask Queue > priority than callback Queue
 Callback queue is called also task queue

Eventloop only gives opportunity to callback queue only when microtask queue is empty can also lead to starvation in callback queue
The MutationObserver interface provides the ability to watch for changes being made to the DOM tree. It is designed as a replacement for the older Mutation Events feature, which was part of the DOM3 Events specification. Methods are observed and disconnected.
----------------------------------------------------------------------------------------------------------------------------
Higher order functions is the function that takes a function as an argument or returns a function


The two problems that we  faced in callbacks are:-
1) Callback Hell: Asynchronous operations in JavaScript can be achieved through callbacks. Whenever there are multiple dependent Asynchronous operations it will result in a lot of nested callbacks. This will cause a 'pyramid of doom' like structure.
2) Inversion of control: When we give the control of callbacks being called to some other API, this may create a lot of issues. That API may be buggy,  may not call our callback and create order as in the above example, may call the payment callback twice etc.
Promise is an object that represents the eventual completion of an asynchronous operation.
Promises are immutable so it can't be altered as a result it helps to get rid off inversion of control that would be occurred in case callback and by chaining of promises we can get out of the callback hell.
In chaining of promises we should use return to get the promise result so that we don't miss anything from the chain.



<h1 style="color:red;">Prototype and prototypal inheritance</h1>
JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.

Cons of Prototypal Inheritance
Prototypical inheritance clearly has a lot of benefits for JavaScript programmings, but, like all tools, it does have limitations. Let’s take a look at the key downsides to look out for as you write a prototype-based program:

Inheritance cannot flow in circles as this will create an error. For example, if user linked premiumFamily as a prototype in the above program, an error would occur as this would create a loop.

Objects cannot inherit from multiple prototypes. As we saw above, they can inherit multiple object’s properties through a chain, however another object linked as a prototype explicitly will cause an error. This is the case even if the additional prototype is within the same chain. For example, familyPremium could not have explicit links to both premiumUser and user.

Prototypical relationships can only be made to objects. This is because the __proto__ function works as a forwarder, directing the program where to find the value it is looking for. As the program either knows where to look or it doesn’t, the function can be only either null or an object. All other types will be discarded.


__proto__ property
In Javascript, every object has its own hidden, internal property, [[Prototype]]. We can access that [[Prototype]] using the __proto__ property. This calls the program to mark the template object as a hidden type. JavaScript objects must be linked to this prototype object. Now, an object’s properties can be accessed by the inheritor object.

Let’s take a look at the syntax for accessing and setting the [[Prototype]] property of an object.

//using __proto__ to access and set the [[Prototype]] of "anObject"
anObject.__proto__ = someotherObject

Object.create
JavaScript ECMAScript 5 comes with the function Object.create( ). This method can be used to replacenew. We can use it to create an empty object based on a defined prototype and then assign it to a different prototype. Take a look at the syntax:

Object.create(proto, [propertiesObject])
Object.create methods can accept two arguments: propertiesObject and prototypeObject.


Object.prototype.constructor
All objects have a constructor property. If an object is created without the using a constructor function, it will have a constructor property. The constructor property will return a reference to the object’s Object constructor function. It will return 1, true1, and ”test”`. Take a look at an example below


<h2>The Prototype Chain</h2>
Prototypal inheritance uses the concept of prototype chaining. Let’s explore that concept. Every object created contains [[Prototype]], which points either to another object or null. Envision an object C with a [[Prototype]] property that points to object B. Object B’s [[Prototype]] property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.

This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object’s prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or null is reached.

<h1 style="color:red;">FUNCTION CURRYING</h1>
Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument.
`
function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) );
`
 
<h1 style="color:red;">Promises</h1>

Asyncronous programming exists because of Callbacks.

The two Problems with callbacks
1) Callback Hell: Callbacks are useful when we want to perfrom some extra functionality with our already existing function for example passing an error handling callback to our already created function, BUT when callbacks within themselves start taking in other functions as callbacks then that mess that you are left with is known as the Callback Hell leading to unreadable code, hence unmaintanable code.

2) Inversion Of Control: when we pass a function to other function as a callback we are giving the called function the control of whether to even call it or not or maybe call it in a wrong context. For example a success callback is called when an error occours inside a called function (maybe due to human error while writing the code  for called function), this type of giving up of control over our functions is known as inversion of control.


1. What are Promises?

1. Promises is an object which represents the eventual completion of an asynchronous operation.

2. In promises, instead of passing the callback function directly to a function/code, which can arise a problem called inversion of control, in which the full control of the callback function is passed, and we might not be aware of what is there in the code in which we are passing, it might contain issues/bugs which can cause problem like it might be the case that the function is never called, or it’s called more than once.

3. In promises, what we do is pass that function in which we will be passing our callback function, to a promise object. And promises as we know are the objects, that function’s properties will be stored when that is executed, as that is an async operation.

4. As we know JS never stops for any execution to happen or specifically for any async operation to be completed, firstly when the function is not completely executed the promise object remains empty(undefined).

5. Then at the moment when that async operation is executed, the empty properties in the promise object get filled with actual values.

6. The promise objects has mainly two properties: 
State and result.

7. State of an promise object can be in three states: 
a) pending
b) fulfilled
c) rejected

8. And, the result property contains what is returned by the async operation. If it is fulfilled, then it will contain the value, else which means rejected, it will contain the error.

9. And then after the execution of async tasks, we can attach the callback function to be called after, explicitly using .then() method of promise object. Which provides us the option, that we are not passing the control of the callback function.

10. Also using promises it guarantees that the callback function attached using the .then() will be called surely.
And, it also ensures that that callback function will strictly be called once.
Promises are used to handle asynchronous operations in javascript.


A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.




<h1 style="color:red;">ASYNC/AWAIT</h1>


The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.


The keyword await makes JavaScript wait until that promise settles and returns its result.


await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.
It’s just a more elegant syntax of getting the promise result than promise.then

<h1 style="color:red;">ASYNC/DEFER</h1>

Generally when a script tag is encountered, the html parsing of the application is stopped and the script tag is loaded, this creates a lag.Js is blocking.


In ASYNC, the script tag is loaded in background, once the script tag is made available, the HTML parsing stops and the script is executed, once its executed parsing continues


Similarly in DEFER, the script tag is loaded in parallel but will not start execution until the html parsing is complete
ASYNC attribute does not guarantee order of execution while  defer does

Hoisting
Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.
This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.
**Note - Variable initializations are not hoisted, only variable declarations are hoisted:


<h1 style="color:red;">Debouncing and Throttling</h1>
A throttled function is called once per N amount of time. Any additional function calls within the specified time interval are ignored.


A debounced function is called after N amount of time passes since its last call. It reacts to a seemingly resolved state and implies a delay between the event and the handler function call.For example of input field (Make an API call only if difference between 2 keystroke events is N)


Implement Debounce function
`const debounce = function(fn,delay){
Let timer
return function(){
Let context = this,
Args = arguments;


clearTimeOut(timer)
Timer = setTimeOut(()=>{
fn.apply(context,args);
},delay)
}
}
`
<h1 style="color:red;">Event Bubbling & capturing</h1>
If any event happens on child, its event is propagated to parent too, it moves up the hierarchy


Event Capturing is event happens on parent, the event is propagated to child - Same as Trickling
x.addEventListener(‘x’, ()=>{}, useCapture)
Here Use capture is a boolean value and defines what should be used, bubbling or capturing, if the flag is set to true, capturing occurs and if false or simply nothing is passed bubbling occurs


Use e.stopPropogation() to stop propagation - Only works for Bubbling when put on child element, if stop propagation needs to work for capturing, put on parent event listener


<h1 style="color:red;">EVENT DELEGATION</h1>
If you have a lot of event listeners hanging around in your code, it causes bottleneck to avoid this we use event delegation
Instead of applying  event listeners on all child elements apply event listener to parent div
Use e.target


Pros -> memory, DOM manipulation
Cons - not all events are bubbled up


<h1 style="color:red;">MISC</h1>

1. An inner function can be directly called using two parenthesis ()().
2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.

<h1>API Headers</h1>
Authorization: Send credentials for basic HTTP authentication to give permission for access

```
Authorization: <type> <credentials>

Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```


Cache-Control: Tell the browser how long a resource is eligible to be cached and re-used

```
Cache-Control: public, max-age=604800, immutable

```

Content-Type: Tell a server the MIME type of the body of a request so that the server knows how to parse the data

```
Content-Type: text/html; charset=UTF-8
Content-Type: multipart/form-data; boundary=something
```

Cookie: Set a cookie to be stored in the browser so we can track state or sessions
HTTP headers are used to pass additional information with HTTP response or HTTP requests. A cookie is an HTTP request header i.e. used in the requests sent by the user to the server. It contains the cookies previously sent by the server using one or more set-cookie headers. It is an optional header. 

```
Cookie: name=value; name=value; name=value

```

The Access-Control-Allow-Origin

```
Access-Control-Allow-Origin: * | <origin> | null
```

<h1>Axios Interceptors</h1>


To talk in simple terms, it is more of a checkpoint for every HTTP action. Every API call that has been made, is passed through this interceptor.

So, why two interceptors?

An API call is made up of two halves, a request, and a response. Since it behaves like a checkpoint, the request and the response have separate interceptors.

Some request interceptor use cases -

Assume you want to check before making a request if your credentials are valid. So, instead of actually making an API call, you can check at the interceptor level that your credentials are valid.

Assume you need to attach a token to every request made, instead of duplicating the token addition logic at every Axios call, you can make an interceptor that attaches a token on every request that is made.

Some response interceptor use cases -

Assume you got a response, and judging by the API responses you want to deduce that the user is logged in. So, in the response interceptor, you can initialize a class that handles the user logged in state and update it accordingly on the response object you received.

Assume you have requested some API with valid API credentials, but you do not have the valid role to access the data. So, you can trigger an alert from the response interceptor saying that the user is not allowed. This way you'll be saved from the unauthorized API error handling that you would have to perform on every Axios request that you made.

Here are some code examples

The request interceptor

One can print the configuration object of axios (if need be) by doing (in this case, by checking the environment variable):

```
const DEBUG = process.env.NODE_ENV === "development";

axios.interceptors.request.use((config) => {
    /** In dev, intercepts request and logs it into console for dev */
    if (DEBUG) { console.info("✉️ ", config); }
    return config;
}, (error) => {
    if (DEBUG) { console.error("✉️ ", error); }
    return Promise.reject(error);
});
If one wants to check what headers are being passed/add any more generic headers, it is available in the config.headers object. For example:

axios.interceptors.request.use((config) => {
    config.headers.genericKey = "someGenericValue";
    return config;
}, (error) => {
    return Promise.reject(error);
});
```
In case it's a GET request, the query parameters being sent can be found in config.params object.

The response interceptor

You can even optionally parse the API response at the interceptor level and pass the parsed response down instead of the original response. It might save you the time of writing the parsing logic again and again in case the API is used in the same way in multiple places. One way to do that is by passing an extra parameter in the api-request and use the same parameter in the response interceptor to perform your action. For example:

//Assume we pass an extra parameter "parse: true" 
axios.get("/city-list", { parse: true });
Once, in the response interceptor, we can use it like:
```
axios.interceptors.response.use((response) => {
    if (response.config.parse) {
        //perform the manipulation here and change the response object
    }
    return response;
}, (error) => {
    return Promise.reject(error.message);
});
```
So, in this case, whenever there is a parse object in response.config, the manipulation is done, for the rest of the cases, it'll work as-is.

You can even view the arriving HTTP codes and then make the decision. For example:
```
axios.interceptors.response.use((response) => {
    if(response.status === 401) {
         alert("You are not authorized");
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});
```
Typically, the API key provides only application-level security, giving every user the same access; whereas the JWT token provides user-level access. 

A JWT token can contain information like its expiration date and a user identifier to determine the rights of the user across the entire ecosystem. 

<h1>Shallow Copy vs Deep Copy</h1>

Shallow Copy: When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created. In simple words, a reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. This means both the old and new reference variable point to the same object in memory. As a result if the state of the object changes through any of the reference variables it is reflected for both. Let us take an example to understand it better.


Deep Copy: Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object. In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected. Also, if one of the objects is deleted the other still remains in the memory. Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods. Let us take an example to understand it better.
To create Deep Copy ->
Using Spread Operator
Using Object.assign() method
Using Json.parse() and Json.stringify()

https://dev.to/sag1v/javascript-the-this-key-word-in-depth-4pkm

https://dmitripavlutin.com/javascript-this-interview-questions/

https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/#23-pitfall-this-in-an-inner-function





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
A)The function bundled with its lexical environment closed to that function
simply function + Lexical environment
and closures have very special place in runtime environment
The fun in JavaScript is you can assign a variable for a function and also you can pass function as a parameter even you can return the function in JavaScript

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
{
 var a = 10;
 let b = 20;
 const c =30; 
}


When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment' 


This become especially important when deciding the scope of a particular variable, since b and c are located in 'Block environment' and for a as we know exists in 'Global environment' any statement out of the "Block" can access 'a' ie.  ' Variable in Global environment' and other are not!


so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'


see script in 7:03


* var a = 100;
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


So in block " var a = 10;" influences the value within the block hence  console.log(a); >> 10 and outside of the block 'Variable in Global environment' influences value of a hence console.log(a); >> 100


<h1 style="color:red;">Illegal shadowing:</h1>


let a = 200;
{
 var a =20;
}


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

<h1 style="color:red;">MISC</h1>

1. An inner function can be directly called using two parenthesis ()().
2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.







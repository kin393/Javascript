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

<h1 style="color:orange;">HOISTING IN JS</h1>

Hoisting is a phenomenon in JS where you can access variables and functions before defining the variable/function

The key thing to remember about hoisting is that declarations are hoisted and initializations are not hoisted. 

Undefined: a variable is 'declared', it has its own placeholder but not having the value of itself 'defined' hence 'undefined' and until the variable has assigned a value, the 'undefined' fills that particular placeholder and 'undefined' is itself a datatype

Not Defined: This case comes in error where js engine neither find that particular variable nor its placeholder and cannot find the variable in 1st phase of context (Memory allocation context)

For arrow functions, hoisting does not work because it will work as a variable.

3. Variables are initialized to UNDEFINED when they are declared and Function definition is stored AS IT IS.
4. They are declared in the Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
6. When we assign Variable to a Function definition, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.

FUNCTIONS

1.At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
2. In the first phase, the variables are assigned "undefined" while functions have their own code.
3. On function invocation rather than function declaration a local EC is created and pushed to the call stack having its own local and global scope
4. Once the function ends, the EC is removed from the call stack.
5. When the program ends, even the global EC is pulled out of the call stack.


CLOSURE

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




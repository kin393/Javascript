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

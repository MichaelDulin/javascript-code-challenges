"use strict";

/*------------------------------------------------------------------
----------------------------- For Loop -----------------------------
    Let's work on different ways we can iterate through things. 
    We know FOR loops, but we will be getting into more advanced methods as you go. 
    For this one, iterate through an array and return the sum of all numbers in the array using a FOR loop

    IN: [1, 2, 3, 4, 5]
    OUT: 15
*/

const sumWithForLoop = (arr) => {};




/*------------------------------------------------------------------
----------------------------- While --------------------------------
    Alright, simple. Now, let's go ahead and do the same thing but using a WHILE loop. 
    The concept is essentially the same, but the order of operation slightly changes. 
    The most important aspect to keep in mind is instead of using i (let i = 0; i < michael.length; i++),
    we need to instantiate our iterator outside of the loop. 
    Then, on each iteration, add 1 to your iterator. 

    HINT: If you are stuck, check out this source: 
        https://www.altcademy.com/blog/loops-in-javascript-for/ 

    IN: [2, 4, 6, 8, 10]
    OUT: 30
*/

const sumWithWhileLoop = (arr) => {};




/*---------------------------------------------------------------------
----------------------------- Do While --------------------------------
    Great, now let's do the same thing but using a DO WHILE. 
    Similar to WHILE, we need to declare our iterator outside of the loop. 
    DO WHILE loops differ slightly in the sense that the code is executed within the do { }, with the conditional logic under it in a while { }. 
    The key difference to consider here is the condition is checked AFTER each iteration. 
    
    How can that be helpful to us?

    IN: [3, 6, 9, 12]
    OUT: 30
*/

const sumWithDoWhileLoop = (arr) => {};





/*---------------------------------------------------------------------
----------------------------- ForEach ---------------------------------
    Finally we come to the last loop option: FOREACH. 
    This is a unique loop as it can be used as a callback for another function. 
    It's best if you see an example first:


	EX: Multiply Each Index Value by 10

	const OGArray = [1, 2, 3, 4, 5];

	OGArray.forEach(multiplyByTen);

	const multiplyByTen = (value, index, temp) => {
		temp[index] = value * 10;
	}

    OUT: [10, 20, 30, 40, 50]

    For this one, you will need to set this up in this fashion and do the same thing as the previous challenges: 
        return a sum of an array of numbers.

    HINT: Do you need a callback? Add any helper functions or callbacks you may need. 
          Consider how to invoke this

    IN: [1, 2, 3, 4, 5]
    OUT: 15
*/

const sumWithForEach = (arr) => {};




/*---------------------------------------------------------------------
----------------------------- Recursion ---------------------------------
    You may have heard of Recursion before, but what is it really? 
    It's really not as scary as it seems, in fact, once it clicks for you, it can be an extremely valuable tool. 
    Recursion essentially just means calling itself, such as a function which calls itself (i.e. Recursive Function). 
    Simple, right?

    So, how do we use it? 
    Similar to how for, while, and doWhile loops have an iterator and a conditional to 'break out' of the loop, recursive functions invoke(call) themselves inside themselves, using some conditional (if/else). 
    This is very easy to implement, and you may be wondering why this even matters since we know how to loop other ways. 
    Recursion becomes extremely useful when we need to complete many operations or 'sub-problems'. 
    This is due to our recursive callback passing updated values back to the function when it calls itself again. 
    Essentially, we can set up functions to run itself, update itself with data obtained from itself, and break out of its own functionality. 

    Great, so recursion is awesome. 
    Well, the issue with using this is it's much harder to debug than a regular function. 
    This is because we must be very accurate in our data passed back in the parameters to:

	    A: Actually update the values we want to update
	    B: Ensure the data being updated is being returned properly and not skewing 
	    C: Prevent Infinite Loops

    An Infinite Loop is a loop which never ends. 
    Obviously, this will shatter your code. 
    The issue with this is if we cannot pinpoint what is causing the infinite loop, it is pretty hard to debug since your terminal wont return any useful information.

    Let's look at how this works:

	EX: Multiply Each Index Value by 10


	const OGArray = [1, 2, 3, 4, 5];

	const multiplyByTen= (arr, idx) => {
		if (idx === arr.length - 1) {
			return arr;
		}
		arr[idx] *= 10;
		multiplyByTen(arr, idx + 1)
	}

	multiplyByTen(OGArray, 0);

    OUT: [10, 20, 30, 40, 50]


    Let's get to it. We are going to start off really simple. 
    Let's go through and once again return the total sum of an array of numbers.

    IN: [2, 4, 6, 8, 10]
    OUT: 30
*/

const sumWithRecursion = (arr, index) => {

}








/* ============================================================================ */
/* ============================================================================ */
/* ============================================================================ */

module.exports = {
    sumWithForLoop,
    sumWithWhileLoop,
    sumWithDoWhileLoop,
    sumWithForEach,
    sumWithRecursion
};
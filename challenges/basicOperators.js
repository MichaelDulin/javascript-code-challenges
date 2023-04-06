"use strict";

/*-------------------------------------------------------------
----------------------------- Sum -----------------------------
    You're given 2 numbers here - add them together and return their sum:

    IN: (1, 2) 
    OUT: 3
*/

const addTwoNumbers = (num1, num2) => {};



/*  ----------------------------------------------------------------------
----------------------------- Product ------------------------------------
    Given a base number and a counter, return baseNum added to itself by counter:

    IN: (7, 3) 
    OUT: 21
*/

const addNumberToItself = (baseNum, counter) => {};




/* -----------------------------------------------------------------------
----------------------------- Difference ---------------------------------
    Given two numbers, subtract the second from the first:

    IN: (8, 2) 
    OUT: 6
*/

const subtractNums = (baseNum, subtractor) => {};




/*  ----------------------------------------------------------------------
----------------------------- Quotient -----------------------------------
    Given two numbers, return quotient of first num divided by second num:

    IN: (10, 2) 
    OUT: 5
*/

const divideNumber = (baseNum, divider) => {};




/*------------------------------------------------------------------------
----------------------------- Remainder ----------------------------------
    Given two numbers, return remainder (%):

    IN: (15, 5) 
    OUT: 0
*/

const findRemainder = (baseNum, num) => {};




/*  ----------------------------------------------------------------------------
------------------------- Getting Weird With Operators -------------------------
    Alright, lets take everything and apply it in one. For this, you are given 5 numbers: 

        baseNum, sumNum, productNum, differenceNum, quotientNum and remainderNum. 

    For each value after baseNum, apply that operator to baseNum. 
    Then, use the result of that operator on baseNum to start your next operator.

    HINT: You just did each operator in order in the previous challenges

    EX: given(1, 2, 3, 4, 5, 1,) -> 1 + 2 -> 3 * 3 -> 9 - 4 -> 5 / 5 -> 1 % 1 = 0

    IN: (17, 3, 5, 20, 4, 10) 
    OUT: 0
*/

const opsOnOps = (baseNum, addNum, multNum, subNum, divNum, modNum) => {};




/*  ------------------------------------------------------------------
----------------------------- Find Power -----------------------------
    Given 2 numbers (base, pow), multiply base num by itself per the power number provided:

    IN: 5, 3
    OUT: 125
*/

const findPow = (baseNum, exponent) => {};




/*  ----------------------------------------------------------------------------
------------------------- Find Sum - Return T / F ------------------------------
    Given several numbers, find their sum and return 'true' if even and 'false' if odd:

    IN: 1, 2, 3, 4, 5, 6
    OUT: false
*/

const sumAndFindTF = (arr) => {};




/*  ----------------------------------------------------------------------------
------------------------- Find Area of Right Triangle --------------------------
    Given the height and base of a right triangle, return the area of the triangle.

    HINT: Look up how to find are of right triangle (super simple)

    IN: 5, 4
    OUT: 10
*/

const rightTriArea = (base, height) => {};




/*  -----------------------------------------------------------------------------
------------------------- Find Third Angle of Triangle --------------------------
    Given two numbers representing angles on a triangle, find the third angle and return its value

    HINT: Look up how to third angle of triangle given first two angles

    IN: 42, 75
    OUT: 63
*/

const findLastAngle = (angleOne, angleTwo) => {};




/*  -----------------------------------------------------------------------------
------------------------- Find Area of Circle -----------------------------------
    Given a radius, find the area of a circle. 
    Round the value up to nearest whole value and return

    HINT: You will need to use PI here, how do we do that in JS?

    IN: 12
    OUT: 76
*/

const areaOfCircle = (radius) => {}; 




/*  -----------------------------------------------------------------------------
------------------------- Find Area of Dougnut -----------------------------------
    Alright, so we know how to find the area of a circle. Let's find the area of a doughnut. 
    Given two different radius', find area of the first circle. 
    Then, find area of second circle and subtract second from first. 
    Return final area rounded up: 

    IN: 12, 8
    OUT:  252
*/

const areaOfDoughtnut = (radiusOne, radiusTwo) => {};




















/* ============================================================================ */
/* ============================================================================ */
/* ============================================================================ */

module.exports = {
  addTwoNumbers,
  addNumberToItself,
  subtractNums,
  divideNumber,
  findRemainder,
  opsOnOps,
  findPow,
  sumAndFindTF,
  rightTriArea,
  findLastAngle,
  areaOfCircle,
  areaOfDoughtnut
};

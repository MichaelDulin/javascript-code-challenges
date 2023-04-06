"use strict";

const challenge2 = require('../challenges/workingWithArrays');

describe("Testing challenge set 2", () => {
  test("Given an array, return a new array with only even numbers", () => {
    expect(challenge2.evenArray([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([2, 4, 6, 8]);
  });
  test("Given an array, return a new array with only odd numbers", () => {
    expect(challenge2.oddArray([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([1, 3, 5, 7]);
  });
  test("Given an array and a value, return how many times the value was found", () => {
    expect(challenge2.compareArray([1, 2, 3, 4, 1, 6, 1, 8])).toStrictEqual(3);
  });
  test("Given an array, return the number found in the middle of said array", () => {
    expect(challenge2.findMiddleVal([1, 6, 2, 9, 10, 11, 4])).toStrictEqual(9);
  });
  test("Given an array, find the middle index, then add the number to the left and right together and return", () => {
    expect(challenge2.addMiddleNeighbors([1, 6, 2, 9, 10, 11, 4])).toStrictEqual(12);
  });
  test("Given an array, split into two by even and odds, add each value and return final array", () => {
    expect(challenge2.gettingWeird([1, 6, 2, 9, 10, 11, 4, 17, 3, 100, 1001, 12])).toEqual([7, 11, 21, 103, 1013]);
  });
});

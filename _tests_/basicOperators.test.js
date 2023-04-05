'use strict';

const challenge1 = require('../challenges/basicOperators');

describe('Testing challenge set 1', () => {
    test('Taking in two numbers, return their sum', () => {
      expect(challenge1.addTwoNumbers(1, 2)).toStrictEqual(3);
    });
    test('Taking in three numbers, return their product', () => {
        expect(challenge1.addNumberToItself(7, 3)).toStrictEqual(21);
    });
    test('Taking in two numbers, return difference', () => {
        expect(challenge1.subtractNums(8, 2)).toStrictEqual(6);
    });
    test('Taking in two numbers, return quotient', () => {
        expect(challenge1.divideNumber(10, 5)).toStrictEqual(2);
    });
    test('Taking in two numbers, return difference', () => {
        expect(challenge1.divideNumber(10, 2)).toStrictEqual(5);
    });
    test('Taking in two numbers, return remainder', () => {
        expect(challenge1.findRemainder(10, 2)).toStrictEqual(0);
    });
  });
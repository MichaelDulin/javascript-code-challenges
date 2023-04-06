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
        expect(challenge1.divideNumber(10, 2)).toStrictEqual(5);
    });
    test('Taking in two numbers, return remainder', () => {
        expect(challenge1.findRemainder(15, 5)).toStrictEqual(0);
    });
    test('Taking in 6 numbers, return baseNum after each operation was conducted on it', () => {
        expect(challenge1.opsOnOps(17, 3, 5, 20, 4, 10)).toStrictEqual(0);
    });
    test('Given 2 numbers (base, pow), multiply base num by itself per the power number provided', () => {
        expect(challenge1.findPow(5, 3)).toStrictEqual(125);
    });
    test('Given several numbers, find their sum and return true if even and false if odd', () => {
        expect(challenge1.sumAndFindTF(1, 2, 3, 4, 5, 6)).toStrictEqual(false);
    });
    test('Given the height and base of a right triangle, return the area of the triangle', () => {
        expect(challenge1.rightTriArea(5, 4)).toStrictEqual(10);
    });
    test('Given two numbers representing angles on a triangle, find the third angle and return its value', () => {
        expect(challenge1.findLastAngle(42, 75)).toStrictEqual(63);
    });
    test('Given a radius, return the circles area rounded up', () => {
        expect(challenge1.areaOfCircle(12)).toStrictEqual(76);
    });
    test('Given two radius, find area of both circles, subtract smallest from largest and return', () => {
        expect(challenge1.areaOfDoughtnut(12, 8)).toStrictEqual(252);
    });
  });
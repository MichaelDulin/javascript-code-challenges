'use strict';

const challenge3 = require('../challenges/loopsAndRecursion');

describe('Testing challenge set 3', () => {
    test('Taking in an array, return total sum of all values with a for loop', () => {
        expect(challenge3.sumWithForLoop([1, 2, 3, 4, 5])).toStrictEqual(15);
    });
    test('Taking in an array, return total sum of all values with a while loop', () => {
        expect(challenge3.sumWithWhileLoop([2, 4, 6, 8, 10])).toStrictEqual(30);
    });
    test('Taking in an array, return total sum of all values with a doWhile loop', () => {
        expect(challenge3.sumWithDoWhileLoop([3, 6, 9, 12])).toStrictEqual(30);
    });
    test('Taking in an array, return total sum of all values with a forEach loop', () => {
        expect(challenge3.sumWithDoWhileLoop([5, 10, 15, 20])).toStrictEqual(50);
    });
    test('Taking in an array, return total sum of all values using recursion', () => {
        expect(challenge3.sumWithRecursion([10, 20, 30, 40])).toStrictEqual(100);
    });
})
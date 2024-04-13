import {reverse, capitalize, calc, caesarCipher, analyzeArray} from './practice.js';


// check for capitalization 
test('Check for capitalized', () => {
    expect(capitalize('hello')).toMatch('Hello');
});

// check for reverse string
test('Check for reverse', () => {
    expect(reverse('hello')).toMatch('olleh');
});

// calculator tests
const calculator = calc();
// add
test('Check for Add', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

// subtract
test('Check for subtract', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
});

// divide
test('Check for divide', () => {
    expect(calculator.divide(10, 5)).toBe(2);
});

// multiply
test('Check for multiply', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
});

// Caeser cipher

test('Testing for key shift 1', () => {
    expect(caesarCipher('bad', 1)).toMatch('cbe');
});

test('Testing for key shift 5', () => {
    expect(caesarCipher('bad', 5)).toMatch('gfi');
});

test('Testing for key shift 5 over 26 item', () => {
    expect(caesarCipher('xerox', 5)).toMatch('cjwtc');
});

test('Contains non char values', () => {
    expect(caesarCipher('xe.ox', 5)).toMatch('cj.tc');
});

// array analyze
const object = analyzeArray([1,8,3,4,2,6]);

test('analyze array average', () => {
    expect(object.average()).toBe(4);
});

test('analyze array min', () => {
    expect(object.min()).toBe(1);
});

test('analyze array max', () => {
    expect(object.max()).toBe(8);
});

test('analyze array length', () => {
    expect(object.length()).toBe(6);
});
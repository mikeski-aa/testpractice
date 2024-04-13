import {reverse, capitalize} from './practice';


// check for capitalization 
test('Check for capitalized', () => {
    expect(capitalize('hello')).toMatch('Hello');
});

// check for reverse string
test('Check for reverse', () => {
    expect(reverse('hello')).toMatch('olleh');
})
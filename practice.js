// capitalize first letter in string
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// reverse string
function reverse(string){
    let reversedString = []

    for (let x = (string.length - 1); x > -1; x--){
        reversedString.push(string.charAt(x));
    }
    return reversedString.join("");
}

export {reverse, capitalize};
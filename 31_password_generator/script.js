const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) // 97 = lowercase 'a' in ASCII code

}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) // 65 = Uppercase 'A' in ASCII code
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48) // 48 = number 0
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)] // even though it's a string, we can still use index
}

console.log(getRandomLower())
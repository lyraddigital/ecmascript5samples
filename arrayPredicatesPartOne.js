var array = [9,5,7,1,9,7,3];

function isOdd(value, index, array) {
    var predicateResult = value % 2 === 1;
    console.log(array + " => is position " + index + " odd? " + predicateResult);
    return predicateResult;
}

function isEven(value) {
    return value % 2 === 0;
}

function printNumber(value) {
    console.log(value);
}

console.log(array.every(isOdd));
console.log(array.some(isEven));

array.forEach(printNumber);
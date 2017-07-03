var sequence = [1,2,3,4,5,6,7,8,9];

function mapArray(value, index) {
    var predicateResult = value % 2 === 1;
    var convertedValue = 0;

    if(predicateResult) {
        convertedValue = value * 3;
    }
    else {
        convertedValue = value * 2;
    }

    console.log('The value of ' + value + ' at index ' +
                index + ' will be converted to value ' + convertedValue);

    return convertedValue;
};

function moreThanTwenty(value, index) {
    if (value > 20)
    {
        console.log('The value at index: ' 
                    + index + ' is more than 20. It\'s value is: ' + value);
        return true;
    }

    return false;
}

console.log(sequence);

var mappedArray = sequence.map(mapArray);
var filteredArray = sequence
                        .map(mapArray)
                        .filter(moreThanTwenty);

console.log(mappedArray);
console.log(filteredArray);
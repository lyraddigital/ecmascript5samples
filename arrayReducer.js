var sequence = [1,2,3,4,5,6,7,8,9];
var ddArraySequence = [[1,2],[3,4],[5,6],[7,8],[9]];

function addNumbers(accum, currentValue, currentIndex, array)
{
    //console.log('Accum value: ' + accum);
    //console.log('Current value: ' + currentValue);
    //console.log('Current index: ' + currentIndex);
    //console.log('Array being processed: ' + array);

    return accum + currentValue;
}

function convertToOneDimensionalArray(accum, currentValue) {
    //console.log(accum);
    //console.log(currentValue);
    
    return accum.concat(currentValue);
}

var output = sequence.reduce(addNumbers, 100);
var singleDOutput = ddArraySequence.reduce(convertToOneDimensionalArray);
var reverseSingleD = ddArraySequence.reduceRight(convertToOneDimensionalArray);

//console.log(output);
console.log(reverseSingleD);
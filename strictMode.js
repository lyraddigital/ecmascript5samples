/*'use strict';

function willFailBecauseOfGlobalVariable() {
    notAllowedVariable = 123;
}

willFailBecauseOfGlobalVariable();*/

/*function nonStrictFunction() {
    nonStrictVariable = 123;
    console.log('This should be printed as we are not strict');
}

function strictFunction() {
    'use strict';
    strictVariable = 456;
    console.log('This should not be printed as we are now strict');
}

nonStrictFunction();
strictFunction();*/

/*function nonStrictFunction() {
    console.log(this === global);
}

function strictFunction() {
    'use strict';
    console.log(this === undefined);
    console.log(this);
}

//nonStrictFunction();
//strictFunction();
//var aStrictFunc = new strictFunction();*/

function Point(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
}

var aPoint = new Point(1, 2);
console.log(aPoint.x);
console.log(aPoint.y);
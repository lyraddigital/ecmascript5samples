'use strict';

function willFailBecauseOfGlobalVariable() {
    notAllowedVariable = 123;
    console.log('This should not show when in strict mode');
}

willFailBecauseOfGlobalVariable();

/*
function nonStrictFunction() {
    nonStrictVariable = 123;
    console.log('This will show as we are not being strict here');
}

function strictFunction() {
    'use strict';
    strictedVariable = 456;
    console.log('This will never show as we are being strict here');
}

nonStrictFunction();
strictFunction();*/

/*function nonStrictFunc() {
    console.log(this === global);
}

function strictFunc() {
    'use strict';
    console.log(this === undefined);
}

nonStrictFunc();
strictFunc();*/

/*
function Point(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
}
*/

/*
var succeeds = new Point(1, 3);
console.log(succeeds.x);

var fails = Point(1, 3);
console.log(fails.x);
*/
'use strict';

var Animal = Object.create({}, {
    'type': {
        configurable: false,
        enumerable: true,
        value: '',
        writable: true
    }, 
    'hasSpine': {
        configurable: false,
        enumerable: true,
        value: true,
        writable: false
    }
});

Animal.type = 'Cat';
//Animal.hasSpine = false;

console.log(Animal.type);
console.log(Animal.hasSpine);

for (var prop in Animal) 
{
    console.log(prop);
}

console.log(JSON.stringify(Animal));

/*var Animal = function() {}

Object.defineProperties(Animal, {
    'type': {
        configurable: true,
        enumerable: false,
        //value: '',
        //get: function() { return 'Animal' }//,
        //set: function(value) { console.log('You can not set the type'); },
        writable: true
    }
});

Animal.type = 'Cat';

console.log(Animal.type);

Object.defineProperty(Animal, 'type', {
    value: 'Animal2'
});

console.log(Animal.type);
Animal.type = "Dog";

console.log(Animal.type);

var descriptor = Object.getOwnPropertyDescriptor(Animal, 'type');

console.log(JSON.stringify(descriptor));*/
'use strict';

var Animal = Object.create({}, {
    'type': {
        enumerable: false,
        //value: '',
        //writable: false,
        configurable: true,
        get: function() {
            return 'Idiot';
        },
        set: function(value) {
            console.log('Setting type to ' + value);
        }
    }
});

Object.defineProperties(Animal, {
    'type': { value: 'Chicken' },
    'hasSpine': { value: true, writable: true }
});

console.log(Animal.type);
console.log(Animal.hasSpine);

Animal.hasSpine = false;

console.log(Animal.hasSpine);
console.log(Object.getOwnPropertyDescriptor(Animal, 'hasSpine'));

//Object.defineProperty(Animal, 'type', { value: 'Egg'});
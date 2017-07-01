'use strict';

var Animal = Object.create({}, {
    'type': { value: 'Mammal', enumerable: true, writable: true, configurable: true }
});

Animal.hasBackbone = true;
Object.defineProperty(Animal, 'hasLegs', { value: true, writable: true, enumerable: true, configurable: true });

//delete Animal.hasLegs;

console.log(Object.isSealed(Animal));
console.log(Object.isExtensible(Animal));

Object.seal(Animal);

Animal.hasBackbone = false;
//Animal.legs = 4;
//Object.defineProperty(Animal, 'type', { 'value': 'Bird', writable: true, enumerable: true, configurable: true });
//delete Animal.type;

console.log(Object.isSealed(Animal));
console.log(Object.isExtensible(Animal));

console.log(Object.getOwnPropertyDescriptor(Animal, 'type'));
console.log(Object.getOwnPropertyDescriptor(Animal, 'hasLegs'));
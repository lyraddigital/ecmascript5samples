'use strict';

var Animal = Object.create({}, {
    'type': { value: 'Mammal', writable: true, enumerable: true, configurable: true },
    'hasBackbone': { value: true, writable: true, enumerable: true, configurable: true }
});

Animal.type = 'Cat';
Animal.name = 'Daryl';
Object.defineProperty(Animal, 'hasBackbone', { value: false, writable: true, enumerable: true, configurable: true });

delete Animal.hasBackbone;

Object.freeze(Animal);

//Animal.type = 'Dog';
//delete Animal.name;
//Object.defineProperty(Animal, 'type', { value: 'Dog', writable: true, enumerable: true, configurable: true });
//Animal.canSpeak = true;

console.log(Object.isExtensible(Animal));
console.log(Object.isSealed(Animal));
console.log(Object.isFrozen(Animal));
console.log(Object.getOwnPropertyDescriptor(Animal, 'type'));
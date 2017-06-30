'use strict';

var extendedObject = Object.create({}, {
    'name': { value: 'Daryl', writable: true, configurable: true }
});

var nonExtendedObject = Object.create({}, {
    'name': { value: 'Egg', writable: true, configurable: true }
});

Object.preventExtensions(nonExtendedObject);
console.log(Object.isExtensible(nonExtendedObject));
console.log(Object.isExtensible(extendedObject));

extendedObject.isGood = true;
//nonExtendedObject.isGood = true;

console.log(nonExtendedObject.name);

nonExtendedObject.name = "John";
delete nonExtendedObject.name;

console.log(nonExtendedObject.name);
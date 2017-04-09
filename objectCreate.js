'use strict'

// Basic 
var Person = function(){};

Person.prototype.speak = function() {
    console.log('I am awesome');
};

var me = Object.create(Person.prototype);
console.log(me.speak());

var you = Object.create(Person.prototype);
console.log(you.speak());

console.log(me instanceof Person);
console.log(me instanceof Object);
console.log(Person.prototype.isPrototypeOf(me));
console.log(Object.prototype.isPrototypeOf(me));

// Inheritance 
/*var Animal = function() {
    this.type = "";
    this.hasSpine = true;
};

Animal.prototype.move = function() {
    var moveMessage = this.type ? this.type + " is moving" : "moving";
    console.log(moveMessage);
};

var Cat = function() {
    Animal.call(this);  
    this.type = "Cat";
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Animal;

Cat.prototype.speak = function() {
    console.log('Meow');
};

var aCat = new Cat();
console.log(aCat.move());
console.log(aCat.type);
console.log(aCat.speak());

var bCat = Object.create(Cat.prototype);
console.log(bCat.type);

console.log(aCat instanceof Cat);
console.log(aCat instanceof Object);
console.log(Cat.prototype.isPrototypeOf(aCat));
console.log(Object.prototype.isPrototypeOf(aCat));
console.log(bCat instanceof Cat);
console.log(bCat instanceof Object);
console.log(Cat.prototype.isPrototypeOf(bCat));
console.log(Object.prototype.isPrototypeOf(bCat));
*/

/*
var Animal = {
    type: '',
    hasSpine: true
};

var Cat = Object.create(Animal, {
    'type': { value: 'Cat' }
});

var aCat = Object.create(Cat);
console.log(aCat.type);
console.log(aCat.hasSpine);

//console.log(aCat instanceof Cat);
console.log(aCat.isPrototypeOf(Cat));*/
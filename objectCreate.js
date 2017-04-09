// Basic 
var Person = function(){};

Person.prototype.speak = function() {
    console.log('I am awesome');
};

var me = Object.create(Person.prototype);
console.log(me.speak());

var you = Object.create(Person.prototype);
console.log(you.speak());

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
console.log(bCat.type);*/

// Property Descriptors
/*
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
Animal.hasSpine = false;

console.log(Animal.type);
console.log(Animal.hasSpine);

for (var prop in Animal) 
{
    console.log(prop);
}

console.log(JSON.stringify(Animal));*/
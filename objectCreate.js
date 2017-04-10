'use strict';

/*var Animal = function() {
    this.type = '';
    this.hasSpine = true;
};

Animal.prototype.speak = function() {
    var message = this.type ? this.type + ' is speaking' : 'speaking';
    console.log(message);
};

var Cat = function() {
    Animal.call(this);
    this.type = 'Cat';
};

Cat.prototype = new Animal();
Cat.prototype.scratch = function() {
    console.log('Scratching');
};

var Dog = function() {
    Animal.call(this);
    this.type = 'Dog';
}

Dog.prototype = new Animal();
Dog.prototype.wagTail = function() {
    console.log('Wagging tail');
};

var aCat = new Cat();
aCat.speak();
aCat.scratch();
//aCat.wagTail();

var aDog = new Dog();
aDog.speak();
//aDog.scratch();
aDog.wagTail();

aDog.wagTail = function() { console.log('Der alright'); }
aDog.wagTail();*/

/*
var Animal = {
    type: '',
    hasSpine: true,
    speak: function() {
        var message = this.type ? this.type + ' is speaking' : 'speaking';
        console.log(message);
    }
};

var Cat = {
    type: 'Cat',
    scratch: function() {
        console.log('Scratching');
    }
};

var Dog = {
    type: 'Dog',
    wagTail: function() {
        console.log('Wagging tail');
    }
};

var aCat = mergeTypes(Cat, Animal);
var aDog = mergeTypes(Dog, Animal);

console.log(aCat.type);
console.log(aCat.hasSpine);
aCat.speak();
aCat.scratch();
//aCat.wagTail();

console.log(aDog.type);
console.log(aDog.hasSpine);
aDog.speak();
//aDog.scratch();
aDog.wagTail();

function mergeTypes() {
  var returnObject = {}
  
  for (var i = arguments.length-1; i>=0; i--) {
    var argObj = arguments[i];
    
    for (var propName in argObj) {
        returnObject[propName] = argObj[propName]
    } 
  }
  
  return returnObject
}*/

var Animal = Object.create({}, {
    'type': { value: ''},
    'hasSpine': { value: true },
    'speak': { value: function() {
        var message = this.type ? this.type + ' is speaking' : 'speaking';
        console.log(message);
    }}
});

var Cat = Object.create(Animal, {
    'type': { value: 'Cat' },
    'scratch': { value: function() {
        console.log('Scratching');
    }}
});

var Dog = Object.create(Animal, {
    'type': { value: 'Dog' },
    'wagTail': { value: function() {
        console.log('Wagging tail');
    }}
});

var aCat = Object.create(Cat);
var aDog = Object.create(Dog);

console.log(aCat.type);
console.log(aCat.hasSpine);
aCat.speak();
aCat.scratch();
//aCat.wagTail();

console.log(aDog.type);
console.log(aDog.hasSpine);
aDog.speak();
//aDog.scratch();
aDog.wagTail();
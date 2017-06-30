'use strict';

var Animal = Object.create({}, {
    'type': { value: '' },
    'hasSpine': { value: true },
    'speak': { value: function() {
        var message = this.type ? this.type + ' is speaking': 'speaking';
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
})

var aCat = Object.create(Cat);
var aDog = Object.create(Dog);

console.log(aCat.type);
console.log(aCat.hasSpine);
aCat.speak();
aCat.scratch();

console.log(aDog.type);
console.log(aDog.hasSpine);
aDog.speak();
aDog.wagTail();
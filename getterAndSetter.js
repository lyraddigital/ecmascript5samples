var Person = {
    get name() {
        return "Daryl";
    },
    set name(value) {
        console.log("We are changing the name to: " + value);
    },
    get age() {
        return 100;
    }
};

console.log(Person.name);
Person.name = "Michael";

console.log(Person.age);
Person.age = 54;

console.log(Person.age);

/* Prototype */
var player = { position: 'Shooting Guard' };
player.prototype = Person;

player.name = "Kobe";
console.log(player.name);

/* Object.create */
var player2 = Object.create(Person);
player2.position = 'Shooting Guard';

player2.name = "Kobe";
console.log(player2.name);
console.log(player2.age);
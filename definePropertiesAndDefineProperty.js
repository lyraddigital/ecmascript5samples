var Animal = function() {}

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
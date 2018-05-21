
// this is a constructor function
function Person(name){
    this.name = name;
}

// this is an object created from the Person constructor
var pat = new Person("Pat");

// since we used the new keyword, we have established
// a link between the object and the prototype property
// we can access using __proto__
pat.__proto__ === Person.protoype; // true

// The Person.prototype object alsa has a property
// called constructor which points back to the function
Person.protoype.constructor === Person;

// adding property to prototype transfers to all objects it constructs
Person.prototype.isInstructor = false;

// isInstructor property on constructor prototype
// is passed to the object automatically via __proto__
pat.isInstructor; // false


/////////////////
var arr = [];

new Array;

arr.push(10);

//.push is a method on the Array constructors protoype
console.dir(arr);



// length is inside the __proto__
dir(arr);

// hasOwnProperty is in the object __proto___ or __proto__.__proto__
arr.hasOwnProperty('length');  // true




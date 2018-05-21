
// Capitalize Constructor Function names!
function House(br, bath, sqft){
    this.br = br;
    this.bath = bath;
    this.sqft = sqft;
}

// the "new" keyword constructs a new object - 
// then sets 'this' to be the newly defined object - 
// then adds a 'return this' to the end of the function - 
// adds a property to empty object called "__proto__" which links to the constructor
var newHouse = new House(3,2,1400);

function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " says woof!");
    }
}

var abby = new Dog("abby", 13);

///////////////////////
// multiple constructors
//////////////////////

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Moto(make, model, year){
    Car.call(this, make, model, year)
    this.numWheels = 2;
}
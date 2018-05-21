
// this is ineffiecient
// everty time we make an object using the new keyword we have to redefine this function
// but it's the same for everyone.
function Person(name){
    this.name =name;
    this.sayHi = function(){
        return "Hi " + this.name;
    }
}

pat = new Person("Pat");

pat.sayHi(); // Hi Pat

//////////////////////////////////
// Move it to the prototype instead
/////////////////////////////////

function Person(name){
    this.name =name;
}

Person.prototype.sayHi = function(){
    return "Hi " + this.name;
}

var pat = new Person("Pat");
pat.sayHi();


/////////////////////////

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}


Vehicle.prototype.turnOff = function(){
    return this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    return this.isRunning = true;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        console.log("beep");
        return "beep"
    }
}

var mazda = new Vehicle("mazda", "protege5", 2004);

mazda.turnOn();

mazda.honk();

mazda.turnOff();

mazda.honk();
var person = {
    firstName: "Laszlo",
    sayHi: function(){
        return "Hi " + this.firstName; // will return Hi Laszlo
    },
    determineContext:function(){
        return this === person; // will return true
    },
    nestedObj:{
        sayHello: function(){
            return "Hi " + this.firstName; // will return Hi Undefined
        },
        determineContext:function(){
            return this === person; // will return false
        },
    },
}

person.nestedObj.sayHello.call(person);

//////////////
// call 
/////////////

var pat = {
    firstName: "Pat",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
}

var laszlo = {
    firstName: "Laszlo",
}

pat.sayHi.call(laszlo)


////////////////
// Apply
///////////////
var amanda = {
    firstName: "Amanda",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just calculated " + (a+b+c+d);
    },
}

var abby = {
    firstName: "Abby"
}

amanda.sayHi.apply(abby)
amanda.addNumbers.call(abby, 1, 2, 3, 4)
amanda.addNumbers.apply(abby, [1,2,3,4])

var abbyCalc = amanda.addNumbers.bind(abby, 1, 2, 3, 4);
var abbyCalc2 = amanda.addNumbers.bind(abby, 1, 2);
abbyCalc(3,4)

setTimeout(function(){
    console.log("finallllly")},
    10000
)


var wild = {
    firstName: "Amanda",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName)}.bind(this),
            1000)
    }
}

///////////////
// NEW keyword
//////////////
function Person(first, last){
    this.first = first;
    this.last = last;
}

var me = new Person("Pat", "Gerke");

console.log(me.first); // returns Pat
console.log(me.last); // returns Gerke
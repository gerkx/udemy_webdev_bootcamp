function outer(){
    var data = "closures are";
    return function inner(){
        var innerData = "awesome";
        return data + innerData;
    }
}

outer()()

////////////////
function outer(a){
    return function inner(b){
        // the inner function is making use of the variable "a"
        // which was defind in an out function called outer
        // and by the time this is called, the outer function has returned
        // this function called inner is a closure
        return a+b
    }
}

outer(5)(5)

var storeOuter = outer(5);

storeOuter(10) // 15

storeOuter(4)  // 9

storeOuter = outer(7);

storeOuter(7); // 14

///// Closures are javascript's way of creating private variables

function counter(){
    var count = 0;
    return function(){
        return ++count;
    }
}

var c = counter()

var d = counter()

/////

function classRoom(){
    var instructors = ["Colt", "Elie"]
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classRoom();
course1.getInstructors(); // [Colt, Elie]
course1.addInstructor("Ian");
course1.getInstructors(); // [Colt, Elie, Ian]

course2 = classRoom(); 
course2.getInstructors();   // [Colt, Elie]
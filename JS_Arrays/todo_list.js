var items = [];

var input = prompt("what would you like to do?");


while(input !== "quit"){
    if(input === "list"){
        listItems();
    }else if(input === "new"){
        newItem();
    }else if(input === "delete"){
        deleteItem();
        listItems();
    }
    input = prompt("what would you like to do?");
}
console.log('see you later!');


function listItems(){
    items.forEach(function(item, i){
        console.log(i + ": " + item);
    });
    console.log(items);
}

function newItem(){
    var newItem = prompt("enter new todo item");
    items.push(newItem);
}

function deleteItem(){
    var itemIndex = prompt("which item would you like to delete?");
    items.splice(itemIndex,1);
    console.log("Item removed");
}

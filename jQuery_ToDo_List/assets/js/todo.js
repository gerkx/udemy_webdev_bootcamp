// check off specific todos by clicking
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on x to delete item

$('ul').on("click", ".trash", function(event){
    $(this).parent().fadeOut(333,function(){
        $(this).remove;
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newItemText = $(this).val();
        $(this).val("");
        $("ul").append("<li> <span class='trash'><i class='fas fa-ban'></i></span> " + newItemText + "</li>");
    }
});
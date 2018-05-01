// $("div").on("click", function(){
//     $(this).fadeOut(1000, function(){
//         $(this).remove();
//     });
    
// });

$("button").on("click", function(){
    $("div").fadeToggle(1000, function(){
        // $(this).remove();
    });
    
});
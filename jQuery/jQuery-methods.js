// $("h1").text("boop");

$("img").css("width", "300px");

$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

$("img").last().attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

// $("input").val("Patrick Gerke");

// $("select").val();

// $("h1").addClass("right");


// $("h1").removeClass("right");

// // $("li").addClass("wrong");

// $("li").first().toggleClass("done");

$("li").click(function(){
    $(this).toggleClass("done");
});

$("h1").keypress(function(){
    $(this).toggleClass("wrong");
});
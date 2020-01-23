// Guided Practice
$(".replyYes").click(function() { 
    $(".homers-reply").text("i don't know");
    $("body").css("background-color","yellow");
    
});

//Independent Practice
$(".replyNo").click(function() {  
   $(".homers-reply").text("doh!");
   $("body").css("background-color","blue");
   $("img").attr("src","https://media2.giphy.com/media/3o7buiJfXfodnRuaNW/source.gif");
});


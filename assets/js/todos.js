// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
    //if li is gray
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     //turn it black
    //     $(this).css({
    //         color: "black",
    //         textDecoraction: "none"
    //         });
    // }
    // //else
    // else{
    //     //turn to gray
    //     $(this).css({
    //     color: "gray",
    //     textDecoraction: "line-through"
    //     });
    // }  
});

//click on X to Delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("h1").click(function(){
    $("input").toggleClass("input");
    $("input").keypress(function(event){
        if(event.which === 13){
            // grabbing the new todo text from input
            var text = $(this).val();
            $(this).val("");
            //creating a new li and add to ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + text + "</li>");
        }
    });
});
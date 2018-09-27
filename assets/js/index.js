// Check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(function(){
        500,
        $(this).remove()
    });
    e.stopPropagation();
})

// Input stuff
$("input[type='text']").keypress(function(e){
    if(e.which === 13) {
        // Taking new to-do from input
        var todoText = $(this).val()
        $(this).val("")
        // Create new Aly
        $("ul")
            .append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
    }
});

// Plus show hide input
$("#plus").on("click", function(){
    $("input[type='text']").fadeToggle()
})

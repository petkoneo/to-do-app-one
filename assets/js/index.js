// Check off todos by clicking
$("li").on("click", function(){
    $(this).toggleClass("completed")
});

// Click on X to delete todo
$("span").on("click", function(){
    alert("clicked on span")
})

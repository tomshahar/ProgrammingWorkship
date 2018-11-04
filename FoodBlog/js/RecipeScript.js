$(".recipe-wrapper").mouseenter(function() {
  $(this).find(".recipe-bottom-bar").css("height", "10vh");
  $(this).find(".recipe-bottom-bar").find(".recipe-title").css("text-decoration", "underline");
})
$(".recipe-wrapper").mouseleave(function() {
  $(this).find(".recipe-bottom-bar").css("height", "8vh");
  $(this).find(".recipe-bottom-bar").find(".recipe-title").css("text-decoration", "none");
})
$(".recipe-wrapper").click(function() {
  var thisElem = $(this);
  $(".recipes-container").slideUp(350, function() {
    var recipeToOpen = "#" + thisElem.find(".recipe-invis-link").html();
    $(recipeToOpen).slideDown(350);
  });
})

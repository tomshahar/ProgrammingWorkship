$(".box").mouseenter(function() {
  $(this).find(".box-hover-wrapper").css("top", "0");
  $(this).find(".box-hover-title").css("transform", "translateY(0)");
  $(this).find(".box-hover-text").css("transform", "translateY(0)");
})
$(".box").mouseleave(function() {
  $(this).find(".box-hover-wrapper").css("top", "100%");
  $(this).find(".box-hover-title").css("transform", "translateY(50vh)");
  $(this).find(".box-hover-text").css("transform", "translateY(80vh)");
})
$(".home-left-wrapper").mouseenter(function() {
  $(this).find(".box-hover-wrapper").css("top", "0");
  $(this).find(".box-hover-title").css("transform", "translateY(0)");
  $(this).find(".box-hover-text").css("transform", "translateY(0)");
})
$(".home-left-wrapper").mouseleave(function() {
  $(this).find(".box-hover-wrapper").css("top", "100%");
  $(this).find(".box-hover-title").css("transform", "translateY(50vh)");
  $(this).find(".box-hover-text").css("transform", "translateY(80vh)");
})

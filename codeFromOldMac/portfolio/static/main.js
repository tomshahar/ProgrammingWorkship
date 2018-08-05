$("#portfolio__btn").click(function() {
  $(".main-title__container").slideUp(200);
  $(".main-btn__container").slideUp(200);
  $(".food-link__wrapper").slideUp(200, function() {
    window.open("static/portfolio.html", "_self", false);
  });

})
function indexOnload() {
  $(".main-title__container").slideDown(200);
  $(".main-btn__container").slideDown(200);
  $(".food-link__wrapper").slideDown(200);
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top 
    }, 500);
});

$(".page-back__btn").click(function() {
  $(this).slideUp(200);
  $(".section-btn__container").slideUp(200);
  $(".site-wrapper").slideUp(200);

  $(".portfolio-header").slideUp(200, function() {
    window.open("/Users/apguest/Documents/code/portfolio/index.html", "_self", false);
  });


})
function portfolioOnload() {
  $(".page-back__btn").slideDown(200);
  $(".section-btn__container").slideDown(200);
  $(".portfolio-header").slideDown(200);
  $(".site-wrapper").slideDown(200);

}

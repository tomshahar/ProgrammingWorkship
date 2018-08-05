$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 90
    }, 500);
});

$("#recipe1").click(function() {
  $(".recipe-container").fadeOut("fast", function() {
    $("body").css("background-color", "white");
    $("#recipe-page1").css("display", "block");
  });
});
$(".page-link").click(function() {
  $(".page-link").not(this).css("color", "var(--black-text)");
  $(this).css("color", "var(--pink-main)");
});
$(".page-back__btn").click(function() {
  $(this).closest(".recipe-page").fadeOut("fast", function() {
    $(".recipe-container").fadeIn();
  });
});

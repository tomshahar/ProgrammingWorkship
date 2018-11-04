$(".logo").click(function() {
  window.open("index.html", "_self");
})
$("#nav__btn--contact").click(function() {
  $("#contact-section").fadeIn(100);
  $("#contact-section").css("width", "20vw");
  $("#nav__btn--contact--close ").fadeIn(300);

})
$("#nav__btn--contact--close").click(function() {
  $("#contact-section").fadeOut(100);
  $("#contact-section").css("width", "0");
  $("#nav__btn--contact--close ").fadeOut(100);
})

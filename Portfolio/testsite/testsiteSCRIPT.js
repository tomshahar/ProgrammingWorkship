window.onscroll = function() {initialize_scroll()};
function initialize_scroll() {
  var block_1 = $('#block_1');
  var block_2 = $('#block_2');
  var block_3 = $('#block_3');
  var content_1 = $('#content_1');
  var content_2 = $('#content_2');
  var content_3 = $('#content_3');
  var vp_bottom = $(window).scrollTop() + $(window).height();
  console.log(vp_bottom);
  console.log(block_1.offsetTop);
  if (vp_bottom > block_1.offsetTop && vp_bottom < block_2.offsetTop) {

  }
}

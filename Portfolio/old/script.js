window.onscroll = function() {checkScroll()};

function checkScroll() {
  var molergroup__start  = document.getElementById('molergroup--container').offsetTop - 100;
  if (window.pageYOffset >= molergroup__start) {
    console.log("scroll");
    document.getElementById('fixed--navbar').style.color = "var(--blue__text)";
    document.getElementById('scroll--container').setAttribute("style", "background-color: var(--white__background)");
    document.getElementById('fixed--shapes__front').setAttribute("style", "background-color: #A0A8AA");
    document.getElementById('fixed--shapes__back').setAttribute("style", "background-color: #BEC6C8");


  } else {
    document.getElementById('fixed--navbar').style.color = "var(--white__text)";
    document.getElementById('scroll--container').setAttribute("style", "background-color: var(--blue__background)");
    document.getElementById('fixed--shapes__front').setAttribute("style", "background-color: #626E74");
    document.getElementById('fixed--shapes__back').setAttribute("style", "background-color: #445056");


  }
  if (window.pageYOffset >= document.getElementById('fixed--shapes').offsetTop) {
    console.log("scroll2");

  } else {
  }
}

window.onscroll = function() {checkScroll()};
function checkScroll() {
  var molergroup__start  = document.getElementById('moler__group').offsetTop - 100;
  var nuevasoccer__start  = document.getElementById('nueva__soccer').offsetTop - 100;
  var contact__start = document.getElementById('contact__section').offsetTop - 100;
  console.log(contact__start);
  var molergroup__window  = document.getElementById('moler__group--window');
  var moler__group__title = document.getElementById('moler__group--title__container');
  var nuevasoccer__window  = document.getElementById('nueva__soccer--window');
  var nuevasoccer__title = document.getElementById('nueva__soccer--title__container');
  var scroll__container = document.getElementById('scroll__container');
  var buttons = document.getElementsByClassName('nav__button');
  var moler__group__title = document.getElementById('moler__group--title__container');
  var graphic__back = document.getElementById('graphic--fore');
  var bar__pink = document.getElementById('slide__right--pink');
  var bar__blue = document.getElementById('slide__right--blue');
  var menu__button = document.getElementById('menu__button--graphic');



  /*bars slide*/
  if (window.pageYOffset >= molergroup__start + 100) {
    bar__pink.setAttribute("style", "width: 100vw;");


  } else if (window.pageYOffset < molergroup__start + 100) {
    bar__pink.setAttribute("style", "width: 0vw;");

  }
  if (window.pageYOffset >= nuevasoccer__start + 100) {


  }
  if (window.pageYOffset >= molergroup__start - 300){
    moler__group__title.setAttribute("style", "transform: translateX(10vw);" );
    molergroup__window.setAttribute("style", "transform: translateX(0)" );
    graphic__back.setAttribute("style", "background-color: var(--pink__muted)");

  } else if (window.pageYOffset < molergroup__start - 300) {
    moler__group__title.setAttribute("style", "transform: translateX(-60vw;)");
    molergroup__window.setAttribute("style", "transform: translateX(50vw)");
    graphic__back.setAttribute("style", "background-color: var(--dark__graphic)");
  }

  if (window.pageYOffset >= nuevasoccer__start - 300){
    moler__group__title.setAttribute("style", "transform: translateX(-60vw;)");
    molergroup__window.setAttribute("style", "transform: translateX(50vw)");
    graphic__back.setAttribute("style", "background-color: var(--blue__muted)");
    nuevasoccer__window.setAttribute("style", "transform: translateX(0)");
    nuevasoccer__title.setAttribute("style", "transform: translateX(10vw)");
    bar__blue.setAttribute("style", "width: 100vw;");

  } else if (window.pageYOffset < nuevasoccer__start - 300) {
    nuevasoccer__window.setAttribute("style", "transform: translateX(50vw)");
    nuevasoccer__title.setAttribute("style", "transform: translateX(-60vw)");
    bar__blue.setAttribute("style", "width: 0vw;");

  }
  /*buttons toggle*/
  if (window.pageYOffset >= molergroup__start + 50) {
    menu__button.setAttribute("style", "background-color: var(--blue__text)");
    for (button in buttons) {
      buttons[button].setAttribute("style", "color: var(--blue__text)");
    }
  } else if (window.pageYOffset < molergroup__start + 50){
    menu__button.setAttribute("style", "background-color: var(--white__text)");
    for (button in buttons) {
      buttons[button].setAttribute("style", "color: var(--white__text)");
    }
  }
  /* graphic fadeout*/





}
function moler__onclick() {
  var slide__right__button = document.getElementById('slide__right--pink--button');
  slide__right__button.setAttribute("style", "width: 100%;")
  console.log("scoob");
  setTimeout(moler__onclick__2, 300);
}
function moler__onclick__2() {
  var slide__right__button = document.getElementById('slide__right--pink--button');
  slide__right__button.setAttribute("style", "float:right; width: 0;")
}
function nueva__onclick() {
  var slide__right__button = document.getElementById('slide__right--blue--button');
  slide__right__button.setAttribute("style", "width: 100%;")
  console.log("scoob");
  setTimeout(nueva__onclick__2, 300);
}
function nueva__onclick__2() {
  var slide__right__button = document.getElementById('slide__right--blue--button');
  slide__right__button.setAttribute("style", "float:right; width: 0;")
}
function menu__button() {
  var fullscreen__menu = document.getElementById('fullscreen__menu');
  var menu__button = document.getElementById('menu__button--graphic');
  var moler__group__title = document.getElementById('moler__group--title__container');
  var nuevasoccer__title = document.getElementById('nueva__soccer--title__container');
  nuevasoccer__title.setAttribute("style", "transform: translateX(-60vw)");
  moler__group__title.setAttribute("style", "transform: translateX(-60vw;)");
  fullscreen__menu.classList.toggle("expanded");
  menu__button.classList.toggle("menu__button--graphic--rotated");

}
function onload(){
  var curtain = document.getElementById('curtain');
  curtain.setAttribute("style", "height: 100vh");
  setTimeout(onload__2, 310, curtain);


}
function onload__2(elem) {
  elem.setAttribute("style", "top: auto; bottom: 0; height: 0;")
  var title = document.getElementById('aboutme__title');
  title.setAttribute("style", "transform: translateX(10vw);" );

}

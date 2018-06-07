window.onscroll = function() {checkScroll()};
function checkScroll() {
  scroll__percent();

  var molergroup__start  = document.getElementById('moler__group').offsetTop - 100;
  var nuevasoccer__start  = document.getElementById('nueva__soccer').offsetTop - 100;
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
      try {
        buttons[button].setAttribute("style", "color: var(--blue__text)");
      }
      catch(err) {
        return;
      }
    }
  } else if (window.pageYOffset < molergroup__start + 50){
    menu__button.setAttribute("style", "background-color: var(--white__text)");
    for (button in buttons) {
      try {
        buttons[button].setAttribute("style", "color: var(--white__text)");
      }
      catch(err) {
        return;
      }
    }
  }

}
function scroll__percent(){
  var lengthener__start = document.getElementById('bottom__lengthener').offsetTop;
  var vp__bottom = $(window).scrollTop() + $(window).height()
  var graphic__container = document.getElementById('graphic--container');
  var nueva__soccer__section = $('#nueva__soccer');
  var nuevasoccer__window  = $('#nueva__soccer--window');
  var nuevasoccer__title = $('#nueva__soccer--title__container');


  if (vp__bottom > lengthener__start) {
    contact__expand(vp__bottom);
    $('#nueva__soccer').css("position", "fixed");
    $('#nueva__soccer').css("bottom", "0");
    $('#nueva__soccer').css("background-color", "rgb(0,0,0,0)");
    $('#placeholder').css("height", "100vh");

  } else if (vp__bottom < lengthener__start) {
    $('#nueva__soccer').css("position", "static");
    $('#nueva__soccer').css("bottom", "auto");
    $('#placeholder').css("height", "0vh");
    $('#slide__right--green').css("width", "0vw");
  }
}
function contact__expand(vp__bottom) {
  var lengthener = document.getElementById('bottom__lengthener');
  var d__from__lengthener__top = vp__bottom - lengthener.offsetTop;
  var percentage__calculator = d__from__lengthener__top * 100;
  var lengthener__height = $('#bottom__lengthener').height();
  var lengthener__percent =  percentage__calculator / lengthener__height;
  var lengthener__percent__div2 = lengthener__percent / 1.8;
  var lengthener__percent__string = lengthener__percent__div2.toString();
  var lengthener__percent__string__with__symbol = lengthener__percent__string+"%";
  $('#contact__section').css("height", lengthener__percent__string__with__symbol);
  var lengthener__percent__topbar =  percentage__calculator / lengthener__height;
  var lengthener__percent__topbar__string = lengthener__percent__topbar.toString();
  var lengthener__percent__topbar__string__with__symbol = lengthener__percent__topbar__string+"%"
  console.log(lengthener__percent__topbar__string__with__symbol);
  $('#slide__right--green').css("width", lengthener__percent__topbar__string__with__symbol);
  var lengthener__percent__opacity__0to1 = lengthener__percent__topbar / 100;
  var lengthener__percent__opacity__0to1__inverted = 1 - lengthener__percent__opacity__0to1;
  var lengthener__percent__opacity__0to1__inverted__rounded = Math.round(100*lengthener__percent__opacity__0to1__inverted)/100;
  var lengthener__percent__opacity__0to1__inverted__string = lengthener__percent__opacity__0to1__inverted__rounded.toString();
  $('#nueva__soccer--title__container').css("opacity", lengthener__percent__opacity__0to1__inverted__string);
  $('#nueva__soccer--window').css("opacity", lengthener__percent__opacity__0to1__inverted__string);
  console.log(lengthener__percent__opacity__0to1__inverted__string);
  console.log($('#nueva__soccer--window').css("opacity"));
  /*$('#nueva__soccer').css("filter", "grayscale("+lengthener__percent__greyout__tring__with__symbol+")")*/
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
var menu__opened = 1;
function menu__button() {
  menu__opened = menu__opened * -1;
  var fullscreen__menu = document.getElementById('fullscreen__menu');
  var menu__button = document.getElementById('menu__button--graphic');
  var moler__group__title = document.getElementById('moler__group--title__container');
  var nuevasoccer__title = document.getElementById('nueva__soccer--title__container');
  var scroll__container = document.getElementById('scroll__container');
  nuevasoccer__title.setAttribute("style", "transform: translateX(-60vw)");
  moler__group__title.setAttribute("style", "transform: translateX(-60vw;)");
  fullscreen__menu.classList.toggle("expanded");
  menu__button.classList.toggle("menu__button--graphic--rotated");
  scroll__container.setAttribute("style", "");
  if (menu__opened == 1) {
    window.onscroll = function(){checkScroll()};
  } else if (menu__opened == -1) {
    window.onscroll = function(){blank()};
  }

}
function blank(){}
function onload(){
  var curtain = document.getElementById('curtain');
  curtain.setAttribute("style", "height: 100vh");
  setTimeout(onload__2, 310, curtain);


}
function onload__2(elem) {
  elem.setAttribute("style", "top: auto; bottom: 0; height: 0;");

}

function scrollpercent() {
    var pixelheight = window.pageYOffset + window.innerHeight - document.getElementById('contact__section').offsetTop
    var vhheight = pixelheight * 100 / window.innerHeight
    console.log(vhheight);
    start__contact__scroll(vhheight);
}
function start__contact__scroll(vhheight) {
  document.getElementById('contact__section').style.height = vhheight;
}

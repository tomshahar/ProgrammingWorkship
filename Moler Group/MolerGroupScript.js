/*function menu__minimize() {
  console.log("minimize");
  if ($(window).innerWidth() < 750) {
    var menubar = document.getElementById('menubar');
    var menubar__height = menubar.style.height;
    var closed;
    console.log(menubar__height);
    if (menubar__height > 1) {
      closed = false;

    } else if (menubar__height <1) {
      closed = true;

    }
    console.log(closed);
    if (closed===false) {
      console.log("this ran1")
      var closebutton = document.getElementById('close__button');
      var menubar = document.getElementById('menubar');
      var button__container = document.getElementById('button__container');
      closebutton.setAttribute("style", "transform: rotate(180deg)");

        var x = document.getElementsByClassName("button");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }

        menubar.style.height="18vh";
        button__container.style.height="0";
        console.log("run")
        console.log(closed);
        closed = true;
        console.log(closed);
    } else if (closed===true) {

        console.log("this ran")
        var closebutton = document.getElementById('close__button');
        var menubar = document.getElementById('menubar');
        var button__container = document.getElementById('button__container');
        closebutton.setAttribute("style", "transform: rotate(360deg)");
        menubar.style.height="61vh";
        button__container.style.height="42vh";
          var x = document.getElementsByClassName("button");
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "flex";
          }
          closed = false;
      }
  }
}*/

function menu__minimize() {
  var closebutton = document.getElementById('close__button');
  var menubar = document.getElementById('menubar');
  var button__container = document.getElementById('button__container');
  var x = document.getElementsByClassName("button");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("button--toggle");
  }
  closebutton.classList.toggle("minimize__button--toggle");
  menubar.classList.toggle("menubar--toggle");
  button__container.classList.toggle("button__container--toggle");
  setTimeout(minimize__menubar, 300);


}
function minimize__menubar() {

}



function show__content__1() {
  menu__minimize()
  var content1 = document.getElementById('content__1')
  var content2 = document.getElementById('content__2')
  var content3 = document.getElementById('content__3')
  var content4 = document.getElementById('content__4')
  var content5 = document.getElementById('content__5')
  var content6 = document.getElementById('content__6')
  var subtitle = document.getElementById('subtitle')
  subtitle.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content1.style.display = "block";
  content4.style.display = "none";
  content5.style.display = "none";
  content6.style.display = "none";
}
function show__content__2() {
  menu__minimize()
  var content1 = document.getElementById('content__1')
  var content2 = document.getElementById('content__2')
  var content3 = document.getElementById('content__3')
  var content4 = document.getElementById('content__4')
  var content5 = document.getElementById('content__5')
  var content6 = document.getElementById('content__6')
  subtitle.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  content1.style.display = "none";
  content4.style.display = "none";
  content5.style.display = "none";
  content6.style.display = "none";
}
function show__content__3() {
  menu__minimize()
  var content1 = document.getElementById('content__1')
  var content2 = document.getElementById('content__2')
  var content3 = document.getElementById('content__3')
  var content4 = document.getElementById('content__4')
  var content5 = document.getElementById('content__5')
  var content6 = document.getElementById('content__6')
  subtitle.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
  content1.style.display = "none";
  content4.style.display = "none";
  content5.style.display = "none";
  content6.style.display = "none";
}
function show__content__4() {
  menu__minimize()
  var content1 = document.getElementById('content__1')
  var content2 = document.getElementById('content__2')
  var content3 = document.getElementById('content__3')
  var content4 = document.getElementById('content__4')
  var content5 = document.getElementById('content__5')
  var content6 = document.getElementById('content__6')
  subtitle.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content1.style.display = "none";
  content4.style.display = "block";
  content5.style.display = "none";
  content6.style.display = "none";
}
function show__content__5() {
  menu__minimize()
  var content1 = document.getElementById('content__1')
  var content2 = document.getElementById('content__2')
  var content3 = document.getElementById('content__3')
  var content4 = document.getElementById('content__4')
  var content5 = document.getElementById('content__5')
  var content6 = document.getElementById('content__6')
  subtitle.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content1.style.display = "none";
  content4.style.display = "none";
  content5.style.display = "block";
  content6.style.display = "none";
}
function show__content__6() {
  menu__minimize()
  var content1 = document.getElementById('content__1')
  var content2 = document.getElementById('content__2')
  var content3 = document.getElementById('content__3')
  var content4 = document.getElementById('content__4')
  var content5 = document.getElementById('content__5')
  var content6 = document.getElementById('content__6')
  subtitle.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content1.style.display = "none";
  content4.style.display = "none";
  content5.style.display = "none";
  content6.style.display = "block";
}
function home__button() {
  var content1 = document.getElementById('content__1')
  var content2 = document.getElementById('content__2')
  var content3 = document.getElementById('content__3')
  var content4 = document.getElementById('content__4')
  var content5 = document.getElementById('content__5')
  var content6 = document.getElementById('content__6')
  subtitle.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content1.style.display = "none";
  content4.style.display = "none";
  content5.style.display = "none";
  content6.style.display = "none";
  var closebutton = document.getElementById('close__button');
  var menubar = document.getElementById('menubar');
  var button__container = document.getElementById('button__container');
  var x = document.getElementsByClassName("button");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("button--toggle");
  }
  closebutton.classList.toggle("minimize__button--toggle");
  menubar.classList.toggle("menubar--toggle");
  button__container.classList.toggle("button__container--toggle");
}

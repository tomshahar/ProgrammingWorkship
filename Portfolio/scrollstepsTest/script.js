
/*var animating = false;

function animatingCountdown() {
	animating = false;
}
window.onscroll = function(e) {
  console.log("does this run?");

	/*set animating to false after animation duration*/
	/*setTimeout(animatingCountdown, 5000);
  console.log("when the scroll first starts"+animating);/*

	/*check to see if scrolling up*/
	/*var scrollUp = (this.oldScroll > this.scrollY);
  console.log("when scrollUp is calculated"+scrollUp);
	this.oldScroll = this.scrollY;/*

	/*If there is not a current animation, start one*/
	/*if (animating == false) {
    console.log("scroll starting");
		scroll(scrollUp);
    animating = true;
	}



}

function scroll(scrollUp) {
	var t1Pos = $(“#t1”).offsetTop;
	var t2Pos = $(“t2”).offsetTop;
	var t3Pos = $(“t2”).offsetTop;
	var section = 1;*/

	/*Scrollingdown*/
	/*if (section == 1 && scrollUp == false) {
		window.scrollTo({
   			top: t2Pos,
    			behavior: "smooth"
		});
		section = 2;
		return;
	} else if (section == 2 && scrollUp == false) {
		window.scrollTo({
   			top: t3Pos,
    			behavior: "smooth"
		});
		section = 3;
		return;*/

    /*scrolling up*/
	/*} else if (section ==  3 && scrollUp == true) {
		window.scrollTo({
   			top: t2Pos,
    			behavior: "smooth"
		});
		section = 2;
		return;
	} else if (section ==  2 && scrollUp == true) {
		window.scrollTo({
   			top: t1Pos,
    			behavior: "smooth"
		});
		section = 1;
		return;*/
	}
}
/*FAILED*/
/*
body = $("#body");
body.attr("onscroll", "onscroll2()");
function onscroll2(e){
  body = $("#body");
  body.attr("onscroll", "func()");
  var scrollingDown = (this.oldScroll < this.scrollY);
  console.log(scrollingDown);
  var viewport__height = window.innerHeight;
	var viewport__height__negative = 0 - viewport__height;
  var t1 = document.getElementById("t1");
  var t2 = document.getElementById("t2");
  var t3 = document.getElementById("t3");

	if (scrollingDown == true && section == 1) {
      console.log("down to section 2");
      t2.setAttribute("style", "display: block");
      t1.setAttribute("style", "display: none");
      t3.setAttribute("style", "display: none");
      section2();

	} else if (scrollingDown == false && section == 1) {
	} else if (scrollingDown == true && section == 2) {
      t3.setAttribute("style", "display: block");
      t1.setAttribute("style", "display: none");
      t2.setAttribute("style", "display: none");
      section3();


  } else if (scrollingDown == false && section == 2) {
      t1.setAttribute("style", "display: block");
      t3.setAttribute("style", "display: none");
      t2.setAttribute("style", "display: none");
      section1();

  } else if (scrollingDown == true && section == 3) {
  } else if (scrollingDown == false && section == 3) {
      t2.setAttribute("style", "display: block");
      t3.setAttribute("style", "display: none");
      t1.setAttribute("style", "display: none");
      setTimeout(section2, 1000);
      section2();

  }
  this.oldScroll = this.scrollY;
}





function func() {
  console.log("func");
}


function section2() {
  body = $("#body");
  body.attr("onscroll", "onscroll()");
  section = 2;
  console.log("section2");
}
function section1() {
  body = $("#body");
  body.attr("onscroll", "onscroll()");
  section = 1;
  console.log("section1");
}
function section3() {
  body = $("#body");
  body.attr("onscroll", "onscroll()");
  section = 3;
  console.log("section3");
}



var scrollableElement = document.getElementById('body');
scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

function findScrollDirectionOtherBrowsers(event){
  var scrollingDown;
  var delta;
  if (event.wheelDelta) {
    delta = event.wheelDelta;
  } else {
    delta = -1 *event.deltaY;
  }
  if (delta < 0) {
    scrollingDown = true;

  } else if (delta > 0) {
    scrollingDown = false;

  }
  return scrollingDown;
}
var section = 1;
function onscroll() {
  body = $("#body");
  body.attr("onscroll", "func()");
	var viewport__height = window.innerHeight;
	var viewport__height__negative = 0 - viewport__height;
  var scrollingDown = findScrollDirectionOtherBrowsers();
  var t1 = document.getElementById("t1");
  var t2 = document.getElementById("t2");
  var t3 = document.getElementById("t3");

  console.log(scrollingDown);
	if (scrollingDown == true && section == 1) {
      console.log("down to section 2");
      t2.setAttribute("style", "position: fixed; top: 0");
      setTimeout(section2, 1000);

	} else if (scrollingDown == false && section == 1) {
	} else if (scrollingDown == true && section == 2) {
      t3.setAttribute("style", "position: fixed; top: 0");
      setTimeout(section3, 1000);

  } else if (scrollingDown == false && section == 2) {
      t2.setAttribute("style", "position: fixed; top: 100vh");
      setTimeout(section1, 1000);

  } else if (scrollingDown == true && section == 3) {
  } else if (scrollingDown == false && section == 3) {
      t3.setAttribute("style", "position: fixed; top: 200vh");
      setTimeout(section2, 1000);

  }
}

*/

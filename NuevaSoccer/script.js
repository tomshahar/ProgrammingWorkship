function onload() {
  setTimeout(onload__2, 3000);
}
function onload__2() {
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  transition.style.display = "none";
  announcements.style.display = "flex";
  announcements.style.opacity = "1";

}

/*announcements__button*/
function announcements__button() {
  console.log("ran1");
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  announcements.style.opacity = "0";
  schedule.style.opacity = "0";
  roster.style.opacity = "0";
  setTimeout(announcements__button__2, 1000);
}
function announcements__button__2() {
  console.log("ran2");
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  schedule.style.display = "none";
  roster.style.display = "none";
  transition.style.display = "flex";
  setTimeout(announcements__button__3, 3000);
}
function announcements__button__3() {
  console.log("ran3");
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  transition.style.display = "none";
  announcements.style.display = "flex";
  announcements.style.opacity = "1";
}
/*roster__button*/
function roster__button() {
  console.log("ran1");
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  announcements.style.opacity = "0";
  schedule.style.opacity = "0";
  roster.style.opacity = "0";

  setTimeout(roster__button__2, 1000);
}
function roster__button__2() {
  console.log("ran2");
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  schedule.style.display = "none";
  announcements.style.display = "none";
  transition.style.display = "flex";
  setTimeout(roster__button__3, 3000);
}
function roster__button__3() {
  console.log("ran3");
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  transition.style.display = "none";
  roster.style.display = "flex";
  roster.style.opacity = "1";
}
/*schedule__button*/
function schedule__button() {
  console.log("ran1");
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  announcements.style.opacity = "0";
  schedule.style.opacity = "0";
  roster.style.opacity = "0";

  setTimeout(schedule__button__2, 1000);
}
function schedule__button__2() {
  console.log("ran2");
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  roster.style.display = "none";
  announcements.style.display = "none";
  transition.style.display = "flex";
  setTimeout(schedule__button__3, 3000);
}
function schedule__button__3() {
  console.log("ran3");
  var announcements = document.getElementById('announcements__container');
  var schedule = document.getElementById('schedule__container');
  var roster = document.getElementById('roster__container');
  var transition = document.getElementById('transition__container');
  transition.style.display = "none";
  schedule.style.display = "block";
  schedule.style.opacity = "1";
}
/*Announcement Interface*/
function announcement__interface() {
  console.log("button");
  var announcement__button = document.getElementById('announcement__button');
  var title__input = document.getElementById('title__input');
  var save__button = document.getElementById('save__button');
  var content__input = document.getElementById('content__input');
  var date__input = document.getElementById('date__input');
  announcement__button.style.width="90%";
  date__input.style.display="block";
  title__input.style.display="block";
  save__button.style.display="block";
  content__input.style.display="block";
  announcement__button.setAttribute( "onClick", "javascript: none()" );



  /*announcement__button.classList.toggle("button--toggleon");
  date__input.classList.toggle("new__announcement--toggleon");
  title__input.classList.toggle("new__announcement--toggleon");
  content__input.classList.toggle("new__announcement--toggleon");*/

}
function save__announcement() {
  console.log("save button");
  var announcement__button = document.getElementById('announcement__button');
  var title__input = document.getElementById('title__input');
  var save__button = document.getElementById('save__button');
  var content__input = document.getElementById('content__input');
  var date__input = document.getElementById('date__input');
  var title__value = title__input.value;
  var content__value = content__input.value;
  var date__value = date__input.value;
  var new__announcement = [title__value, content__value, date__value];
  date__input.style.display="none";
  title__input.style.display="none";
  save__button.style.display="none";
  content__input.style.display="none";
  announcement__button.style.width="14vw";
  setTimeout(reactivate, 100);
  announcements__button();
  innerTEST();
  setTimeout(function() {update__announcements(new__announcement);}, 1000);
}
function reactivate() {
  announcement__button.setAttribute( "onClick", "javascript: announcement__interface()" );
}

function none() {
  console.log("nothing");
}
function innerTEST() {
  var cards = document.getElementById('cards--SAVE');
  var inner = cards.innerHTML;
  console.log(inner);
}


/*


Basic Format for the announcement
announcements = [[title, content, date], [], [],

]
*/
function update__announcements(new__announcement) {
  var announcements = [new__announcement];
  for (i = 0; i < announcements.length; i++) {
    announcement = announcements[i];
    title = announcement[0];
    content = announcement[1];
    date = announcement[2];
    var inner =
      '<div class="announcements--card"><div class = "announcements--card__separator__wrapper"><div class = "announcements--card__separator"></div><div class = "announcements--card__title"><div>'
      +title+
      '</div></div><div class = "announcements--card__content">'
      +content+
      '</div><div class = "announcements--card__footer"><div class = "announcements--card__date">'
      +date+
      '</div></div></div>'
    document.getElementById('cards--SAVE').insertAdjacentHTML('afterbegin', inner);

  }


}
/*
  <div class="announcements--card">
    <div class = "announcements--card__separator__wrapper">
      <div class = "announcements--card__separator">
      </div>
    </div>
    <div class = "announcements--card__title">
      <div>Welcome to the Nueva Soccer website!</div>
    </div>
    <div class = "announcements--card__content">
      The website will be used to post announcements, scores, schedule changes, administrative details, etc.
      This is not a replacement for emails, so don't start ignoring those.
      You can also use it to find information on the rosters, such as jersey numbers and stats. Field locations and opponents
      will be posted under schedule. If you have any ideas for the website, talk to Tom.
    </div>
    <div class = "announcements--card__footer">
      <div class = "announcements--card__date">4/9/2018</div>
    </div>
  </div>
  */

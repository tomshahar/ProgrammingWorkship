/*document.getElementById('pre__loadin').onscroll = function() {
  console.log("scrolling");
};
*/

  /* from 0-100px arrow wrapper and title container are translated down 100px, with the scroll;
  after 100px they are translated upvery quickly and pre__loadin is set to display none
  while main__loadin is set to display block*/
  /*
  const instances = []
  instances.push(basicScroll.create({
  	elem: document.querySelector('.test'),
  	from: '100vh',
  	to: '150vh',
  	props: {
  		'--opacity': {
  			from: .01,
  			to: .99
  		}
  	}
  }))
  instance.start()
  */
function testScroll(ev){
    if(window.pageYOffset>1)loadin__start();
}
window.onscroll=testScroll

function loadin__start(){
  console.log("working");
  document.getElementById('pre__loadin').style.opacity = "0";

  /*document.getElementById('title__wrap').style.opacity = "0";*/
  document.getElementById('title__wrap').setAttribute('style', 'transform: scale(5,5); opacity: 0');
  document.getElementById('arrow__wrapper').setAttribute('style', 'padding-top: 0vh');
  document.getElementById('main__loadin').style.display = "block";


  setTimeout(loadin__start__2, 1000);
}

function loadin__start__2(){
  console.log("huh");
  document.getElementById('pre__loadin').style.left = "100vh";
  document.getElementById('arrow__wrapper').setAttribute('style', 'display: none');
  document.getElementById('pre__loadin').setAttribute('style', 'opacity: 0.01');
  /*document.getElementById('pre__loadin').setAttribute('style', 'background-attachment: scroll; transform: scale(0.1);');*/

  setTimeout(loadin__start__3, 1000);
}
function loadin__start__3(){
  document.getElementById('pre__loadin').style.display = "none";
  document.getElementById('main__loadin').style.opacity = "1";
}





/*


*/

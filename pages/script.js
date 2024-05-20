const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('clicked');
  overlay.classList.toggle('activeoverlay');
  if(hamburger.classList.contains('clicked')){
	gsap.fromTo('.dropcontainer1',{ y: 0},{ y: 750 ,duration: 0.5})
	gsap.fromTo('.dropcontainer2',{ x: 0},{ x: -400 ,duration: 0.5})
  }else{
	gsap.fromTo('.dropcontainer1',{ y: 750 ,duration: 0.5},{ y: 0})
	gsap.fromTo('.dropcontainer2',{ x: -400 ,duration: 0.5},{ x: 0})
  }
});
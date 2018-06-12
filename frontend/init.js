var random = Math.floor(Math.random() * 4) + 1;


init();
function init() {
  //PAGE INIT
  hoPg.style.transition = "3s linear";
  hoPg.style.transform = "rotateY(180deg)";
  hoPg.style.transitionDelay = "2s";
  hoPg.style.opacity = "1";
  

  //MANDALA INIT
  centerWheel.animate({
    transform: 'r180,' + ',' + 0 + ',' + 0,
  }, 2000);

  redCircle.animate({
    transform: 'r -90,' + ',' + 0 + ',' + 0,
  }, 2500);

  check.animate({
    transform: 'r -90,' + ',' + 0 + ',' + 0,
  }, 2500);
  
  s.animate({
    transform: 'r' + 90 * random + ', 0 , 0'
  }, 1000);

  // s.animate({
  //   fill: 'green'
  // },1000);

  s.select('#redWheel').animate({
    fill: '#ED1E25'
  }, 2000);

  s.select('#centerWheel').animate({
    fill: '#E75A24'
  }, 2000);

  s.select('#_x38_circles').animate({
    fill: '#515151'
  }, 2000);

  s.select('#big').animate({
    fill: '#7FC242',
    stroke: '#4EEB6F',
    strokeDashoffset: 10
  }, 2000);

  s.select('#smallCircles').animate({
    fill: 'white'
  }, 2000);

  s.select('#smallCirclesLower').animate({
    fill: '#231F20',
    stroke: '#76C4EE',
    strokeDashoffset: 10
  }, 2500);

  s.select('#menu').animate({
    fill: '#7FC242'
  }, 2000);

  s.select('#text').animate({
    fill: '#1BC282',
    stroke: '#3674CE',
    strokeDashoffset: 0.5
  }, 2000);
}


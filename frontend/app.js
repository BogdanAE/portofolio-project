// console.log('zero',document.querySelectorAll(".st0"));//red cirlce in middle
// console.log('one',document.querySelectorAll(".st1"));//brown group in the middle

////group
// console.log('two',document.querySelectorAll(".st2"));//8 circles
// console.log('four',document.querySelectorAll(".st3"));//8 circles
// console.log('four',document.querySelectorAll(".st4"));//8 circles
// console.log('five',document.querySelectorAll(".st5"));//8 circles
// console.log('six',document.querySelectorAll(".st6"));//8 circles
// console.log('seven',document.querySelectorAll(".st7"));//8 circles
// console.log('eight',document.querySelectorAll(".st8"));//8 circles
//end group

// console.log('nine',document.querySelectorAll(".st9"));//big green one
//10 nu exista l-am grupat cu 11
// console.log('nine',document.querySelectorAll(".st11"));//all small circles
//console.log('nine', document.querySelectorAll(".st12"));//green hearths => my menu

var s = Snap("#mandala");

var menu1 = s.select('#st8i6');
var redCircle = s.select('#redWheel');
var centerWheel = s.select('#centerWheel');
var check = s.select('#_x38_circles');
var content = document.getElementById('content');
var edPg = document.getElementById('educationPage');
var coPg = document.getElementById('contactPage');
var abPg = document.getElementById('aboutPage');
var prPg = document.getElementById('projectsPage');
var hoPg =  document.getElementById('homePage');

let bbox = redCircle.getBBox();
let bbox1 = menu1.getBBox();
let mainBbox = s.getBBox();
var relocate1 = false;
var relocate2 = false;

var id = null;
var mandala = document.getElementById('mandala');
var mainMenu = document.querySelector('.mainMenu');


// ----------------------------------------------------
// ---------------------MENU EVENTS--------------------
// ----------------------------------------------------
function rotateFunction(idSent) {
  id = idSent;
  console.log(idSent);
  showPage();
}

window.addEventListener('click', () => {
  if (id == 'st8i6') {
    s.animate({
      transform: 'r180, 0, 0',
    }, 2000)
  }
  else if (id == 'st8i8') {
    s.animate({
      transform: 'r90, 0, 0',
    }, 2000)
  }
  else if (id == 'st8i4') {
    s.animate({
      transform: 'r-90, 0, 0',
    }, 2000)
  }
  else if (id == 'st8i2') {
    s.animate({
      transform: 'r0, 0, 0',
    }, 2000)
  }
});
// ----------------------------------------------------
// -------------------END MENU EVENTS------------------
// ----------------------------------------------------



// -----------------------------------------------------------
// -------------------------PAGE SHOW/REMOVE------------------
// -----------------------------------------------------------
var pArray = [0, 0, 0, 0];

function removePage() {
  if (pArray[0] == 1) {
    abPg.style.opacity = '0';
    edPg.style.transform = 'translate(0, -100%)';
    edPg.style.transition = '1.5s linear';

    //pArray[0] = 0;
  }
  else if (pArray[1] == 1) {
    abPg.style.opacity = '0';
    coPg.style.transform = 'translate(0, -100%)';
    coPg.style.transition = '1.5s linear';

    pArray[1] = 0;
  }
  else if (pArray[2] == 1) {
    console.log('REMOVE projects');
    abPg.style.opacity = '0';
    prPg.style.transform = 'translate(0, -100%)';
    prPg.style.transition = '1.5s linear';

    //pArray[2] = 0;
  }
  else if (pArray[3] == 1) {
    abPg.style.opacity = '0';
    abPg.style.transform = 'translate(0, -100%)';
    abPg.style.transition = '1.5s linear';

    //pArray[3] = 0;
  }
};

function clearArray() {
  for (let i = 0; i <= 3; i++) {
    pArray[i] = 0;
  }
}

function dropPage(value) {
  //console.log(pArray)

  if (value == 0) {
    edPg.style.opacity = '1';
    edPg.style.transform = 'translate(0, 1%)';
    edPg.style.transition = 'all 2.5s linear';

    pArray[0] = 1;
  }
  else if (value == 1) {
    coPg.style.opacity = '1';
    coPg.style.transform = 'translate(0, 1%)';
    coPg.style.transition = 'all 2.5s linear';

    pArray[1] = 1;
  }
  else if (value == 2) {
    //console.log('DROP PAGE PROJECTS')
    prPg.style.opacity = '1';
    prPg.style.transform = 'translate(0, 1%)';
    prPg.style.transition = 'all 2.5s linear';

    pArray[2] = 1;
  }
  else if (value == 3) {
    abPg.style.opacity = '1';
    abPg.style.transform = 'translate(0, 1%)';
    abPg.style.transition = 'all 2.5s linear';

    pArray[3] = 1;
  }
  //console.log(pArray);
  scrollHeightCheck();
}

function showPage() {
  if (id == 'st8i6') {
    //education
    if (pArray[0] == 0 && pArray[1] == 0 && pArray[2] == 0 && pArray[3] == 0) {
      dropPage(0);
      edPg.style.transitionDelay = '0s';
    }
    else {
      removePage();
      clearArray();
      dropPage(0);
      edPg.style.transitionDelay = '1s';
    }
  }
  else if (id == 'st8i8') {
    //contact
    if (pArray[0] == 0 && pArray[1] == 0 && pArray[2] == 0 && pArray[3] == 0) {
      dropPage(1);
      edPg.style.transitionDelay = '0s';
    }
    else {
      removePage();
      clearArray();
      dropPage(1);
      coPg.style.transitionDelay = '1s';
    }
  }
  else if (id == 'st8i4') {
    //projects
    if (pArray[0] == 0 && pArray[1] == 0 && pArray[2] == 0 && pArray[3] == 0) {
      prPg.style.transitionDelay = '0s';
      //console.log('project SHOW no delay');
      dropPage(2);
    }
    else {
      removePage();
      //console.log('project SHOW WITH delay');
      clearArray();
      dropPage(2);
      prPg.style.transitionDelay = '1s';
    }
  }
  else if (id == 'st8i2') {
    //about
    if (pArray[0] == 0 && pArray[1] == 0 && pArray[2] == 0 && pArray[3] == 0) {
      abPg.style.transitionDelay = '0s';
      dropPage(3);
    }
    else {
      removePage();
      clearArray();
      dropPage(3);
      abPg.style.transitionDelay = '1s';
    }
  }
};

var mouse = document.getElementById('mouse');

function scrollHeightCheck() {
  if (pArray[0] == 1) {
    if (edPg.innerHeight < edPg.scrollHeight) {
      mouse.style.transition = '1s linear';
      mouse.style.opacity = '1';
      edPg.style.height = "43%";
    }

    else {
      mouse.style.transition = '1s linear';
      mouse.style.opacity = '0';
    }

  }
  else if (pArray[1] == 1) {
    if (coPg.offsetHeight < coPg.scrollHeight) {
      mouse.style.opacity = '1';
      mouse.style.transition = '1s linear';
      coPg.style.height = "43%";
    }
    else {
      mouse.style.transition = '1s linear';
      mouse.style.opacity = '0';
    }

  }
  else if (pArray[2] == 1) {
    if (prPg.offsetHeight < prPg.scrollHeight) {
      mouse.style.transition = '1s linear';
      mouse.style.opacity = '1';
      prPg.style.height = "43%";
    }
    else {
      mouse.style.transition = '1s linear';
      mouse.style.display = '0';
    }
  }
  else if (pArray[3] == 1) {
    if (abPg.offsetHeight < abPg.scrollHeight) {
      mouse.style.opacity = '1';
      mouse.style.transition = '1s linear';
      abPg.style.height = "43%";
    }
    else {
      mouse.style.transition = '1s linear';
      mouse.style.opacity = '0';
    }
  }
}
// -----------------------------------------------------------
// ---------------------END PAGE SHOW/REMOVE------------------
// -----------------------------------------------------------


//-----------LINE ANIMATION-----------
var line = document.getElementById('line');

setInterval(() => {
  line.style.transition = '1s';
  line.style.height = '40%';
  setTimeout(() => {
    line.style.transition = '1s';
    line.style.height = '25%';
  }, 5000)
}, 10000);
//-----------END LINE ANIMATION-----------



// ----------------------------------------------------------------
// ------------------------MENU MOUSE FOLLOW-----------------------
// ----------------------------------------------------------------
mainMenu.addEventListener('mouseout', () => {
  relocate1 = true;
  // console.log('out menu')
  //console.log('relocate1:', relocate1)
});

// mandala.addEventListener('mouseout', () => {
//   relocate2 = true;
//   console.log('relocate2:',relocate2)
// });

mainMenu.addEventListener('mousemove', function (event) {

  if (/*cadran 3*/event.clientX >= window.innerWidth * 0.67 && event.clientY >= window.innerHeight * 0.75) {
    //console.log('cadran3')
    relocate1 = false;
    //relocate2 = false;
    if (/*'ABOUT'*/ pArray[3] == 1) {
      s.animate({
        transform: 'T50,50r0,0,0'
      }, 1000)
    }
    else if (/*'PROJECTS'*/ pArray[2] == 1) {
      s.animate({
        transform: 'T50,50r-90,0,0'
      }, 1000)
    }
    else if (/*'EDUCATION'*/ pArray[0] == 1) {
      s.animate({
        transform: 'T50,50r180,0,0'
      }, 1000)
    }
    else if (/*'CONTACT'*/ pArray[1] == 1) {
      s.animate({
        transform: 'T50,50r90,0,0'
      }, 1000)
    }
  }
  else if (/*cadran 2*/event.clientX >= window.innerWidth / 2 && event.clientY >= window.innerHeight / 2
    && event.clientY <= window.innerHeight * 0.55) {
    //console.log('cadran2')
    relocate1 = false;
    //relocate2 = false;
    if (/* 'ABOUT'*/pArray[3] == 1 /*|| content.innerHTML == ''*/) {
      s.animate({
        transform: 'T50,-50r0,0,0'
      }, 1000);
    }
    else if (/* 'PROJECTS'*/pArray[2] == 1) {
      s.animate({
        transform: 'T50,-50r-90,0,0'
      }, 1000)
    }
    else if (/*'EDUCATION'*/pArray[0] == 1) {
      s.animate({
        transform: 'T50,-50r180,0,0'
      }, 1000)
    }
    else if (/* 'CONTACT'*/ pArray[1] == 1) {
      s.animate({
        transform: 'T50,-50r90,0,0'
      }, 1000)
    }
  }
  else if (/*cadran 4*/event.clientX <= window.innerWidth * 0.35 && event.clientY >= window.innerHeight * 0.75
    && event.clientY <= window.innerHeight) {
    //console.log('cadran4')
    relocate1 = false;
    //relocate2 = false;
    if (/*'ABOUT'*/ pArray[3] == 1) {
      s.animate({
        transform: 'T-50,50r0,0,0'
      }, 1000)
    }
    else if (/*'PROJECTS'*/ pArray[2] == 1) {
      s.animate({
        transform: 'T-50,50r-90,0,0'
      }, 1000)
    }
    else if (/*'EDUCATION'*/pArray[0] == 1) {
      s.animate({
        transform: 'T-50,50r180,0,0'
      }, 1000)
    }
    else if (/*'CONTACT'*/pArray[1] == 1) {
      s.animate({
        transform: 'T-50,50r90,0,0'
      }, 1000)
    }
  }
  else if (/*cadran 1*/event.clientX <= window.innerWidth * 0.35 && event.clientY >= window.innerHeight * 0.5 && event.clientY <= window.innerHeight * 0.75) {
    relocate1 = false;
    //relocate2 = false;
    //console.log('cadran1')
    if (/*'ABOUT' */ pArray[3] == 1) {
      s.animate({
        transform: 'T-50,-50r0,0,0'
      }, 1000)
    }
    else if (/*'PROJECTS'*/ pArray[2] == 1) {
      s.animate({
        transform: 'T-50,-50r-90,0,0'
      }, 1000)
    }
    else if (/*'EDUCATION'*/ pArray[0] == 1) {
      s.animate({
        transform: 'T-50,-50r180,0,0'
      }, 1000)
    }
    else if (/*'CONTACT'*/ pArray[1] == 1) {
      s.animate({
        transform: 'T-50,-50r90,0,0'
      }, 1000)
    }
  }
  else if (relocate1 == true /*&& relocate2 == true*/) {
    if (/*'ABOUT' */ pArray[3] == 1) {
      s.animate({
        transform: 'T0,0r0,0,0'
      }, 1000)
    }
    else if (/*'PROJECTS'*/ pArray[2] == 1) {
      s.animate({
        transform: 'T0,0r-90,0,0'
      }, 1000)
    }
    else if (/*'EDUCATION'*/ pArray[0] == 1) {
      s.animate({
        transform: 'T0,0r180,0,0'
      }, 1000)
    }
    else if (/*'CONTACT'*/ pArray[1] == 1) {
      s.animate({
        transform: 'T0,0r90,0,0'
      }, 1000)
    }
  }
});

//----------------------------------------------------------------
// ------------------------MENU MOUSE FOLLOW-----------------------
// ----------------------------------------------------------------

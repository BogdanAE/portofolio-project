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
var hoPg = document.getElementById('homePage');
var cad1 = document.getElementById('cadran1');
var cad2 = document.getElementById('cadran2');
var cad3 = document.getElementById('cadran3');
var cad4 = document.getElementById('cadran4');
var mouse = document.getElementById('mouse');
var line = document.getElementById('line');
var fullPageButton = document.getElementById('fullPage');
var fullView = document.getElementById('fullView');
var logo = document.getElementById('logo1');
var startButton = document.getElementById('startButton');
var exPg = document.getElementById('exPg');

var pH = window.innerHeight;
var pW = window.innerWidth;

var pArray = [0, 0, 0, 0, 0];
pArray[4] = 1;

let bbox = redCircle.getBBox();
let bbox1 = menu1.getBBox();
let mainBbox = s.getBBox();
var enabled = true;
var explore = false;

var id = null;
var mandala = document.getElementById('mandala');
var mainMenu = document.querySelector('.mainMenu');


// ----------------------------------------------------
// ---------------------MENU EVENTS--------------------
// ----------------------------------------------------
function rotateFunction(idSent) {
  id = idSent;
  //console.log(idSent);
  showPage();
}


// ----------------------------------------------------------
// ----------------HOME PAGE EVENTS--------------------------
// ----------------------------------------------------------


startButton.addEventListener('click', () => {
  explore = true;
  hoPg.style.display = 'none';
  document.getElementById('mandala').classList.remove('rotateMandala');
  document.getElementById('text').style.display = "block";
  pArray[4] = 0;
  exPg.style.display = "block";
});



startButton.addEventListener('mouseover', () => {
  document.getElementById('happy').style.display = 'block';
  document.getElementById('sad').style.display = 'none';
});

startButton.addEventListener('mouseout', () => {

  document.getElementById('happy').style.display = 'none';
  document.getElementById('sad').style.display = 'block';
});



function keepRoling() {
  if (explore == false) {
    document.getElementById('mandala').classList.add('rotateMandala');
  }
}

window.addEventListener('mousemove', (event) => {
  logo.style.transition = "1s linear";
  if (event.clientX < pW / 2 && event.clientY < pH / 2) {
    //console.log(pH);
    logo.style.transform = "translate(" + -event.clientX / 16 + "px ," + -event.clientY / 16 + "px) scale(0.83)";
  }
  else if (event.clientX > pW / 2 && event.clientY < pH / 2) {
    logo.style.transform = "translate(" + event.clientX / 16 + "px ," + -event.clientY / 16 + "px) scale(0.83)";
  }
  else if (event.clientX > pW / 2 && event.clientY > pH / 2) {
    logo.style.transform = "translate(" + event.clientX / 16 + "px ," + event.clientY / 16 + "px) scale(0.83)";
  }
  else if (event.clientX < pW / 2 && event.clientY > pH / 2) {
    logo.style.transform = "translate(" + -event.clientX / 16 + "px ," + event.clientY / 16 + "px) scale(0.83)";
  }
});



// ----------------------------------------------------------
// ----------------END HOME PAGE EVENTS----------------------
// ----------------------------------------------------------


mandala.addEventListener('click', menuFunction);

function menuFunction() {
  if (id == 'st8i6') {
    disableReposition();
    s.animate({
      transform: 'r180, 0, 0',
    }, 2000);
  }
  else if (id == 'st8i8') {
    disableReposition();
    s.animate({
      transform: 'r90, 0, 0',
    }, 2000)
  }
  else if (id == 'st8i4') {
    disableReposition();
    s.animate({
      transform: 'r-90, 0, 0',
    }, 2000)
  }
  else if (id == 'st8i2') {
    disableReposition();
    s.animate({
      transform: 'r0, 0, 0',
    }, 2000)
  }
}


// ----------------------------------------------------
// -------------------END MENU EVENTS------------------
// ----------------------------------------------------



// -----------------------------------------------------------
// -------------------------PAGE SHOW/REMOVE------------------
// -----------------------------------------------------------


function removePage() {
  if (pArray[4] == 1) {
    hoPg.style.opacity = '0';
    hoPg.style.transform = 'translate(0, -110%)';
    hoPg.style.transition = '1.5s linear';

    pArray[4] = 0;
  }
  else if (pArray[0] == 1) {
    abPg.style.opacity = '0';
    edPg.style.transform = 'translate(0, -115%)';
    edPg.style.transition = '1.5s linear';

    //pArray[0] = 0;
  }
  else if (pArray[1] == 1) {
    abPg.style.opacity = '0';
    coPg.style.transform = 'translate(0, -115%)';
    coPg.style.transition = '1.5s linear';

    pArray[1] = 0;
  }
  else if (pArray[2] == 1) {
    //console.log('REMOVE projects');
    abPg.style.opacity = '0';
    prPg.style.transform = 'translate(0, -115%)';
    prPg.style.transition = '1.5s linear';

    //pArray[2] = 0;
  }
  else if (pArray[3] == 1) {
    abPg.style.opacity = '0';
    abPg.style.transform = 'translate(0, -115%)';
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
  fullPageButton.style.opacity = '1';
  scrollHeightCheck();
}



function showPage() {
  exPg.animate([
    // keyframes
    {opacity: '1'},
    {opacity: '0'}
  ], { 
    // timing options
    duration: 1000,
  });
  setTimeout(() => {
    exPg.style.display = 'none';
  }, 1000);
  
if (explore == true) {
  fullPageButton.style.opacity = '0';
  if (id == 'st8i6') {
    //education
    if (pArray[0] == 0 && pArray[1] == 0 && pArray[2] == 0 && pArray[3] == 0 && pArray[4] == 0) {
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
    if (pArray[0] == 0 && pArray[1] == 0 && pArray[2] == 0 && pArray[3] == 0 && pArray[4] == 0) {
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
    if (pArray[0] == 0 && pArray[1] == 0 && pArray[2] == 0 && pArray[3] == 0 && pArray[4] == 0) {
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
    if (pArray[0] == 0 && pArray[1] == 0 && pArray[2] == 0 && pArray[3] == 0 && pArray[4] == 0) {
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
}
else
  return;
};

function scrollHeightCheck() {
  if (pArray[0] == 1) {
    if (edPg.offsetHeight < edPg.scrollHeight) {
      //console.log(edPg.offsetHeight, edPg.scrollHeight);
      mouse.style.transition = '2s linear';
      mouse.style.opacity = '1';
      edPg.style.height = "47%";
    }

    else {
      mouse.style.transition = '2s linear';
      mouse.style.opacity = '0';
    }

  }
  else if (pArray[1] == 1) {
    if (coPg.offsetHeight < coPg.scrollHeight) {
      mouse.style.opacity = '1';
      mouse.style.transition = '2s linear';
      coPg.style.height = "47%";
    }
    else {
      mouse.style.transition = '2s linear';
      mouse.style.opacity = '0';
    }

  }
  else if (pArray[2] == 1) {
    if (prPg.offsetHeight < prPg.scrollHeight) {
      mouse.style.transition = '2s linear';
      mouse.style.opacity = '1';
      prPg.style.height = "47%";
    }
    else {
      mouse.style.transition = '2s linear';
      mouse.style.display = '0';
    }
  }
  else if (pArray[3] == 1) {
    if (abPg.offsetHeight < abPg.scrollHeight) {
      mouse.style.opacity = '1';
      mouse.style.transition = '2s linear';
      abPg.style.height = "47%";
    }
    else {
      mouse.style.transition = '2s linear';
      mouse.style.opacity = '0';
    }
  }

  // else if (pArray[4] == 1) {
  //   if (hoPg.offsetHeight < hoPg.scrollHeight) {
  //     mouse.style.opacity = '1';
  //     mouse.style.transition = '2s linear';
  //     abPg.style.height = "48%";
  //   }
  //   else {
  //     mouse.style.transition = '2s linear';
  //     mouse.style.opacity = '0';
  //   }
  // }
}
// -----------------------------------------------------------
// ---------------------END PAGE SHOW/REMOVE------------------
// -----------------------------------------------------------


//-----------LINE ANIMATION-----------

setInterval(() => {
  line.style.transition = '1s';
  line.style.height = '40%';
  setTimeout(() => {
    line.style.transition = '1s';
    line.style.height = '25%';
  }, 5000)
}, 10000);
//-----------END LINE ANIMATION-----------

//-----------------------------RESCALE MANDALA---------------------


//-------------------------END RESCALE MANDALA---------------------


// ----------------------------------------------------------------
// ------------------------MENU MOUSE FOLLOW-----------------------
// ----------------------------------------------------------------


function disableReposition() {
  enabled = false;
  setTimeout(() => {
    enabled = true;
  }, 2500);
}

// cad1.addEventListener('mouseenter', function () {
//   //console.log('enter');
//   if (enabled == true) {
//     if (/*'ABOUT' */ pArray[3] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T-15,-15r0,0,0'
//       }, 500)
//     }
//     else if (/*'PROJECTS'*/ pArray[2] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T-15,-15r-90,0,0'
//       }, 500)
//     }
//     else if (/*'EDUCATION'*/ pArray[0] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T-15,-15r180,0,0'
//       }, 500)
//     }
//     else if (/*'CONTACT'*/ pArray[1] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T-15,-15r90,0,0'
//       }, 500)
//     }
//   }
// });

// cad2.addEventListener('mouseenter', function () {
//   //console.log('enter');
//   if (enabled == true) {
//     if (/* 'ABOUT'*/pArray[3] == 1 /*|| content.innerHTML == ''*/ || pArray[4] == 1) {
//       s.animate({
//         transform: 'T15,-15r0,0,0'
//       }, 500);
//     }
//     else if (/* 'PROJECTS'*/pArray[2] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T15,-15r-90,0,0'
//       }, 500)
//     }
//     else if (/*'EDUCATION'*/pArray[0] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T15,-15r180,0,0'
//       }, 500)
//     }
//     else if (/* 'CONTACT'*/ pArray[1] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T15,-15r90,0,0'
//       }, 500)
//     }
//   }
// });

// cad3.addEventListener('mouseenter', function () {
//   //console.log('enter');
//   if (enabled == true) {
//     if (/*'ABOUT'*/ pArray[3] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T15,15r0,0,0'
//       }, 500)
//     }
//     else if (/*'PROJECTS'*/ pArray[2] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T15,15r-90,0,0'
//       }, 500)
//     }
//     else if (/*'EDUCATION'*/ pArray[0] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T15,15r180,0,0'
//       }, 500)
//     }
//     else if (/*'CONTACT'*/ pArray[1] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T15,15r90,0,0'
//       }, 500)
//     }
//   }
// });

// cad4.addEventListener('mouseenter', function () {
//   //console.log('enter');
//   if (enabled == true) {
//     if (/*'ABOUT'*/ pArray[3] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T-15,15r0,0,0'
//       }, 500)
//     }
//     else if (/*'PROJECTS'*/ pArray[2] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T-15,15r-90,0,0'
//       }, 500)
//     }
//     else if (/*'EDUCATION'*/pArray[0] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T-15,15r180,0,0'
//       }, 500)
//     }
//     else if (/*'CONTACT'*/pArray[1] == 1 || pArray[4] == 1) {
//       s.animate({
//         transform: 'T-15,15r90,0,0'
//       }, 500)
//     }
//   }
// });

//----------------------------------------------------------------
// ------------------------MENU MOUSE FOLLOW-----------------------
// ----------------------------------------------------------------


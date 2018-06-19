var aura = document.getElementById('aura');
var aura2 = document.getElementById('aura2');

var en = document.getElementById('en');
var ro = document.getElementById('ro');
var menu1 = document.getElementById('st8i2');
var menu2 = document.getElementById('st8i4');
var menu3 = document.getElementById('st8i6');
var menu4 = document.getElementById('st8i8');

var startHover = false;

function itsIn() {
    startHover = true;
};

function itsOut() {
    startHover = false;
}

function addAura() {
    if (startHover) {
        aura.style.display = "block";
        aura.style.left = event.clientX - 25 + "px";
        aura.style.top = event.clientY - 25 + "px";
    }
    else {
        aura.style.display = "none";
    }
};
function one(){
    startButton.addEventListener('mouseover', itsIn);
    startButton.addEventListener('mouseout', itsOut);
    en.addEventListener('mouseover', itsIn);
    en.addEventListener('mouseout', itsOut);
    ro.addEventListener('mouseover', itsIn);
    ro.addEventListener('mouseout', itsOut);
    menu1.addEventListener('mouseover', itsIn);
    menu1.addEventListener('mouseout', itsOut);
    menu2.addEventListener('mouseover', itsIn);
    menu2.addEventListener('mouseout', itsOut);
    menu3.addEventListener('mouseover', itsIn);
    menu3.addEventListener('mouseout', itsOut);
    menu4.addEventListener('mouseover', itsIn);
    menu4.addEventListener('mouseout', itsOut);
    fullPage.addEventListener('mouseover', itsIn);
    fullPage.addEventListener('mouseout', itsOut);
    homeButton.addEventListener('mouseover', itsIn);
    homeButton.addEventListener('mouseout', itsOut);
    // if (contactHover || projectsHover) {
    //     setTimeout(() => {
    //         window.removeEventListener('mousemove', one);
    //     }, 3000);
    // }
    //console.log(startHover);
    // console.log(event.clientX, event.clientY);
    addAura();
}

window.addEventListener('mousemove', one);



// ->>>>>>>>FULLVIEW CHANGES WITH AURA<<<<<<<<<<<<<<<------

setTimeout(() => {
    fullView.addEventListener('mousemove', (event) => {
        if (contactHover) {
            bigCircle.addEventListener('mouseover', itsIn1);
            bigCircle.addEventListener('mouseout', itsOut1);
            fbButton.addEventListener('mouseover', itsIn1);
            fbButton.addEventListener('mouseout', itsOut1); 
            cvButton.addEventListener('mouseover', itsIn1);
            cvButton.addEventListener('mouseout', itsOut1);
            liButton.addEventListener('mouseover', itsIn1);
            liButton.addEventListener('mouseout', itsOut1);
            ghButton.addEventListener('mouseover', itsIn1);
            ghButton.addEventListener('mouseout', itsOut1);
        }
        else if (projectsHover) {
            document.getElementById('full1img1').addEventListener('mouseover', itsIn1);
            document.getElementById('full1img1').addEventListener('mouseout', itsOut1);
        }
        else if(projectsHover == false && contactHover == false){
            window.addEventListener('mousemove', one);
        }
        addAura1();
    });

}, 2000)

var startHover1 = false;

function itsIn1() {
    startHover1 = true;
};

function itsOut1() {
    startHover1 = false;
}

function addAura1() {
    
    if (startHover1) {
        aura2.style.display = "block";
        aura2.style.left = event.clientX - 25 + "px";
        aura2.style.top = event.clientY - 25 + "px";
    }
    else if(startHover1 == false) {
        aura2.style.display = "none";
    }
};





var aura = document.getElementById('aura');
var en = document.getElementById('en');
var ro = document.getElementById('ro');
var menu1 = document.getElementById('st8i2');
var menu2 = document.getElementById('st8i4');
var menu3 = document.getElementById('st8i6');
var menu4 = document.getElementById('st8i8');

var startHover = false;

function itsIn(){
    startHover = true;
};

function itsOut(){
    startHover = false;
}

function addAura() {
    if(startHover){
        aura.style.display = "block";
        aura.style.left = event.clientX - 25 + "px";
        aura.style.top = event.clientY - 25 + "px";
    }
    else{
        aura.style.display = "none";
    }
}


window.addEventListener('mousemove', (event) => {
    startButton.addEventListener('mouseover', itsIn);
    startButton.addEventListener('mouseout' , itsOut);
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
    //console.log(startHover);
    // console.log(event.clientX, event.clientY);
    addAura();
});
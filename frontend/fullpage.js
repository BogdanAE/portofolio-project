var hide = document.getElementById('toHide');
var full1 = document.getElementById('full1');
var full2 = document.getElementById('full2');
var full3 = document.getElementById('full3');
var full4 = document.getElementById('full4');
var homeButton = document.getElementById('homeButton');

fullPageButton.addEventListener('click', () => {
    console.log('hide');
    hide.style.display = 'none';
    fullView.style.display = 'block';
    full1.style.display = 'block';
    full2.style.display = 'block';
    full3.style.display = 'block';
    full4.style.display = 'block';
    fullView.style.transition = '1s linear';
    fullView.style.opacity = '1';
    homeButton.style.display = 'block';
});

var fullPageCounter = 0;

fullView.addEventListener('mousewheel', (event) => {
    // let heightFull = 0
    if (event.deltaY > 0) {
        fullPageCounter++;
        //document.getElementById('full' + fullPageCounter).scrollIntoView();
        // heightFull = full1.offsetHeight;
        // console.log(heightFull);
        // let value = heightFull * fullPageCounter;
        // console.log(value)
    }
    else {
        fullPageCounter--;
        // document.getElementById('full' + fullPageCounter).scrollIntoView();
    }
});

homeButton.addEventListener('click', () =>{
    hide.style.display = 'block';
    fullView.style.display = 'none';
    full1.style.display = 'none';
    full2.style.display = 'none';
    full3.style.display = 'none';
    full4.style.display = 'none';
    fullView.style.transition = '1s linear';
    fullView.style.opacity = '1';
    homeButton.style.display = 'none';
});
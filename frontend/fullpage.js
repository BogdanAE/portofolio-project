var hide = document.getElementById('toHide');
var full1 = document.getElementById('full1');
var full2 = document.getElementById('full2');
var full3 = document.getElementById('full3');
var full4 = document.getElementById('full4');
var homeButton = document.getElementById('homeButton');

var letScroll = true;


// -------------------------------------------------------
// ---------------Explenation page text-------------------
// -------------------------------------------------------
function splitWords() {
    let desc = document.querySelector(".desc");
    desc.innerText.replace(" ", "");
    let descWords = desc.innerText.split(" "),
        wordCount = descWords.length;
    desc.innerHTML = "";
    for (let i = 0; i < wordCount; i++) {
        desc.innerHTML += "<span>" + descWords[i] + "</span>";
        if (i < descWords.length - 1) {
            desc.innerHTML += " ";
        }
    }
    descWords = document.querySelectorAll(".desc > span");
    fadeWords(descWords);
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function fadeWords(words) {
    Array.prototype.forEach.call(words, function (word) {
        //word.style.delay = getRandom(500, 3000);
        //word.style.duration = "3000";
        word.animate([{
            opacity: 0,
            filter: "blur(" + getRandom(0, 8) + "px)"
        }, {
            opacity: 1,
            filter: "blur(0px)"
        }],
            {
                duration: 3000,
                delay: getRandom(2200, 5000),
                fill: 'forwards'
            }
        )
    })
}
splitWords();
// -------------------------------------------------------
// --------------END Explenation page text----------------
// -------------------------------------------------------


function animateShow(elem) {
    elem.animate([
        // keyframes
        { opacity: '0' },
        { opacity: '1' }
    ], {
            // timing options
            duration: 5000,
        });
}

fullPageButton.addEventListener('click', () => {
    hide.animate([
        // keyframes
        { opacity: '1' },
        { opacity: '0' }
    ], {
            // timing options
            duration: 2000,
        });

    setTimeout(() => {
        hide.style.display = 'none';
        fullView.style.display = 'block';
        full1.style.display = 'block';
        full2.style.display = 'block';
        full3.style.display = 'block';
        full4.style.display = 'block';
        // fullView.style.transition = '1s linear'; 
        fullView.style.opacity = '1';
        homeButton.style.display = 'block';
    }, 2000);
    setTimeout(() => {
        animateShow(fullView);
        animateShow(full1);
        animateShow(full2);
        animateShow(full3);
        animateShow(full4);
        animateShow(homeButton);
    }, 2000)

});

var fullPageCounter = 0;

function nextFullPage(value, times) {
    // var topMenuOffset = window.innerHeight * 0.05;

    //move the selected page on the top of the view with an animation
    value.animate([
        // keyframes
        { transform: 'translate(0,0)' },
        { transform: 'translate(0,' + -window.innerHeight + 'px' }
    ], {
            // timing options
            duration: 2000,
        });

    //animate the current viewed page to height 0
    document.getElementById('full' + fullPageCounter).animate([
        { innerHeight: '100%' },
        { innerHeight: '0%' }
    ],
        {
            duration: 2000,
        })

    //hide the current viewed page with opacity
    setTimeout(() => {
        document.getElementById('full' + fullPageCounter).style.transform = 'translate(0,' + - 2 * window.innerHeight + 'px';
        document.getElementById('full' + fullPageCounter).style.opacity = '0';
    }, 2000);
    value.style.opacity = '1';
    setTimeout(() => {
        value.style.transform = 'translate(0,' + -window.innerHeight + 'px';
    }, 2000);
};

function previousFullPage(value, times) {
    var previous;
    previous = times + 2;

    //move the selected page on the top of the view with an animation
    console.log(times);
    if (times == 0) {
        value.animate([
            // keyframes
            {
                opacity: '0',
                transform: 'translate(0,' + 0 + 'px)',
            },
            {
                opacity: '1',
                transform: 'translate(0,' + 0 + 'px)',
            }
        ], {
                // timing options
                duration: 2000,
            });
        setTimeout(() => {
            value.style.transform = 'translate(0,' + 0 + 'px)';
            value.style.opacity = '1';
        }, 2000);
        document.getElementById('full' + previous).animate([
            {
                opacity: '1',
            },
            {
                opacity: '0',
            }
        ],
            {
                duration: 2000,
            });
        setTimeout(() => {
            document.getElementById('full' + previous).style.transform = 'translate(0,' + window.innerHeight + 'px';
            document.getElementById('full' + previous).style.opacity = '0';
        }, 2000)
    }
    else {
        value.animate([
            // keyframes
            {
                opacity: '0',
                transform: 'translate(0,' + - window.innerHeight + 'px'
            },
            {
                opacity: '1',
                transform: 'translate(0,' + -window.innerHeight + 'px'
            }
        ], {
                // timing options
                duration: 2000,
            });
        //animate the current viewed page to height 0
        document.getElementById('full' + previous).animate([
            { opacity: '1' },
            { opacity: '0' }
        ],
            {
                duration: 2000,
            });
        //hide the current viewed page with opacity
        setTimeout(() => {
            document.getElementById('full' + previous).style.transform = 'translate(0,' + window.innerHeight + 'px';
            document.getElementById('full' + previous).style.opacity = '0';
        }, 2000)

        setTimeout(() => {
            value.style.transform = 'translate(0,' + -window.innerHeight + 'px)';
            value.style.opacity = '1';
        }, 2000);
    }
};

fullView.addEventListener('mousewheel', (event) => {
    if (event.deltaY > 0) {
        if (letScroll == true && fullPageCounter < 3) {
            fullPageCounter++;
            console.log(fullPageCounter)
            if (fullPageCounter == 1)
                nextFullPage(full2, fullPageCounter);
            else if (fullPageCounter == 2)
                nextFullPage(full3, fullPageCounter);
            else if (fullPageCounter == 3) {
                nextFullPage(full4, fullPageCounter);
            }
            else if (fullPageCounter >= 3) {
                letScroll = false;
            }
        }
    }
    else {
        if (fullPageCounter > 3) {
            fullPageCounter--;
            letScroll = true;
        }
        if (letScroll == true && fullPageCounter > 0) {
            fullPageCounter--;
            console.log(fullPageCounter)
            if (fullPageCounter == 2) {
                previousFullPage(full3, fullPageCounter);
            }
            else if (fullPageCounter == 1)
                previousFullPage(full2, fullPageCounter);
            else if (fullPageCounter == 0) {
                previousFullPage(full1, fullPageCounter);
            }
        }
    }
});

homeButton.addEventListener('click', () => {
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


var p1i1 = document.getElementById('full1img1');
var p1i2 = document.getElementById('full1img2');

function bringInFront(element1, element2){
    element1.style.transition = "0.5s";
    element2.style.transition = "0.5s";

    element1.style.zIndex = '10';
    element1.style.boxShadow = "2px 2px 4px white";
    element1.style.transform = "scale(1.15)";
    element2.style.filter = "blur(2px)";
}

function elementBehind(elem1, elem2){
    elem1.style.transition = "0.5s";
    elem2.style.transition = "0.5s";

    elem1.style.zIndex = '0';
    elem1.style.boxShadow = "none";
    elem1.style.transform = "scale(1)";
    elem2.style.filter = "blur(0px)";
}
//-----------------P1I1--------------------
p1i1.addEventListener('mouseover',  () =>{
    bringInFront(p1i1, p1i2);
});

p1i1.addEventListener('mouseout',  () =>{
    elementBehind(p1i1, p1i2);
});
//---------------END P1I1------------------

//-----------------P1I2--------------------
p1i2.addEventListener('mouseover',  () =>{
    bringInFront(p1i2, p1i1);
});

p1i2.addEventListener('mouseout',  () =>{
    elementBehind(p1i2, p1i1);
});
//---------------END P1I2------------------


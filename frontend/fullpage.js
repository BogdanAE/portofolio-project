var hide = document.getElementById('toHide');
var homeButton = document.getElementById('homeButton');

var p1i1;
var p1i2;
var p1i3;
var p2i1;
var p2i2;
var p2i3;
var p3i1;
var p3i2;
var p4i1;
var p4i2;
var p4i3;

var ed1d1;
var ed1d2;
var ed1d3;
var ed1d4;


var map1;
var map2;
var mapS1;
var mapS2;
var map3;
var map4;
var mapB = document.getElementById('map');

var full1;
var full2;
var full3;
var full4;

var letScroll = true;
var projectsCreated = false; // PROJECTS PAGE ELEMENTS  =>  4 pages
var ECAcreated = false; // EDUCATION, CONTACT, ABOUT PAGE ELEMENTS =>  2 pages each
var mapCreatedBig = false; // map created for PROJECTS 
var mapCreatedSmall = false;//map created for Edu, Contact and About

//----------------------------------------------------------
//----------------CREATE FULLVIEW DIVS----------------------
//----------------------------------------------------------

function removeChildren(idValue) {
    if (idValue == 1) {
        full1.remove();
        full2.remove();
        full3.remove();
        full4.remove();
        projectsCreated = false;
    }
    else if (idValue == 2) {
        full1.remove();
        full2.remove();
        ECAcreated = false;
    }
};

function removeMap() {
    if (mapCreatedBig == true && mapCreatedSmall == true) {
        mapS1.remove();
        mapS2.remove();
        map1.remove();
        map2.remove();
        map3.remove();
        map4.remove();
        mapCreatedBig = false;
        mapCreatedSmall = false;
        fullPageCounter = 0;
    }
    else if (mapCreatedBig == true && mapCreatedSmall == false) {
        map1.remove();
        map2.remove();
        map3.remove();
        map4.remove();
        mapCreatedBig = false;
        fullPageCounter = 0;
    }
    else if (mapCreatedSmall == true && mapCreatedBig == false) {
        mapS1.remove();
        mapS2.remove();
        mapCreatedSmall = false;
        fullPageCounter = 0;
    }
}


function createFullViewElements() {
    console.log(id);
    if (id == 'st8i4' && projectsCreated == false) {
        if (ECAcreated == true && projectsCreated == false)
            removeChildren(2);
        //page 1
        var div1 = document.createElement('div');
        div1.setAttribute('id', 'full1');
        fullView.appendChild(div1);
        var img1 = document.createElement('div');
        img1.setAttribute('id', 'full1img1');
        var img2 = document.createElement('div');
        img2.setAttribute('id', 'full1img2');
        var img3 = document.createElement('div');
        img3.setAttribute('id', 'full1img3');
        div1.appendChild(img1);
        div1.appendChild(img2);
        div1.appendChild(img3);

        //page 2
        var div2 = document.createElement('div');
        div2.setAttribute('id', 'full2');
        fullView.appendChild(div2);
        var img4 = document.createElement('div');
        img4.setAttribute('id', 'full2img1');
        var img5 = document.createElement('div');
        img5.setAttribute('id', 'full2img2');
        var img6 = document.createElement('div');
        img6.setAttribute('id', 'full2img3');
        div2.appendChild(img4);
        div2.appendChild(img5);
        div2.appendChild(img6);

        //page 3
        var div3 = document.createElement('div');
        div3.setAttribute('id', 'full3');
        fullView.appendChild(div3);

        var img7 = document.createElement('div');
        img7.setAttribute('id', 'full3img1');
        var img8 = document.createElement('div');
        img8.setAttribute('id', 'full3img2');
        div3.appendChild(img7);
        div3.appendChild(img8);

        //page 4
        var div4 = document.createElement('div');
        div4.setAttribute('id', 'full4');
        fullView.appendChild(div4);

        var video1 = document.createElement('video');
        video1.setAttribute('id', 'full4video');
        video1.setAttribute('src', './srcs/projects/chatvid.webm');
        div4.appendChild(video1);
        var img9 = document.createElement('div');
        img9.setAttribute('id', 'full4img1');
        var img10 = document.createElement('div');
        img10.setAttribute('id', 'full4img2');
        var img11 = document.createElement('div');
        img11.setAttribute('id', 'full4img3');
        div4.appendChild(img9);
        div4.appendChild(img10);
        div4.appendChild(img11);

        projectsCreated = true;
    }
    else if (id == 'st8i2' || id == 'st8i6' || id == 'st8i8') {
        if (projectsCreated == true)
            removeChildren(1);
        if (ECAcreated == false) {
            console.log('aici');
            //page 1

            let arrowR1 = document.createElement('div');
            arrowR1.setAttribute('class', 'arrowRight');
            let arrowR2 = document.createElement('div');
            arrowR2.setAttribute('class', 'arrowRight');

            let arrowL1 = document.createElement('div');
            arrowL1.setAttribute('class', 'arrowLeft');
            let arrowL2 = document.createElement('div');
            arrowL2.setAttribute('class', 'arrowLeft');

            //middle lines

            //end middle lines

            var div1 = document.createElement('div');
            div1.setAttribute('id', 'full1');
            fullView.appendChild(div1);

            var div2 = document.createElement('div');
            div2.setAttribute('id', 'full1ed1');
            div2.appendChild(arrowR1);


            var div3 = document.createElement('div');
            div3.setAttribute('id', 'full1ed2');
            div3.appendChild(arrowL1);
            var div4 = document.createElement('div');
            div4.appendChild(arrowR2);
            div4.setAttribute('id', 'full1ed3');
            var div5 = document.createElement('div');
            div5.setAttribute('id', 'full1ed4');
            div5.appendChild(arrowL2);

            div1.appendChild(div2);
            div1.appendChild(div3);
            div1.appendChild(div4);
            div1.appendChild(div5);

            //page 2
            var div2 = document.createElement('div');
            div2.setAttribute('id', 'full2');
            fullView.appendChild(div2);
            var img4 = document.createElement('div');
            img4.setAttribute('id', 'full2img1');
            var img5 = document.createElement('div');
            img5.setAttribute('id', 'full2img2');
            var img6 = document.createElement('div');
            img6.setAttribute('id', 'full2img3');
            div2.appendChild(img4);
            div2.appendChild(img5);
            div2.appendChild(img6);

            ECAcreated = true;
        }
    }
};

//----------------------------------------------------------
//--------------END CREATE FULLVIEW DIVS--------------------
//----------------------------------------------------------


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
    //console.log(fullView.childNodes.length);
    if (projectsCreated == false || ECAcreated == false) {
        createFullViewElements();
        removeMap();
        console.log(fullView.childNodes);
        for (let i = 1; i <= fullView.childNodes.length; i++) {
            if (fullView.childNodes.length == 4) {
                var div = document.createElement('div');
                div.setAttribute('id', 'map' + i);
                mapB.appendChild(div);
                mapCreatedBig = true;
            }
            else if (fullView.childNodes.length == 2) {
                var div = document.createElement('div');
                div.setAttribute('id', 'mapS' + i);
                mapB.appendChild(div);
                mapCreatedSmall = true;
            }
        }
    }

    if (id == 'st8i4') {
        full1 = document.getElementById('full1');
        full2 = document.getElementById('full2');
        full3 = document.getElementById('full3');
        full4 = document.getElementById('full4');
        eventsImageProjectPage();
    }
    else {
        full1 = document.getElementById('full1');
        full2 = document.getElementById('full2');
    }

    map();

    hide.animate([
        // keyframes
        { opacity: '1' },
        { opacity: '0' }
    ], {
            // timing options
            duration: 2000,
        });
    if (id == 'st8i4') {
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
            mapB.style.display = 'block';
        }, 2000);
        setTimeout(() => {
            animateShow(fullView);
            animateShow(full1);
            animateShow(full2);
            animateShow(full3);
            animateShow(full4);
            animateShow(homeButton);
        }, 2000)
    }
    else {

        setTimeout(() => {
            hide.style.display = 'none';
            fullView.style.display = 'block';
            full1.style.display = 'block';
            full2.style.display = 'block';
            fullView.style.opacity = '1';
            homeButton.style.display = 'block';
            mapB.style.display = 'block';
        }, 2000);

        ed1d1 = document.getElementById('full1ed1');
        ed1d2 = document.getElementById('full1ed2');
        ed1d3 = document.getElementById('full1ed3');
        ed1d4 = document.getElementById('full1ed4');
        setTimeout(() => {
            animateShow(fullView);
            animateShow(full1);
            animateShow(full2);
            animateShow(homeButton);
            animateEdPg1();
        }, 2000);
        setTimeout(() => {
            ed1d1.addEventListener('mouseover', animateEdPg1Individual1);
            ed1d2.addEventListener('mouseover', animateEdPg1Individual2);
            ed1d3.addEventListener('mouseover', animateEdPg1Individual3);
            ed1d4.addEventListener('mouseover', animateEdPg1Individual4);
        }, 7500);
    }
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
        document.getElementById('full' + times).style.transform = 'translate(0,' + - 2 * window.innerHeight + 'px';
        document.getElementById('full' + times).style.opacity = '0';
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
    let max;
    let min = 0;
    if (id == 'st8i4') {
        max = 3;
    }
    else
        max = 1
    if (event.deltaY > 0) {
        if (letScroll == true && fullPageCounter < max) {
            fullPageCounter++;
            if (fullPageCounter == 1)
                nextFullPage(full2, fullPageCounter);
            else if (fullPageCounter == 2)
                nextFullPage(full3, fullPageCounter);
            else if (fullPageCounter == 3) {
                nextFullPage(full4, fullPageCounter);
            }
            else if (fullPageCounter >= max) {
                letScroll = false;
            }
        }
    }
    else {
        if (fullPageCounter > max) {
            fullPageCounter--;
            letScroll = true;
        }
        if (letScroll == true && fullPageCounter > min) {
            fullPageCounter--;
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
    map();
});

function resetMap() {
    if (id == 'st8i4') {
        map1.style.background = "white";
        map1.style.filter = "blur(0px)";
        map2.style.background = "white";
        map2.style.filter = "blur(0px)";
        map3.style.background = "white";
        map3.style.filter = "blur(0px)";
        map4.style.background = "white";
        map4.style.filter = "blur(0px)";
    }
    else {
        mapS1.style.background = "white";
        mapS1.style.filter = "blur(0px)";
        mapS2.style.background = "white";
        mapS2.style.filter = "blur(0px)";
    }
}

function map() {
    if (id == 'st8i4') {
        map1 = document.getElementById('map1');
        map2 = document.getElementById('map2');
        map3 = document.getElementById('map3');
        map4 = document.getElementById('map4');
        if (fullPageCounter == 0) {
            resetMap();
            map1.style.background = "yellow";
            map1.style.filter = "blur(2px)";
        }
        else if (fullPageCounter == 1) {
            resetMap();
            map2.style.background = "yellow";
            map2.style.filter = "blur(2px)";
        }
        else if (fullPageCounter == 2) {
            resetMap();
            map3.style.background = "yellow";
            map3.style.filter = "blur(2px)";
        }
        else if (fullPageCounter == 3) {
            resetMap();
            map4.style.background = "yellow";
            map4.style.filter = "blur(2px)";
        }
    }
    else {
        mapS1 = document.getElementById('mapS1');
        mapS2 = document.getElementById('mapS2');
        if (fullPageCounter == 0) {
            resetMap();
            mapS1.style.background = "yellow";
            mapS1.style.filter = "blur(2px)";
        }
        else if (fullPageCounter == 1) {
            resetMap();
            mapS2.style.background = "yellow";
            mapS2.style.filter = "blur(2px)";
        }
    }

}

homeButton.addEventListener('click', () => {
    hide.style.display = 'block';
    hide.style.opacity = '0';
    hide.animate([
        // keyframes
        { opacity: '0' },
        { opacity: '1' }
    ], {
            // timing options
            duration: 2000,
        });
    fullView.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 2000,
        }
    );
    mapB.animate([
        { opacity: '1' },
        { opacity: '0' }
    ],
        {
            duration: 2000
        })
    if (id == 'st8i4') {
        setTimeout(() => {
            hide.style.opacity = '1';
            hide.style.display = 'block';
            fullView.style.display = 'none';
            full1.style.display = 'none';
            full2.style.display = 'none';
            full3.style.display = 'none';
            full4.style.display = 'none';
            fullView.style.transition = '1s linear';
            fullView.style.opacity = '1';
            homeButton.style.display = 'none';
            mapB.style.display = 'none';
        }, 2000);
    }
    else {
        setTimeout(() => {
            hide.style.opacity = '1';
            hide.style.display = 'block';
            fullView.style.display = 'none';
            full1.style.display = 'none';
            full2.style.display = 'none';
            fullView.style.transition = '1s linear';
            fullView.style.opacity = '1';
            homeButton.style.display = 'none';
            mapB.style.display = 'none';
        }, 2000);
    }
});

//------------------------------------------------
//------------BRING OUT/IN FUNCTIONS--------------
//------------------------------------------------

function bringInFront(element1, element2) {
    element1.style.transition = "0.5s";
    element2.style.transition = "0.5s";

    element1.style.zIndex = '10';
    element1.style.boxShadow = "2px 2px 4px white";
    element1.style.transform = "scale(1.15)";
    element2.style.filter = "blur(2px)";
}

function elementBehind(elem1, elem2) {
    elem1.style.transition = "0.5s";
    elem2.style.transition = "0.5s";

    elem1.style.zIndex = '0';
    elem1.style.boxShadow = "none";
    elem1.style.transform = "scale(1)";
    elem2.style.filter = "blur(0px)";
}

function pageFull2In(el1, el2, el3) {
    el1.style.transition = "0.5s";
    el2.style.transition = '0.5s';
    el3.style.transition = '0.5s';

    el1.style.boxShadow = "2px 2px 4px white";
    el1.style.transform = "scale(1.15)";
    el1.style.zIndex = '10';

    el2.style.filter = "blur(2px)";
    el3.style.filter = "blur(2px)";
    el2.style.zIndex = '-1';
    el3.style.zIndex = '-1';

}

function pageFull2Out(el1, el2, el3) {
    el1.style.transition = "0.5s";
    el2.style.transition = '0.5s';
    el3.style.transition = '0.5s';
    el1.style.zIndex = '0';
    el1.style.boxShadow = "none";
    el1.style.transform = "scale(1)";


    el2.style.filter = "blur(0px)";
    el3.style.filter = "blur(0px)";
}

//------------------------------------------------
//----------END BRING OUT/IN FUNCTIONS------------
//------------------------------------------------

function eventsImageProjectPage() {
    p1i1 = document.getElementById('full1img1');
    p1i2 = document.getElementById('full1img2');
    p1i3 = document.getElementById('full1img3');
    p2i1 = document.getElementById('full2img1');
    p2i2 = document.getElementById('full2img2');
    p2i3 = document.getElementById('full2img3');
    p3i1 = document.getElementById('full3img1');
    p3i2 = document.getElementById('full3img2');
    p4i1 = document.getElementById('full4img1');
    p4i2 = document.getElementById('full4img2');
    p4i3 = document.getElementById('full4img3');

    //-----------------P1I1--------------------
    p1i1.addEventListener('mouseover', () => {
        bringInFront(p1i1, p1i2);
    });

    p1i1.addEventListener('mouseout', () => {
        elementBehind(p1i1, p1i2);
    });
    //---------------END P1I1------------------

    //-----------------P1I2--------------------
    p1i2.addEventListener('mouseover', () => {
        bringInFront(p1i2, p1i1);
    });

    p1i2.addEventListener('mouseout', () => {
        elementBehind(p1i2, p1i1);
    });
    //---------------END P1I2------------------

    //-----------------P1I3--------------------
    p1i3.addEventListener('mouseover', () => {
        p1i3.style.transition = "0.5s";
        p1i3.style.zIndex = '10';
        p1i3.style.boxShadow = "2px 2px 4px white";
        p1i3.style.transform = "scale(1.15)";
    });

    p1i3.addEventListener('mouseout', () => {
        p1i3.style.zIndex = '0';
        p1i3.style.boxShadow = "none";
        p1i3.style.transform = "scale(1)";
    });
    //---------------END P1I3------------------


    //-----------------P2I1--------------------
    p2i1.addEventListener('mouseover', () => {
        pageFull2In(p2i1, p2i2, p2i3);
    });

    p2i1.addEventListener('mouseout', () => {
        pageFull2Out(p2i1, p2i2, p2i3);
    });
    //---------------END P2I1------------------

    //-----------------P2I2--------------------
    p2i2.addEventListener('mouseover', () => {
        pageFull2In(p2i2, p2i1, p2i3);
    });

    p2i2.addEventListener('mouseout', () => {
        pageFull2Out(p2i2, p2i1, p2i3);
    });
    //---------------END P2I2------------------

    //-----------------P2I3--------------------
    p2i3.addEventListener('mouseover', () => {
        pageFull2In(p2i3, p2i1, p2i2);
    });

    p2i3.addEventListener('mouseout', () => {
        pageFull2Out(p2i3, p2i1, p2i2);
    });
    //---------------END P2I3------------------

    //-----------------P3I1--------------------
    p3i1.addEventListener('mouseover', () => {
        p3i1.style.transition = "0.5s";
        p3i1.style.zIndex = '10';
        p3i1.style.boxShadow = "2px 2px 4px white";
        p3i1.style.transform = "scale(1.15)";
    });

    p3i1.addEventListener('mouseout', () => {
        p3i1.style.zIndex = '0';
        p3i1.style.boxShadow = "none";
        p3i1.style.transform = "scale(1)";
    });
    //---------------END P3I1------------------

    //-----------------P3I2--------------------
    p3i2.addEventListener('mouseover', () => {
        p3i2.style.transition = "0.5s";
        p3i2.style.zIndex = '10';
        p3i2.style.boxShadow = "2px 2px 4px white";
        p3i2.style.transform = "scale(1.15)";
    });

    p3i2.addEventListener('mouseout', () => {
        p3i2.style.zIndex = '0';
        p3i2.style.boxShadow = "none";
        p3i2.style.transform = "scale(1)";
    });
    //---------------END P3I2------------------

    //-----------------P4I1--------------------
    p4i1.addEventListener('mouseover', () => {
        pageFull2In(p4i1, p4i2, p4i3);
    });

    p4i1.addEventListener('mouseout', () => {
        pageFull2Out(p4i1, p4i2, p4i3);
    });
    //---------------END P4I1------------------

    //-----------------P4I2--------------------
    p4i2.addEventListener('mouseover', () => {
        pageFull2In(p4i2, p4i1, p4i3);
    });

    p4i2.addEventListener('mouseout', () => {
        pageFull2Out(p4i2, p4i1, p4i3);
    });
    //---------------END P4I2------------------

    //-----------------P4I3--------------------
    p4i3.addEventListener('mouseover', () => {
        pageFull2In(p4i3, p4i1, p4i2);
    });

    p4i3.addEventListener('mouseout', () => {
        pageFull2Out(p4i3, p4i1, p4i2);
    });
    //---------------END P4I3------------------

    //-----------------P4V--------------------
    document.getElementById('full4video').addEventListener('mouseover', () => {
        document.getElementById('full4video').play()
    });

    document.getElementById('full4video').addEventListener('mouseout', () => {
        document.getElementById('full4video').pause()
    });
    //---------------END P4V------------------
};


function animateEdPg1() {
    ed1d1.style.opacity = '0';
    setTimeout(() => {
        ed1d1.style.opacity = '1';
    }, 3000);
    ed1d2.style.opacity = '0';
    setTimeout(() => {
        ed1d2.style.opacity = '1';
    }, 3500);
    ed1d3.style.opacity = '0';
    setTimeout(() => {
        ed1d3.style.opacity = '1';
    }, 4000);
    ed1d4.style.opacity = '0';
    setTimeout(() => {
        ed1d4.style.opacity = '1';
    }, 4500);
    document.getElementById('full1ed1').animate([
        { transform: 'translate(-150%, 0)', opacity: 0 },
        { transform: 'translate(0%, 0)', opacity: 1 }
    ], {
            duration: 2000,
            delay: 1000,
        });
    document.getElementById('full1ed2').animate([
        { transform: 'translate(150%, 0)', opacity: 0 },
        { transform: 'translate(0%, 0)', opacity: 1 }
    ], {
            duration: 2000,
            delay: 1500
        });
    document.getElementById('full1ed3').animate([
        { transform: 'translate(-150%, 0)', opacity: 0 },
        { transform: 'translate(0%, 0)', opacity: 1 }
    ], {
            duration: 2000,
            delay: 2000
        });
    document.getElementById('full1ed4').animate([
        { transform: 'translate(150%, 0)', opacity: 0 },
        { transform: 'translate(0%, 0)', opacity: 1 }
    ], {
            duration: 2000,
            delay: 2500
        });
};

var animationCounter = 0;

function disableMultiHover() {
    setTimeout(() => {
        animationCounter = 1;
    }, 100)

    setTimeout(() => {
        animationCounter = 0;
    }, 1500);
}

function hideOthers(el1, el2, el3) {
    el1.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 1500,
        });
    el2.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 1500,
        });
    el3.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 1500,
        });
    setTimeout(() => {
        el1.style.opacity = '0';
        el2.style.opacity = '0';
        el3.style.opacity = '0';
    }, 1100);
};

function showOthers(el1, el2, el3) {
    el1.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
            duration: 1500,
        });
    el2.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
            duration: 1500,
        });
    el3.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
            duration: 1500,
        });
    setTimeout(() => {
        el1.style.opacity = '1';
        el2.style.opacity = '1';
        el3.style.opacity = '1';
    }, 1100);
};

function animateBoxes(el) {
    let transformMode;
    let neighbour1;
    let neighbour2;
    let neighbour3;
    let endPos;
    if (el == ed1d1) {
        transformMode = 'translate(75%, 35%) rotate(90deg)';
        neighbour1 = ed1d2;
        neighbour2 = ed1d3;
        neighbour3 = ed1d4;
        ed1d2.removeEventListener("mouseover", animateEdPg1Individual2);
        ed1d3.removeEventListener("mouseover", animateEdPg1Individual3);
        ed1d4.removeEventListener("mouseover", animateEdPg1Individual4);
    }
    else if (el == ed1d2) {
        transformMode = 'translate(-75%, 35%) rotate(-90deg)';
        neighbour1 = ed1d1;
        neighbour2 = ed1d3;
        neighbour3 = ed1d4;
        ed1d1.removeEventListener("mouseover", animateEdPg1Individual1);
        ed1d3.removeEventListener("mouseover", animateEdPg1Individual3);
        ed1d4.removeEventListener("mouseover", animateEdPg1Individual4);
    }
    else if (el == ed1d3) {
        transformMode = 'translate(75%, -45%) rotate(90deg)';
        neighbour1 = ed1d1;
        neighbour2 = ed1d2;
        neighbour3 = ed1d4;
        ed1d1.removeEventListener("mouseover", animateEdPg1Individual1);
        ed1d2.removeEventListener("mouseover", animateEdPg1Individual2);
        ed1d4.removeEventListener("mouseover", animateEdPg1Individual4);
    }
    else if (el == ed1d4) {
        transformMode = 'translate(-75%, -55%) rotate(-90deg)';
        neighbour1 = ed1d1;
        neighbour2 = ed1d2;
        neighbour3 = ed1d3;
        ed1d2.removeEventListener("mouseover", animateEdPg1Individual2);
        ed1d3.removeEventListener("mouseover", animateEdPg1Individual3);
        ed1d1.removeEventListener("mouseover", animateEdPg1Individual1);
    }

    if (animationCounter == 0) {
        if (el.style.transform == '' || el.style.transform == 'translate(0%, 0%) rotate(0deg)') {
            el.animate([
                { transform: 'translate(0%,0%)' },
                {
                    transform: transformMode,
                }
            ],
                { duration: 1500 });
            setTimeout(() => {
                el.style.transform = transformMode;
            }, 1400);
            hideOthers(neighbour1, neighbour2, neighbour3);
        }
        else if (el.style.transform == transformMode) {
            el.animate([
                { transform: transformMode },
                {
                    transform: 'translate(0%,0%) rotate(0deg)',
                }
            ],
                { duration: 1500 });
            setTimeout(() => {
                el.style.transform = 'translate(0%,0%) rotate(0deg)'
            }, 1400);
            ed1d1.addEventListener("mouseover", animateEdPg1Individual1);
            ed1d2.addEventListener("mouseover", animateEdPg1Individual2);
            ed1d3.addEventListener("mouseover", animateEdPg1Individual3);
            ed1d4.addEventListener("mouseover", animateEdPg1Individual4);
            showOthers(neighbour1, neighbour2, neighbour3);
        }
    }
    else
        return;
};

function animateEdPg1Individual1() {
    disableMultiHover();
    animateBoxes(ed1d1);
};

function animateEdPg1Individual2() {
    disableMultiHover();
    animateBoxes(ed1d2);
};

function animateEdPg1Individual3() {
    disableMultiHover();
    animateBoxes(ed1d3);
};

function animateEdPg1Individual4() {
    disableMultiHover();
    animateBoxes(ed1d4);
};



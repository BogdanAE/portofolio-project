var hide = document.getElementById('toHide');
var homeButton = document.getElementById('homeButton');

//let aura be created on dinamically created pages CONTROL
let contactHover = false;
let projectsHover = false;


//contact variables
var bigCircle;
var leftC;
var rightC;
var topC;
var bottomC;
var textLogo;
var ghButton;
var fbButton;
var liButton;
var cvButton;

//projects page variables
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

//educatiopage variables
var ed1d1;
var ed1d2;
var ed1d3;
var ed1d4;

// map variables
var map1;
var map2;
var mapS1;
var mapS2;
var map3;
var map4;
var mapB = document.getElementById('map');

//pages variables
var full1;
var full2;
var full3;
var full4;


//control variables
var fullPageCounter = 0;
var letScroll = true;
var projectsCreated = false; // PROJECTS PAGE ELEMENTS  =>  4 pages
var educationCreated = false; //EDUCATION PAGE ELEMENTS => 2pages
var aboutCreated = false //ABOUT PAGE ELEMENTS => 2 pages
var contactCreated = false //CONTACT PAGE ELEMENTS => 2 pages

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
        contactCreated = false;
        aboutCreated = false;
        educationCreated = false;
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
    else if (mapCreatedBig == false && mapCreatedSmall == false)
        return;
}


function createFullViewElements() {

    if (id == 'st8i4' /*PROJECTS*/) {
        if ((educationCreated == true || contactCreated == true || aboutCreated == true) && projectsCreated == false)
            removeChildren(2);
        else if (projectsCreated == true)
            removeChildren(1);
        projectsHover = true;
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
    else if (id == 'st8i6'/*EDUCATION*/) {
        if (projectsCreated == true)
            removeChildren(1);
        else if (contactCreated == true || aboutCreated == true || educationCreated == true)
            removeChildren(2);
        if (educationCreated == false) {
            //page 1

            //arrows
            let arrowR1 = document.createElement('div');
            arrowR1.setAttribute('class', 'arrowRight');
            let arrowR2 = document.createElement('div');
            arrowR2.setAttribute('class', 'arrowRight');

            let arrowL1 = document.createElement('div');
            arrowL1.setAttribute('class', 'arrowLeft');
            let arrowL2 = document.createElement('div');
            arrowL2.setAttribute('class', 'arrowLeft');

            //full page
            var div1 = document.createElement('div');
            div1.setAttribute('id', 'full1');
            fullView.appendChild(div1);

            var div2 = document.createElement('div');
            div2.setAttribute('id', 'full1ed1');
            div2.appendChild(arrowR1);
            //text element
            var div31 = document.createElement('p');
            var text1ed1 = document.createTextNode('text text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text text');
            div31.appendChild(text1ed1);
            div31.setAttribute('id', 'ed1text1');
            div2.appendChild(div31);

            var div3 = document.createElement('div');
            div3.setAttribute('id', 'full1ed2');
            div3.appendChild(arrowL1);
            //text element
            var div32 = document.createElement('p');
            var text2ed1 = document.createTextNode('text text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text text');
            div32.appendChild(text2ed1);
            div32.setAttribute('id', 'ed1text2');
            div3.appendChild(div32);

            var div4 = document.createElement('div');
            div4.appendChild(arrowR2);
            div4.setAttribute('id', 'full1ed3');
            //text element
            var div33 = document.createElement('p');
            var text3ed1 = document.createTextNode('text text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text text');
            div33.appendChild(text3ed1);
            div33.setAttribute('id', 'ed1text3');
            div4.appendChild(div33);

            var div5 = document.createElement('div');
            div5.setAttribute('id', 'full1ed4');
            div5.appendChild(arrowL2);
            //text element
            var div34 = document.createElement('p');
            var text4ed1 = document.createTextNode('text text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text texttext text text text');
            div34.appendChild(text4ed1);
            div34.setAttribute('id', 'ed1text4');
            div5.appendChild(div34);

            div1.appendChild(div2);
            div1.appendChild(div3);
            div1.appendChild(div4);
            div1.appendChild(div5);

            //page 2
            var div6 = document.createElement('div');
            div6.setAttribute('id', 'full2');
            fullView.appendChild(div6);
            var div7 = document.createElement('div');
            div7.setAttribute('id', 'full2ed1');
            var div7text = document.createTextNode('Software Skills');
            div7.appendChild(div7text);

            var wrapperTop = document.createElement('div');
            wrapperTop.setAttribute('id', 'topWrapper');
            div7.appendChild(wrapperTop);
            var wrapperBot = document.createElement('div');
            wrapperBot.setAttribute('id', 'botWrapper');
            div7.appendChild(wrapperBot);

            //page2 up container lines
            var textContent = ['nimic :)', 'Windows', 'Linux / Ubuntu', 'Adobe Illustrator', 'Microsoft Office', 'Autocad/Surfer/ArcMap']
            for (let i = 1; i <= 5; i++) {
                var line1 = document.createElement('div');
                line1.setAttribute('id', 'ed2line' + i);
                var text1 = document.createElement('div');
                text1.innerHTML = textContent[i];
                text1.setAttribute('class', 'ed2text1');
                line1.appendChild(text1);

                wrapperBot.appendChild(line1);
            }

            var div8 = document.createElement('div');
            div8.setAttribute('id', 'full2ed2');

            //page2 down container lines
            var textContentB = ['nimic', 'HTML', 'CSS', 'JS', 'NODE.JS', 'MONGOOSE', 'C/C++', 'Angular', 'Oracle']
            for (let i = 1; i <= 8; i++) {
                var line2 = document.createElement('div');
                line2.setAttribute('id', 'ed2bline' + i);
                var text2 = document.createElement('div');
                text2.innerHTML = textContentB[i];
                text2.setAttribute('class', 'ed2text2');
                line2.appendChild(text2);

                div8.appendChild(line2);
            }

            var div8text = document.createTextNode('Programming Skills');
            div8.appendChild(div8text);
            div6.appendChild(div7);
            div6.appendChild(div8);

            educationCreated = true;
        }
    }
    else if (id == 'st8i2' /*ABOUT*/) {
        if (projectsCreated == true)
            removeChildren(1);
        else if (contactCreated == true || educationCreated == true || aboutCreated == true)
            removeChildren(2);
        if (aboutCreated == false) {
            //page 1

            var div1 = document.createElement('div');
            div1.setAttribute('id', 'full1');
            fullView.appendChild(div1);

            for (let i = 1; i <= 4; i++) {
                var divContainer = document.createElement('div');
                divContainer.setAttribute('id', 'co1d' + i);
                div1.appendChild(divContainer);
                var divFlag = document.createElement('div');
                divFlag.setAttribute('id', 'co1f' + i);
                div1.appendChild(divFlag);
                var divTriangle = document.createElement('div');
                divTriangle.setAttribute('id', 'co1t' + i);
                div1.appendChild(divTriangle);
                var divTail = document.createElement('div');
                divTail.setAttribute('id', 'co1b' + i);
                div1.appendChild(divTail);
            }


            //page 2
            var div2 = document.createElement('div');
            div2.setAttribute('id', 'full2');
            var t2 = document.createTextNode('ABOUT PAGE // PAGE 2')
            div2.appendChild(t2);
            fullView.appendChild(div2);

            aboutCreated = true;
        }
    }

    else if (id == 'st8i8' /*CONTACT*/) {
        if (projectsCreated == true)
            removeChildren(1);
        else if (aboutCreated == true || educationCreated == true || contactCreated == true)
            removeChildren(2);
        if (contactCreated == false) {
            contactHover = true;
            //page 1

            //HTML SCHELET
            // <div id='container'>
            //     <div id="bC"></div>
            //     <div id="lC"></div>
            //     <div id="rC"></div>
            //     <div id="tC"></div>
            //     <p id='textLogo'>&copyEBA</p>
            //     <div id='fbButton'>
            //         <i class="fab fa-facebook"></i>
            //     </div>
            //     <div id='ghButton'>
            //         <i class="fab fa-github"></i>
            //     </div>
            //     <div id='liButton'>
            //         <i class="fab fa-linkedin-in"></i>
            //     </div>
            //     <div id='cvButton'>
            //         <i class="fab fa-angellist"></i>
            //     </div>
            // </div>
            //END HTML SCHELET

            var div1 = document.createElement('div');
            div1.setAttribute('id', 'full1');
            //var t1 = document.createTextNode('CONTACT PAGE // PAGE 1')
            //div1.appendChild(t1);
            fullView.appendChild(div1);
            div100 = document.createElement('div');
            div100.setAttribute('id', 'container');
            div1.appendChild(div100);

            var div2 = document.createElement('div');
            div2.setAttribute('id', 'containerContact');
            div100.appendChild(div2);
            var div3 = document.createElement('div');
            div3.setAttribute('id', 'bC');
            div2.appendChild(div3);
            var div4 = document.createElement('div');
            div4.setAttribute('id', 'lC');
            div2.appendChild(div4);
            var div5 = document.createElement('div');
            div5.setAttribute('id', 'rC');
            div2.appendChild(div5);
            var div6 = document.createElement('div');
            div6.setAttribute('id', 'tC');
            div2.appendChild(div6);
            var div7 = document.createElement('div');
            div7.setAttribute('id', 'textLogo');
            var div71 = document.createElement('p');
            div71.innerHTML = ' &copy EBA';
            div7.appendChild(div71);
            div2.appendChild(div7);

            //media buttons
            var div8 = document.createElement('a');
            div8.setAttribute('id', 'fbButton');
            div8.setAttribute('href', 'https://www.facebook.com/bogdan.epure.3');
            div8.setAttribute('target', '_blank');
            div100.appendChild(div8);
            var div9 = document.createElement('i');
            div9.setAttribute('class', 'fab fa-facebook');
            div8.appendChild(div9);

            var div10 = document.createElement('a');
            div10.setAttribute('id', 'ghButton');
            div10.setAttribute('href', 'https://github.com/BogdanAE');
            div10.setAttribute('target', '_blank');
            div100.appendChild(div10);
            var div11 = document.createElement('i');
            div11.setAttribute('class', 'fab fa-github');
            div10.appendChild(div11);

            var div12 = document.createElement('a');
            div12.setAttribute('id', 'liButton');
            div12.setAttribute('href', 'https://www.linkedin.com/in/epure-bogdan-74b320152/');
            div12.setAttribute('target', '_blank');
            div100.appendChild(div12);
            var div13 = document.createElement('i');
            div13.setAttribute('class', 'fab fa-linkedin-in');
            div12.appendChild(div13);

            var div14 = document.createElement('a');
            div14.setAttribute('id', 'cvButton');
            div14.setAttribute('href', 'https://bogdanepure.000webhostapp.com/');
            div14.setAttribute('target', '_blank');
            div100.appendChild(div14);
            var div15 = document.createElement('i');
            div15.setAttribute('class', 'fab fa-angellist');
            div14.appendChild(div15);


            //page 2
            var headingContact = document.createElement('h2');
            headingContact.innerHTML = 'Contact Page';
            var textCoP2 = [['Nume: Epure', ''], ['', 'Prenume: Bogdan-Alin'], ['23.02.1990', ''], ['Sex: M', 'Nationality: Ro'], ['Adresa:', ' Clabucet nr. 4, 400537 Cluj-Napoca (Romania)'], ['Telefon:', ' +40754671417'], ['Gmail:', ' ep.bogdy@gmail.com']];
            var div20 = document.createElement('div');
            div20.setAttribute('id', 'full2');
            div20.appendChild(headingContact);
            var div21 = document.createElement('table');
            div21.setAttribute('id', 'tabelC');

            for (let i = 1; i <= 7; i++) {
                var divR = document.createElement('tr');
                divR.setAttribute('id', 'row' + i);
                div21.appendChild(divR);
                for (let j = 1; j <= 2; j++) {
                    var divC = document.createElement('td');
                    divC.setAttribute('id', 'col' + i + j);
                    divC.innerHTML = textCoP2[i - 1][j - 1]
                    divR.appendChild(divC);
                }
            }

            var form = document.createElement('form');
            form.setAttribute('action', 'http://localhost:3000/add');
            form.setAttribute('method', 'post')
            var input1 = document.createElement('input');
            input1.setAttribute('type', 'text');
            input1.setAttribute('name', 'nume');
            input1.setAttribute('placeholder', 'Name');
            form.appendChild(input1);
            var input2 = document.createElement('input');
            input2.setAttribute('type', 'email');
            input2.setAttribute('name', 'mail');
            input2.setAttribute('placeholder', 'Email adress');
            form.appendChild(input2);
            var input3 = document.createElement('textarea');
            input3.setAttribute('type', 'text');
            input3.setAttribute('name', 'message');
            input3.setAttribute('rows', '4');
            input3.setAttribute('cols', '25');
            input3.setAttribute('placeholder', 'Message');
            form.appendChild(input3);
            var submit = document.createElement('input');
            submit.setAttribute('type', 'submit');
            submit.setAttribute('value', 'Submit');
            submit.setAttribute('id', 'submitButton');
            form.appendChild(submit);


            div20.appendChild(form);
            div20.appendChild(div21);
            fullView.appendChild(div20);


            contactCreated = true;
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
    if (projectsCreated == false || contactCreated == false || educationCreated == false || aboutCreated == false) {
        createFullViewElements();
        removeMap();

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
            duration: 2200,
        });
    if (id == 'st8i4'/*PROJECTS*/) {
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
    else if (id == 'st8i6'/*EDUCATION*/) {

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
    else if (id == 'st8i2'/*ABOUT*/) {
        setTimeout(() => {
            animateShow(fullView);
            animateShow(full1);
            animateShow(full2);
            animateShow(homeButton);

        }, 2000);
        setTimeout(() => {
            hide.style.display = 'none';
            fullView.style.display = 'block';
            full1.style.display = 'block';
            full2.style.display = 'block';
            fullView.style.opacity = '1';
            homeButton.style.display = 'block';
            mapB.style.display = 'block';
        }, 2000);
    }
    else if (id == 'st8i8'/*CONTACT*/) {
        bigCircle = document.getElementById('containerContact');
        leftC = document.getElementById('lC');
        rightC = document.getElementById('rC');
        topC = document.getElementById('tC');
        bottomC = document.getElementById('bC');
        textLogo = document.getElementById('textLogo');
        ghButton = document.getElementById('ghButton');
        fbButton = document.getElementById('fbButton');
        liButton = document.getElementById('liButton');
        cvButton = document.getElementById('cvButton');
        displayNoneMedia();
        hideMediaButtons();
        smallCirclesAnimate();
        cvButton.addEventListener('click', () => { console.log('cv') })
        fbButton.addEventListener('click', () => { console.log('fb') })
        ghButton.addEventListener('click', () => { console.log('gh') })
        liButton.addEventListener('click', () => { console.log('li') })
        bigCircle.addEventListener('click', () => {
            bigCircleTransform();
        });
        setTimeout(() => {
            staticBigCircleAnimate();
        }, 3000);
        setTimeout(() => {
            animateShow(fullView);
            animateShow(full1);
            animateShow(full2);
            animateShow(homeButton);
        }, 2000);
        setTimeout(() => {
            hide.style.display = 'none';
            fullView.style.display = 'block';
            full1.style.display = 'block';
            full2.style.display = 'block';
            fullView.style.opacity = '1';
            homeButton.style.display = 'block';
            mapB.style.display = 'block';
        }, 2000);

    }

});

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
            if (fullPageCounter == 1) {
                nextFullPage(full2, fullPageCounter);
                if (educationCreated == true) {
                    animateSoftwareSkill();
                    animateProgrammingSkill();
                }
            }
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
    contactHover = false;
    projectsHover = false;
    removeMap();
    fullPageCounter = 0;
    console.log(projectsCreated);
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


//----------------------------------------------------------
//--------------EDUCATION PAGE ANIMATIONS-------------------
//----------------------------------------------------------

//>)>)>)>)>)>)>)>)>)>) PAGE 1 (<(<(<(<(<(<(<(<(<(<

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
            duration: 600,
        });
    el2.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 600,
        });
    el3.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 600,
        });
    // setTimeout(() => {
    el1.style.opacity = '0';
    el2.style.opacity = '0';
    el3.style.opacity = '0';
    // }, 500);
};

function showOthers(el1, el2, el3) {
    setTimeout(() => {
        el1.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
                duration: 500,
            });
        el2.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
                duration: 500,
            });
        el3.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
                duration: 500,
            });
    }, 1000);
    setTimeout(() => {
        el1.style.opacity = '1';
        el2.style.opacity = '1';
        el3.style.opacity = '1';
    }, 1510);
};

function rotateBoxText90(el) {
    let ed1text1 = document.getElementById('ed1text1');
    let ed1text2 = document.getElementById('ed1text2');
    let ed1text3 = document.getElementById('ed1text3');
    let ed1text4 = document.getElementById('ed1text4');

    if (el == ed1d1) {
        ed1text1.animate([
            { transform: 'translate(0,0)', width: '100%' },
            { transform: 'translate(250px, 0%) rotate(-90deg)', width: '75%' }
        ],
            {
                duration: 700
            });
        ed1text1.style.transform = 'translate(250px, 0%) rotate(-90deg)';
        ed1text1.style.width = '75%';
    }
    else if (el == ed1d2) {
        ed1text2.animate([
            { transform: 'translate(0,0)', width: '100%' },
            { transform: 'translate(-150px, -50px) rotate(90deg)', width: '75%' }
        ],
            {
                duration: 700
            });
        ed1text2.style.transform = 'translate(-150px, -50px) rotate(90deg)';
        ed1text2.style.width = '75%';

    }
    else if (el == ed1d3) {
        ed1text3.animate([
            { transform: 'translate(0,0)', width: '100%' },
            { transform: 'translate(250px, 0%) rotate(-90deg)', width: '75%' }
        ],
            {
                duration: 700
            });
        ed1text3.style.transform = 'translate(250px, 0%) rotate(-90deg)';
        ed1text3.style.width = '75%';
    }
    else if (el == ed1d4) {
        ed1text4.animate([
            { transform: 'translate(0,0)', width: '100%' },
            { transform: 'translate(-150px, -50px) rotate(90deg)', width: '75%' }
        ],
            {
                duration: 700
            });
        ed1text4.style.transform = 'translate(-150px, -50px) rotate(90deg)';
        ed1text4.style.width = '75%';
    }
}

function rotateBoxText0(el) {
    let ed1text1 = document.getElementById('ed1text1');
    let ed1text2 = document.getElementById('ed1text2');
    let ed1text3 = document.getElementById('ed1text3');
    let ed1text4 = document.getElementById('ed1text4');

    if (el == ed1d1) {
        ed1text1.animate([
            { transform: 'translate(250px, 0%) rotate(-90deg)' },
            { transform: 'translate(0%,0%) rotate(0deg)' }
        ],
            {
                duration: 700
            });
        ed1text1.style.transform = 'translate(0%, 0%) rotate(0deg)';
    }
    else if (el == ed1d2) {
        ed1text2.animate([
            { transform: 'translate(-150px, -50px) rotate(90deg)' },
            { transform: 'translate(0%,0%) rotate(0deg)' }
        ],
            {
                duration: 700
            });
        ed1text2.style.transform = 'translate(0%, 0%) rotate(0deg)';
    }
    else if (el == ed1d3) {
        ed1text3.animate([
            { transform: 'translate(250px, 0%) rotate(-90deg)' },
            { transform: 'translate(0%,0%) rotate(0deg)' }
        ],
            {
                duration: 700
            });
        ed1text3.style.transform = 'translate(0%, 0%) rotate(0deg)';
    }
    else if (el == ed1d4) {
        ed1text4.animate([
            { transform: 'translate(-150px, -50px) rotate(90deg)' },
            { transform: 'translate(0%,0%) rotate(0deg)' }
        ],
            {
                duration: 700
            });
        ed1text4.style.transform = 'translate(0%, 0%) rotate(0deg)';
    }
}

var boxAnimateControl = true;

function animateBoxes(el) {
    let transformMode;
    let neighbour1;
    let neighbour2;
    let neighbour3;
    if (boxAnimateControl) {
        boxAnimateControl =  false;
        setTimeout(() => {
            boxAnimateControl = true;
        }, 1200);
        if (el == ed1d1) {
            transformMode = 'translate(75%, -20%) rotate(90deg)';
            neighbour1 = ed1d2;
            neighbour2 = ed1d3;
            neighbour3 = ed1d4;
            ed1d2.removeEventListener("mouseover", animateEdPg1Individual2);
            ed1d3.removeEventListener("mouseover", animateEdPg1Individual3);
            ed1d4.removeEventListener("mouseover", animateEdPg1Individual4);
        }
        else if (el == ed1d2) {
            transformMode = 'translate(-75%, -40%) rotate(-90deg)';
            neighbour1 = ed1d1;
            neighbour2 = ed1d3;
            neighbour3 = ed1d4;
            ed1d1.removeEventListener("mouseover", animateEdPg1Individual1);
            ed1d3.removeEventListener("mouseover", animateEdPg1Individual3);
            ed1d4.removeEventListener("mouseover", animateEdPg1Individual4);
        }
        else if (el == ed1d3) {
            transformMode = 'translate(75%, -50%) rotate(90deg)';
            neighbour1 = ed1d1;
            neighbour2 = ed1d2;
            neighbour3 = ed1d4;
            ed1d1.removeEventListener("mouseover", animateEdPg1Individual1);
            ed1d2.removeEventListener("mouseover", animateEdPg1Individual2);
            ed1d4.removeEventListener("mouseover", animateEdPg1Individual4);
        }
        else if (el == ed1d4) {
            transformMode = 'translate(-75%, -65%) rotate(-90deg)';
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
                    {
                        transform: 'translate(0%,0%)',
                        height: '37.5%'
                    },
                    {
                        transform: transformMode,
                        height: '800px'
                    }
                ],
                    { duration: 1500 });
                setTimeout(() => {
                    el.style.transform = transformMode;
                    el.style.height = '800px';
                }, 1400);
                hideOthers(neighbour1, neighbour2, neighbour3);
                rotateBoxText90(el);
            }
            else if (el.style.transform == transformMode) {
                el.animate([
                    {
                        transform: transformMode,
                        height: '800px'
                    },
                    {
                        transform: 'translate(0%,0%) rotate(0deg)',
                        height: '37.5%'
                    }
                ],
                    { duration: 1500 });
                setTimeout(() => {
                    el.style.transform = 'translate(0%,0%) rotate(0deg)';
                    el.style.height = '37.5%';
                }, 1400);
                rotateBoxText0(el);
                showOthers(neighbour1, neighbour2, neighbour3);
                setTimeout(() => {
                    if (el == ed1d4) {
                        ed1d1.addEventListener("mouseover", animateEdPg1Individual1);
                        ed1d2.addEventListener("mouseover", animateEdPg1Individual2);
                        ed1d3.addEventListener("mouseover", animateEdPg1Individual3);
                    }
                    else if (el == ed1d3) {
                        ed1d1.addEventListener("mouseover", animateEdPg1Individual1);
                        ed1d2.addEventListener("mouseover", animateEdPg1Individual2);
                        ed1d4.addEventListener("mouseover", animateEdPg1Individual4);
                    }
                    else if (el == ed1d2) {
                        ed1d1.addEventListener("mouseover", animateEdPg1Individual1);
                        ed1d3.addEventListener("mouseover", animateEdPg1Individual3);
                        ed1d4.addEventListener("mouseover", animateEdPg1Individual4);
                    }
                    else if (el == ed1d1) {
                        ed1d2.addEventListener("mouseover", animateEdPg1Individual2);
                        ed1d3.addEventListener("mouseover", animateEdPg1Individual3);
                        ed1d4.addEventListener("mouseover", animateEdPg1Individual4);
                    }
                }, 1500);
            }
        }
    }


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


//>)>)>)>)>)>)>)>)>)>) PAGE 2 (<(<(<(<(<(<(<(<(<(<
//-----------TOP--------------------------
function animateSoftwareSkill() {
    var line1 = document.getElementById('ed2line1');
    var line2 = document.getElementById('ed2line2');
    var line3 = document.getElementById('ed2line3');
    var line4 = document.getElementById('ed2line4');
    var line5 = document.getElementById('ed2line5');

    //reset
    for (let i = 1; i <= 5; i++) {
        document.getElementById('ed2line' + i).style.height = '0';
        document.getElementById('ed2line' + i).style.opacity = '0';
    }
    lineAnim(line1, 0, 70);
    lineAnim(line2, 1000, 80);
    lineAnim(line3, 2000, 65);
    lineAnim(line4, 3000, 75);
    lineAnim(line5, 4000, 90);


    function lineAnim(el, elDelay, elHeight) {
        setTimeout(() => {
            el.animate([
                {
                    opacity: '0',
                    height: '0%'
                },
                {
                    opacity: '1',
                    height: elHeight + '%'
                }
            ], {
                    duration: 1200,
                    delay: elDelay
                });
            el.style.height = elHeight + '%';
        }, 2000);
    }
    reappearLine();
    function reappearLine() {
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                document.getElementById('ed2line' + i).style.opacity = '1';
                document.getElementById('ed2line' + i).style.display = 'block';

            }, 2000 + 1000 * i);
        }
    }

    //text animation in lines top
    animateLineText();
    function animateLineText() {
        var lineText = document.querySelectorAll('.ed2text1');

        //reset text
        for (let i = 0; i < 5; i++) {
            lineText[i].style.opacity = '0';
        }
        lineText[4].style.width = "175px";
        for (let j = 1; j <= 5; j++) {
            setTimeout(() => {
                lineText[j - 1].animate([
                    { transform: 'translate(0 , 0) ', opacity: '0' },
                    { transform: 'translate(-55%,55px) rotate(-90deg)', opacity: '1' }
                ], {
                        duration: 1200
                    })
                lineText[j - 1].style.opacity = '1';
            }, 3500 + 1000 * j)
        }
    }
}

//-----------BOTTOM--------------------------

function animateProgrammingSkill() {
    var line1 = document.getElementById('ed2bline1');
    var line2 = document.getElementById('ed2bline2');
    var line3 = document.getElementById('ed2bline3');
    var line4 = document.getElementById('ed2bline4');
    var line5 = document.getElementById('ed2bline5');
    var line6 = document.getElementById('ed2bline6');
    var line7 = document.getElementById('ed2bline7');
    var line8 = document.getElementById('ed2bline8');

    //reset
    for (let i = 1; i <= 8; i++) {
        document.getElementById('ed2bline' + i).style.height = '0';
        document.getElementById('ed2bline' + i).style.opacity = '0';
    }
    lineAnim(line1, 0, 90);
    lineAnim(line2, 1000, 90);
    lineAnim(line3, 2000, 80);
    lineAnim(line4, 3000, 50);
    lineAnim(line5, 4000, 60);
    lineAnim(line6, 5000, 55);
    lineAnim(line7, 6000, 45);
    lineAnim(line8, 7000, 50);


    function lineAnim(el, elDelay, elHeight) {
        setTimeout(() => {
            el.animate([
                {
                    opacity: '0',
                    height: '0%'
                },
                {
                    opacity: '1',
                    height: elHeight + '%'
                }
            ], {
                    duration: 1200,
                    delay: elDelay
                });
            el.style.height = elHeight + '%';
        }, 2000);
    }
    reappearLine1();
    function reappearLine1() {
        for (let i = 1; i <= 8; i++) {
            setTimeout(() => {
                document.getElementById('ed2bline' + i).style.opacity = '1';
                document.getElementById('ed2bline' + i).style.display = 'block';

            }, 2000 + 1000 * i);
        }
    }


    //text animation in lines bottom
    animateLineText();
    function animateLineText() {
        var lineText = document.querySelectorAll('.ed2text2');

        //reset text
        for (let i = 0; i < 8; i++) {
            lineText[i].style.opacity = '0';
        }
        for (let j = 1; j <= 8; j++) {
            setTimeout(() => {
                lineText[j - 1].animate([
                    { transform: 'translate(0 , 0) ', opacity: '0' },
                    { transform: 'translate(-55%,55px) rotate(-90deg)', opacity: '1' }
                ], {
                        duration: 1200
                    })
                lineText[j - 1].style.opacity = '1';
            }, 3500 + 1000 * j)
        }
    }
}
//----------------------------------------------------------
//-------------END EDUCATION PAGE ANIMATIONS----------------
//----------------------------------------------------------

//----------------------------------------------------------
//---------------CONTACT PAGE ANIMATIONS--------------------
//----------------------------------------------------------


function displayNoneMedia() {
    cvButton.style.display = 'none';
    liButton.style.display = 'none';
    fbButton.style.display = 'none';
    ghButton.style.display = 'none';
}

function displayBlockMedia() {
    cvButton.style.display = 'block';
    liButton.style.display = 'block';
    fbButton.style.display = 'block';
    ghButton.style.display = 'block';

    ghButton.style.opacity = '0';
    cvButton.style.opacity = '0';
    fbButton.style.opacity = '0';
    liButton.style.opacity = '0';
}

function opacityFalseMedia() {
    setTimeout(() => {
        cvButton.style.opacity = '0';
    }, 700);
    setTimeout(() => {
        liButton.style.opacity = '0';
    }, 1200);
    setTimeout(() => {
        fbButton.style.opacity = '0';
    }, 450);
    setTimeout(() => {
        ghButton.style.opacity = '0';
    }, 950);
}

function opacityTrueMedia() {
    setTimeout(() => {
        cvButton.style.opacity = '1';
    }, 750);
    setTimeout(() => {
        liButton.style.opacity = '1';
    }, 1250);
    setTimeout(() => {
        fbButton.style.opacity = '1';
    }, 500);
    setTimeout(() => {
        ghButton.style.opacity = '1';
    }, 1000);
}

function smallCirclesAnimate() {
    leftC.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ], {
            duration: 1500,
            easing: 'ease-in-out',
            iterations: Infinity
        });

    rightC.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-360deg)' }
    ], {
            duration: 1500,
            easing: 'ease-in-out',
            delay: 150,
            iterations: Infinity
        });

    topC.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ], {
            duration: 1500,
            easing: 'ease-in-out',
            delay: 250,
            iterations: Infinity
        });

    bottomC.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-360deg)' }
    ], {
            duration: 1500,
            easing: 'ease-in-out',
            delay: 350,
            iterations: Infinity
        });
};

function smallCirclesHide() {
    leftC.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 300,
            easing: 'ease-in-out',
        });

    rightC.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 300,
            easing: 'ease-in-out',
        });

    topC.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 300,
            easing: 'ease-in-out',
        });

    bottomC.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
            duration: 300,
            easing: 'ease-in-out',
        });
}


function showMediaButtons() {
    fbButton.animate([
        { transform: 'translate(0%, 150px) scale(0)', opacity: '0' },
        { transform: 'translate(0, 0) scale(1)', opacity: '1' }
    ], {
            duration: 500
        });
    ghButton.animate([
        { transform: 'translate(-175px, 0%) scale(0)', opacity: '0' },
        { transform: 'translate(0 , 0) scale(1)', opacity: '1' }
    ], {
            duration: 500,
            delay: 500
        });
    cvButton.animate([
        { transform: 'translate(175px, 0%) scale(0)', opacity: '0' },
        { transform: 'translate(0px, 0px) scale(1)', opacity: '1' }
    ], {
            duration: 500,
            delay: 250
        });
    liButton.animate([
        { transform: 'translate(0%, -175px) scale(0)', opacity: '0' },
        { transform: 'translate(0, 0) scale(1)', opacity: '1' }
    ], {
            duration: 500,
            delay: 750
        });
};



function hideMediaButtons() {
    fbButton.animate([
        { transform: 'translate(0px, 0px) scale(1)', opacity: '1' },
        { transform: 'translate(0px, 150px) scale(0)', opacity: '0' }
    ], {
            duration: 500
        });
    ghButton.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: '1' },
        { transform: 'translate(-175px, 0px) scale(0)', opacity: '0' }
    ], {
            duration: 500,
            delay: 500
        });
    cvButton.animate([
        { transform: 'translate(0px, 0px) scale(1)', opacity: '1' },
        { transform: 'translate(175px, 0px) scale(0)', opacity: '0' }
    ], {
            duration: 500,
            delay: 250
        });
    liButton.animate([
        { transform: 'translate(0px, 0px) scale(1)', opacity: '1' },
        { transform: 'translate(0px, -200px) scale(0)', opacity: '0' }
    ], {
            duration: 500,
            delay: 750
        });
};

function bigCircleTransform() {

    console.log(bigCircle.style.borderBottom);
    if (bigCircle.style.borderBottom == '' || bigCircle.style.borderBottom == '5px solid white') {
        smallCirclesHide();
        setTimeout(() => {
            leftC.style.display = 'none';
            rightC.style.display = 'none';
            bottomC.style.display = 'none';
            topC.style.display = 'none';
            document.getElementById('textLogo').style.display = 'none';
        }, 300);
        bigCircle.animate([
            {
                transform: 'rotate(0deg)',
                borderTop: '5px solid white',
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderBottom: '5px solid transparent',
                height: '250px',
                width: '250px',
                borderRadius: '50%'
            },
            {
                transform: 'rotate(360deg)',
                borderTop: '160px solid white',
                borderLeft: '120px solid transparent',
                borderRight: '120px solid transparent',
                borderBottom: '0px solid transparent',
                height: '1px',
                width: '1px',
                borderRadius: '0%'
            }
        ], {
                duration: 1300
            });
        displayBlockMedia();
        setTimeout(() => {
            showMediaButtons();
            opacityTrueMedia();
            bigCircle.style = "border-top: 160px solid white; border-left: 120px solid transparent; border-right: 120px solid transparent; border-bottom: 0px solid transparent; height: 0px; width: 0px; border-radius: 0%";
        }, 1200);
    }
    else if (bigCircle.style.borderBottom == '0px solid transparent') {
        hideMediaButtons();
        opacityFalseMedia();
        setTimeout(() => {
            displayNoneMedia();
        }, 1000);
        setTimeout(() => {
            bigCircle.animate([
                {

                    transform: 'rotate(360deg)',
                    borderTop: '160px solid white',
                    borderLeft: '120px solid transparent',
                    borderRight: '120px solid transparent',
                    borderBottom: '0px solid transparent',
                    height: '1px',
                    width: '1px',
                    borderRadius: '0%',
                    backgroundColor: 'transparent'
                },
                {
                    transform: 'rotate(0deg)',
                    borderTop: '5px solid white',
                    borderLeft: '5px solid white',
                    borderRight: '5px solid white',
                    borderBottom: '5px solid white',
                    height: '250px',
                    width: '250px',
                    borderRadius: '50%',
                    backgroundColor: 'transparent'
                }
            ], {
                    duration: 1300
                });
        }, 1100);
        setTimeout(() => {
            leftC.style.display = 'block';
            rightC.style.display = 'block';
            bottomC.style.display = 'block';
            topC.style.display = 'block';
            bigCircle.style = "border-top: 5px solid white; border-left: 5px solid white; border-right: 5px solid white; border-bottom: 5px solid white; height: 250px; width: 250px; border-radius: 50%";
            document.getElementById('textLogo').style.display = 'block';
        }, 1800);
    }
}


function staticBigCircleAnimate() {
    bigCircle.animate([
        { transform: 'translate(0px, 0px)', borderRadius: '50%', boxShadow: '0px 0px 0px white' },
        { transform: 'translate(0px, -15px)', borderRadius: '70%', boxShadow: '10px 70px 50px -50px white' },
        { transform: 'translate(0px, 0px)', borderRadius: '50%', boxShadow: '0px 0px 0px white' }
    ], {
            duration: 1000,
            iterations: 2,
        })
};

// window.addEventListener('click', clickCounting);

// let countClicks = 0;
// function clickCounting() {

//     if(countClicks > 1){
//         countClicks = 0;
//     }
//     console.log(countClicks);
// }
//----------------------------------------------------------
//-------------END CONTACT PAGE ANIMATIONS------------------
//----------------------------------------------------------
var enButton = document.getElementById('en');
var roButton = document.getElementById('ro');

var createdSmall = false;



function createBigEducation(lang) {
    if (lang == 'en' || lang == 'ro') {
        $.ajax({
            type: "GET",
            url: "/getTextRoBig",
            dataType: 'json',
            success: (data) => {
                document.getElementById('ed1text1').innerHTML = data[20].text + '<br>' + data[19].text;
                document.getElementById('ed1text2').innerHTML = data[22].text + '<br>' + data[21].text;
                document.getElementById('ed1text3').innerHTML = data[24].text + '<br>' + data[23].text;
                document.getElementById('ed1text4').innerHTML = data[26].text + '<br>' + data[25].text;
                

                // setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
                // }, 2000);
            }
        });
    }
};


function createBigProjects(lang) {
    if (lang == 'ro') {
        $.ajax({
            type: "GET",
            url: "/getTextRoBig",
            dataType: 'json',
            success: (data) => {
                document.getElementById('projectsText1').innerHTML = data[14].text;
                document.getElementById('projectsText2').innerHTML = data[15].text;
                document.getElementById('projectsText3').innerHTML = data[16].text;
                document.getElementById('projectsText4').innerHTML = data[17].text;
                document.getElementById('projectsText5').innerHTML = data[18].text;

                // setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
                // }, 2000);
            }
        });
    }
    else if (lang == 'en') {
        $.ajax({
            type: "GET",
            url: "/getTextEnBig",
            dataType: 'json',
            success: (data) => {
                document.getElementById('projectsText1').innerHTML = data[14].text;
                document.getElementById('projectsText2').innerHTML = data[15].text;
                document.getElementById('projectsText3').innerHTML = data[16].text;
                document.getElementById('projectsText4').innerHTML = data[17].text;
                document.getElementById('projectsText5').innerHTML = data[18].text;
                
                // setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
                // }, 2000);
            }
        });
    }
};



function createBigContact(lang) {
    if (lang == 'ro') {
        $.ajax({
            type: "GET",
            url: "/getTextRoBig",
            dataType: 'json',
            success: (data) => {


                document.getElementById('col11').innerHTML = data[27].text;
                document.getElementById('col22').innerHTML = data[28].text;
                document.getElementById('col31').innerHTML = data[29].text;
                document.getElementById('col41').innerHTML = data[30].text;
                document.getElementById('col42').innerHTML = data[31].text;
                document.getElementById('col51').innerHTML = data[32].text;
                document.getElementById('col52').innerHTML = data[33].text;
                document.getElementById('col61').innerHTML = data[34].text;
                document.getElementById('col62').innerHTML = data[35].text;
                document.getElementById('col71').innerHTML = data[36].text;
                document.getElementById('col72').innerHTML = data[37].text;

                // document.getElementById('bigTextAbout1').innerHTML = data[13].text;
                // document.getElementById('bigTextAbout2').innerHTML = data[14].text;
                // document.getElementById('bigTextAbout3').innerHTML = data[15].text;

                // setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
                // }, 2000);
            }
        });
    }
    else if (lang == 'en') {
        $.ajax({
            type: "GET",
            url: "/getTextEnBig",
            dataType: 'json',
            success: (data) => {
                document.getElementById('col11').innerHTML = data[19].text;
                document.getElementById('col22').innerHTML = data[20].text;
                document.getElementById('col31').innerHTML = data[21].text;
                document.getElementById('col41').innerHTML = data[22].text;
                document.getElementById('col42').innerHTML = data[23].text;
                document.getElementById('col51').innerHTML = data[24].text;
                document.getElementById('col52').innerHTML = data[25].text;
                document.getElementById('col61').innerHTML = data[26].text;
                document.getElementById('col62').innerHTML = data[27].text;
                document.getElementById('col71').innerHTML = data[28].text;
                document.getElementById('col72').innerHTML = data[29].text;

                // document.getElementById('bigTextAbout1').innerHTML = data[13].text;
                // document.getElementById('bigTextAbout2').innerHTML = data[14].text;
                // document.getElementById('bigTextAbout3').innerHTML = data[15].text;

                // setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
                // }, 2000);
            }
        });
    }
};

function createBigAbout(lang) {
    if (lang == 'ro') {
        $.ajax({
            type: "GET",
            url: "/getTextRoBig",
            dataType: 'json',
            success: (data) => {


                document.getElementById('co1text1').innerHTML = data[1].text + "<br>" ;
                document.getElementById('co1text2').innerHTML = data[2].text;
                document.getElementById('co1f1').innerHTML = data[3].text;
                document.getElementById('co2text1').innerHTML = data[4].text + "<br>" ;
                document.getElementById('co2text2').innerHTML = data[5].text;
                document.getElementById('co1f2').innerHTML = data[6].text;
                document.getElementById('co3text1').innerHTML = data[7].text + "<br>" ;
                document.getElementById('co3text2').innerHTML = data[8].text;
                document.getElementById('co1f3').innerHTML = data[9].text;
                document.getElementById('co4text1').innerHTML = data[10].text + "<br>" ;
                document.getElementById('co4text2').innerHTML = '';
                document.getElementById('co1f4').innerHTML = data[0].text;

                document.getElementById('bigTextAbout1').innerHTML = data[11].text;
                document.getElementById('bigTextAbout2').innerHTML = data[12].text;
                document.getElementById('bigTextAbout3').innerHTML = data[13].text;

                // setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
                // }, 2000);
            }
        });
    }
    else if (lang == 'en') {
        $.ajax({
            type: "GET",
            url: "/getTextEnBig",
            dataType: 'json',
            success: (data) => {
                document.getElementById('co1text1').innerHTML = data[2].text + "<br>" ;
                document.getElementById('co1text2').innerHTML = data[30].text;
                document.getElementById('co1f1').innerHTML = data[3].text;
                document.getElementById('co2text1').innerHTML = data[4].text + "<br>" ;
                document.getElementById('co2text2').innerHTML = data[31].text;
                document.getElementById('co1f2').innerHTML = data[5].text;
                document.getElementById('co3text1').innerHTML = data[6].text + "<br>" ;
                document.getElementById('co3text2').innerHTML = data[7].text;
                document.getElementById('co1f3').innerHTML = data[8].text;
                document.getElementById('co4text1').innerHTML = data[9].text + "<br>" ;
                document.getElementById('co4text2').innerHTML = data[10].text;
                document.getElementById('co1f4').innerHTML = data[1].text;

                document.getElementById('bigTextAbout1').innerHTML = data[11].text;
                document.getElementById('bigTextAbout2').innerHTML = data[12].text;
                document.getElementById('bigTextAbout3').innerHTML = data[13].text;

                // setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
                // }, 2000);
            }
        });
    }
};


function createSmallPage(data) {

    if (createdSmall == true) {
        let m = 0;
        let n = 0;
        let o = 0;
        let p = 0;
        for (let a = 0; a < data.length; a++) {
            if (data[a].where1 === 'about') {
                document.querySelectorAll('#aboutPage > p')[m].innerHTML = data[a].text + "<br>";
                m++;
            }
            else if (data[a].where1 === 'projects') {
                document.querySelectorAll('#projectsPage > p')[n].innerHTML = data[a].text+ "<br>";
                n++;
            }
            else if (data[a].where1 === 'contact') {
                document.querySelectorAll('#contactPage > p')[o].innerHTML = data[a].text+ "<br>";
                o++;
            }
            else if (data[a].where1 === 'education') {
                document.querySelectorAll('#educationPage > p')[p].innerHTML = data[a].text+ "<br>";
                p++;
            }
        }
    }
    else if (createdSmall == false) {
        for (let a = 0; a < data.length; a++) {
            if (data[a].where1 === 'about') {
                var p = document.createElement('p');
                document.getElementById('aboutPage').appendChild(p);
                p.innerHTML = data[a].text + "<br>";
            }
            else if (data[a].where1 === 'projects') {
                var p = document.createElement('p');
                document.getElementById('projectsPage').appendChild(p);
                p.innerHTML = data[a].text + "<br>";
            }
            else if (data[a].where1 === 'contact') {
                var p = document.createElement('p');
                document.getElementById('contactPage').appendChild(p);
                p.innerHTML = data[a].text + "<br>";
            }
            else if (data[a].where1 === 'education') {
                var p = document.createElement('p');
                document.getElementById('educationPage').appendChild(p);
                p.innerHTML = data[a].text + "<br>";
            }
        }
    }
}

!(() => {
    document.getElementById('loaded').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    $.ajax({
        type: "GET",
        url: "/getTextEnSmall",
        dataType: 'json',
        success: (data) => {
            createSmallPage(data);
            createdSmall = true;
            // createBigContact('en');
            // setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('loaded').style.display = 'block';
            // }, 2000);
        }
    });
})();

enButton.addEventListener('click', () => {
    document.getElementById('loaded').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    createBigContact('en');
    createBigAbout('en');
    createBigProjects('en');
    createBigEducation('en');
    $.ajax({
        type: "GET",
        url: "/getTextEnSmall",
        dataType: 'json',
        success: (data) => {
            // console.log(data);
            createSmallPage(data);
            createdSmall = true;
            // setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('loaded').style.display = 'block';
            // }, 2000);
        }
    });

});

roButton.addEventListener('click', () => {
    createBigContact('ro');
    createBigAbout('ro');
    createBigProjects('ro');
    createBigEducation('ro');
    document.getElementById('loaded').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    $.ajax({
        type: "GET",
        url: "/getTextRoSmall",
        dataType: 'json',
        success: (data) => {
            createSmallPage(data);
            createdSmall = true;
            // setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('loaded').style.display = 'block';
            // }, 2000);
        }
    });

});



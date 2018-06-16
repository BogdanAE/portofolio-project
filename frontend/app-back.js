var enButton = document.getElementById('en');
var roButton = document.getElementById('ro');

var createdSmall = false;

function createSmallPage(data) {

    if (createdSmall == true) {
        let m = 0;
        let n = 0;
        let o = 0;
        let p = 0;
        for (let a = 0; a < data.length; a++) {
            if (data[a].where1 === 'about') {
                document.querySelectorAll('#aboutPage > p')[m].innerHTML = data[a].text;
                m++;
            }
            else if (data[a].where1 === 'projects') {
                document.querySelectorAll('#projectsPage > p')[n].innerHTML = data[a].text;
                n++;
            }
            else if (data[a].where1 === 'contact') {
                document.querySelectorAll('#contactPage > p')[o].innerHTML = data[a].text;
                o++;
            }
            else if (data[a].where1 === 'education') {
                document.querySelectorAll('#educationPage > p')[p].innerHTML = data[a].text;
                p++;
            }
        }
    }
    else if (createdSmall == false) {
        for (let a = 0; a < data.length; a++) {
            if (data[a].where1 === 'about') {
                var p = document.createElement('p');
                document.getElementById('aboutPage').appendChild(p);
                p.innerHTML = data[a].text;
            }
            else if (data[a].where1 === 'projects') {
                var p = document.createElement('p');
                document.getElementById('projectsPage').appendChild(p);
                p.innerHTML = data[a].text;
            }
            else if (data[a].where1 === 'contact') {
                var p = document.createElement('p');
                document.getElementById('contactPage').appendChild(p);
                p.innerHTML = data[a].text;
            }
            else if (data[a].where1 === 'education') {
                var p = document.createElement('p');
                document.getElementById('educationPage').appendChild(p);
                p.innerHTML = data[a].text;
            }
        }
    }
}

!(() => {
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
    }); 6
})();
enButton.addEventListener('click', () => {
    document.getElementById('loaded').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
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

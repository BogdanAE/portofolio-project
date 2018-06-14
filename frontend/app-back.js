var enButton = document.getElementById('en');
var roButton = document.getElementById('ro');


document.getElementById('loaded').style.display = 'none';

!(() => {
    $.ajax({
        type: "GET",
        url: "/getTextRo",
        dataType: 'json',
        success: (data) => {
            //console.log(data);
            edPg.innerHTML = data[0].text1;
            coPg.innerHTML = data[1].text1;
            prPg.innerHTML = data[2].text1;
            abPg.innerHTML = data[3].text1;
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
            }, 2000);
        }
    });6
})();
enButton.addEventListener('click', () => {
    $.ajax({
        type: "GET",
        url: "/getTextEn",
        dataType: 'json',
        success: (data) => {
            console.log(data);
            edPg.innerHTML = data[0].text1;
            coPg.innerHTML = data[1].text1;
            prPg.innerHTML = data[2].text1;
            abPg.innerHTML = data[3].text1;
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
            }, 2000);
        }
    });
});

roButton.addEventListener('click', () => {
    $.ajax({
        type: "GET",
        url: "/getTextRo",
        dataType: 'json',
        success: (data) => {
            console.log(data);
            edPg.innerHTML = data[0].text1;
            coPg.innerHTML = data[1].text1;
            prPg.innerHTML = data[2].text1;
            abPg.innerHTML = data[3].text1;
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loaded').style.display = 'block';
            }, 2000);
        }
    });
});

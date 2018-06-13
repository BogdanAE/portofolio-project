$.ajax({
    type: "GET",
    url: "/getTextRo",
    dataType: 'json',
    success: (data) => {
        console.log(data);
        abPg.innerHTML = data[0].text1;
        prPg.innerHTML = data[1].text1;
        coPg.innerHTML = data[2].text1;
        edPg.innerHTML = data[3].text1;
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('loaded').style.display = 'block';
        }, 2000);
    }
});
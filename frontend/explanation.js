// -------------------------------------------------------
// ---------------Explanation page text-------------------
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
            filter: "blur(" + getRandom(1, 6) + "px)"
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
// --------------END Explanation page text----------------
// -------------------------------------------------------
//Onload event
function goAway() {
    document.getElementById("loadScreen").style.display = "none";
}

//Overlay Toggle
var ol = document.getElementById("overlay-menu");

function openOverlay(){
    ol.style.width = "20%";
    ol.style.min_width = "200px";
}

function closeOverlay(){
    ol.style.width = "0px";
    ol.style.min_width = "0px";
}

//Random String and Remove Vowel
<<<<<<< HEAD
<<<<<<< HEAD
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
function randomStr() {
    out = document.getElementsByClassName("output");
    for (i = 0; i < out.length; i++){
        out[i].innerHTML = "";
        for (x = 0; x < 30; x++){
            //Extract a random index to pick a random letter to add into output area
            out[i].innerText += letters.charAt(Math.floor(Math.random() * letters.length));
=======
=======
>>>>>>> 5cd66d1f509d2dced476afd65f21de5ada6add4b
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
function randomStr() {
    out = document.getElementsByClassName("output");
    for (i = 0; i < out.length; i++){
        for (x = 0; x < 10; x++){
            out[i].innerText += chars.charAt(Math.floor(Math.random() * chars.length));
<<<<<<< HEAD
>>>>>>> 5cd66d1f509d2dced476afd65f21de5ada6add4b
=======
>>>>>>> 5cd66d1f509d2dced476afd65f21de5ada6add4b
        }
    }
}

function removeVowels() {
    out = document.getElementsByClassName("output");

    for (i = 0; i < out.length; i++) {
<<<<<<< HEAD
<<<<<<< HEAD
        /* Array Method
        var arr = out[i].innerText.split("");
        var pattern = /[^aeiou]/i;
        var filtered = arr.filter(x => x.match(pattern));
        }*/

        //String Method
        var pattern = /[^aeiou]/gi;
        noVowelResult = out[i].innerText.match(pattern);

        out[i].innerText = "";
        for (j = 0; j < noVowelResult.length; j++){
            out[i].innerText += noVowelResult[j];
        }
=======
=======
>>>>>>> 5cd66d1f509d2dced476afd65f21de5ada6add4b
        var arr = out[i].innerText.split("");
        var patt = /[aeiou]/i;

        var filtered = arr.filter(x => patt.match(x));
        console.log(filtered);
<<<<<<< HEAD
>>>>>>> 5cd66d1f509d2dced476afd65f21de5ada6add4b
=======
>>>>>>> 5cd66d1f509d2dced476afd65f21de5ada6add4b
    }
}
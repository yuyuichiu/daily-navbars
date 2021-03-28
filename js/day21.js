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
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
function randomStr() {
    out = document.getElementsByClassName("output");
    for (i = 0; i < out.length; i++){
        for (x = 0; x < 10; x++){
            out[i].innerText += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    }
}

function removeVowels() {
    out = document.getElementsByClassName("output");

    for (i = 0; i < out.length; i++) {
        var arr = out[i].innerText.split("");
        var patt = /[aeiou]/i;

        var filtered = arr.filter(x => patt.match(x));
        console.log(filtered);
    }
}
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

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

//Switching Tabs
function openTab(targetTabLink, targetTabContent){
    //1. Clear current display
    var tabContents = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabContents.length; i++){
        tabContents[i].style.display = "none";
    }

    //2. Clear Active Tab
    var tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active","");
    }

    //3. Turn on display of specific target ID
    document.getElementById(targetTabContent).style.display = "block";
    document.getElementById(targetTabLink).className += " active";
}

//Add Whitespace to camelCasing
function camelSpace(){
    var input1 = document.getElementById("input1").value;
    var output1 = document.getElementById("output1");
    var pattern = /([a-z])([A-Z])/g;

    output1.innerText = input1.replace(pattern, "$1 $2");
}

//Binary Convert
function binary(){
    var input2 = document.getElementById("input2").value;
    var output2 = document.getElementById("output2");

    output2.innerText = Number(input2).toString(2);
}
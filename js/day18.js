function menuToggle() {
    var x = document.getElementById("nav-links");

    if (x.style.visibility == "hidden"){
        x.style.visibility = "visible";
        x.style.height = "auto";
    }
    else{
        x.style.visibility = "hidden";
        x.style.height = 0;
    }
}
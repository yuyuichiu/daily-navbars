//Section 1
function nearestSun(){
    var now = new Date();
    //Loop through every year in between 2020 to 2100
    for (var year = 2020; year <= 2100; year++){
        //Declare 1/1/year as Date in now variable
        var now = new Date(year, 0, 1);
        //Checking Sunday
        if (now.getDay() === 0){
            alert(now.getFullYear() + " is true.");
        }
    }
}

//Section 2
var output1 = document.getElementById("output1");

function multiply(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    output.innerHTML = num1 * num2;
}

function divide(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    output1.innerHTML = num1 / num2;
}

//Section 3
var output2 = document.getElementById("output2");
function urlGen(){
    output2.innerHTML = document.URL;
}
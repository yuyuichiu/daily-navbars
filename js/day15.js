output = document.getElementById("output");

function guess(){
    var num = Math.ceil(Math.random() * 10);
    var getNum = prompt("Guess between 1 to 10!");

    if (getNum == num){
        output.innerHTML = "Matched";
    }
    else{
        output.innerHTML = "Not matched, the number is " + num;
    }
}

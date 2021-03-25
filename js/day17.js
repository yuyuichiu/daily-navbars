//innerHTML vs innerText vs textContent

//Section 1
function addStr(){
    var input1 = document.getElementById("input1").value;
    var output1 = document.getElementById("output1");

    if (input1.slice(0,2).toLowerCase() == "py") {
        output1.innerText = input1;
    }
    else{
        output1.innerText = "Py" + input1.toLowerCase();
    }
}

//Section 2
function removeStr(){
    var input2 = document.getElementById("input2").value;
    var pos = Number(document.getElementById("removeIndex").value);
    var removeLen = Number(document.getElementById("removeLength").value);
    
    var part1 = input2.substring(0, pos);
    var part2 = input2.substring(pos + removeLen);

    output2.innerText = part1 + part2;
}
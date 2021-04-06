function gcd(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    output = document.getElementById("GCDoutput");

    if (num1 == num2){
        output.innerText = "Greatest Common Divider is " + num1
        return
    }

    rawBig = (num1 < num2) ? num2 : num1;
    rawSmall = (num1 < num2) ? num1 : num2;

    while (rawBig > 0 && rawSmall > 0){
        while(rawBig > rawSmall){
            rawBig = rawBig % rawSmall;
        }
        if (rawBig < rawSmall){
            temp = rawSmall;
            rawSmall = rawBig;
            rawBig = temp;
        }
    }

    output.innerText = "Greatest Common Divider is " + rawBig;
}

function show(){
    document.getElementById("hiddentxt").style.visibility = "visible";
    document.getElementById("hiddentxt").style.opacity = 1;
}
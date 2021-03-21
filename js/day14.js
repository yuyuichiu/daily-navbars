var nowTime = new Date();
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");

//Output 1
function timeCount(){
    nowTime.setSeconds(nowTime.getSeconds() + 1);
    output1.innerHTML = nowTime;
}

var delayManager = {
    state: null,
    Start: function(func) {
        if (this.state == null){
            this.state = setInterval(func, 1000);
        }
    },
    End: function() {
        clearInterval(this.state);
        this.state = null;
    }
}

//Output 2
output2.innerHTML = "SomeCoolText ";
output2Loop = setInterval(swap, 150);

function swap(){
    var o2 = output2.childNodes[0];
    txt = o2.data;
    
    //Swap by extract components, swap and restructure
    txt = txt[txt.length - 1] + txt.substring(0, txt.length - 1);
    output2.innerHTML = txt;
}

//Output 3
var inputYr = document.getElementById("year").value;
function leapCheck(){
    console.log(inputYr);
    if (inputYr % 4 == 0){
        alert("yes");
    }
    else{
        alert("no");
    }
}
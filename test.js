var secCount = 0;

function sayHello(){
    var tar = document.getElementById("output");
    tar.innerHTML = "Hello!"
}

function secondCount(){
    var tar = document.getElementById("output");
    secCount += 1;
    tar.innerHTML = secCount + " seconds has passed..."
}

///////Delay Manager///////
var delayManager = {
    state: null,
    Start: function(){
        //Start a loop when delayManager.Start() is called
        //Delays or intervals stored in variable will start automatically
        this.state = setInterval(secondCount, 1000);
    },
    End: function(){
        //Stops the delay loop stored in "state"
        clearTimeout(this.state);
    }
}
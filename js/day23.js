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

//Add Whitespace to camelCasing
function switchTabs(targetContent, targetLink){
    // Clear display
    var tabContents = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabContents.length; i++){
        tabContents[i].style.display = "none";
    }
    // Clear active
    var tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active","");
    }
    // Toggle target
    document.getElementById(targetContent).style.display = "block";
    document.getElementById(targetLink).className += " active";
}

//Generate Random Dices
function randDice(){
    var result = []
    for (i = 0; i < 5; i++){
        result.push(Math.floor(Math.random() * 6) + 1);
    }
    
    score(result);
}

function score(dicesInput){
    var myDices = dicesInput.map( (x) => x );
    var score = 0;
    var tripleRule = {1:1000, 2:200, 3:300, 4:400, 5:500, 6:600};
    // Loop through 1~6 to check if the input contains triples
    for (diceValue = 1; diceValue <= 6; diceValue++){
        //Filter out specific numbers in input to check pattern
        if (myDices.filter(x => x === diceValue).length >= 3){
            score += tripleRule[diceValue] // Add score by rule
            // Remove dices that are used for scores
            for (i = 0; i < 3; i++){
                myDices.splice(myDices.indexOf(diceValue),1);
            }
        }
    }

    console.log(dicesInput);
    console.log(myDices);
    // Check remaining dices for single 1 and 5 (100pt and 50pt)
    if (myDices.filter(x => x === 1).length >= 1){
        score += 100;
    }
    if (myDices.filter(x => x === 5).length >= 1){
        score += 50;
    }

    document.getElementById("diceOutput").innerText += "Dice: " + dicesInput + "  Score: " + score + "\n";
}

function clearOutput(){
    document.getElementById("diceOutput").innerText = "";
}
var state = true;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var t = setInterval(Start, 1000);

var allBits = [];

ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 1000, 1000);


function Button() {
    var msg = document.querySelector("#input").value;

    allBits.splice(0, allBits.length);

    for (let i = 0; i < msg.length; i++) {
        const letter = msg.charCodeAt(i);
        console.log(letter);
        for (let j = 0; j < 8; j++) {
            var bit = (letter & (1 << j));
            if (bit > 0) {
                bit = 1;
            }
            else {
                bit = 0;
            }
            allBits[allBits.length] = bit;
            console.log(bit);
        } 
        console.log("\n");
    }
}

function Start() {

    if (state) {
        state = false;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, 1000, 1000);
    }
    else {
        state = true;
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 1000, 1000);
    }
}		

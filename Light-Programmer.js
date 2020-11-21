var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
var state = 1;

function changeColor(color) {
    document.body.style.background = color;
}

function gfg_Run() {
    if (state == 1) {
        state = 0;
        changeColor('Black');
    }
    else {
        state = 1;
        changeColor('White');
    }
}		
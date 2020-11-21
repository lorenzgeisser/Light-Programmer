var state = true;

function changeColor(color) {
    document.body.style.background = color;
}

function gfg_Run() {
    if (state) {
        state = false;
        changeColor('Black');
    }
    else {
        state = true;
        changeColor('White');
    }
}		

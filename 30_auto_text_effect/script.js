const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = `Hi, I'm Hyunji!`;

let idx = 1; // increment the number of the text shown one by one
let speed = 300 / speedEl.value; // start by speed of 300 

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if(idx > text.length) {
        idx = 1; // have this keep going after typing all the texts
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})
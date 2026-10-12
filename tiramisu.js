const STILL_SRC = "tiramisu/pixil-frame-0%20(1).png";
const GIF_SRC = "tiramisu/output-onlinegiftools.gif";
const TIRAMISU_SRC = "tiramisu/pixil-frame-0%20(2).png";
const GIF_LENGTH = 600; // the gif is 3 frames: 100ms + 100ms + 400ms

const stage = document.getElementById("stage");
const button = document.getElementById("character-button");
const character = document.getElementById("character");
const countDisplay = document.getElementById("count");

let count = 0;
let gifTimer = null;

// load these up front so the first click doesn't flicker
[GIF_SRC, TIRAMISU_SRC].forEach((src) => {
    new Image().src = src;
});

function playGif() {
    // clearing the src first makes the gif start again from its first frame
    character.src = "";
    character.src = GIF_SRC;

    clearTimeout(gifTimer);
    gifTimer = setTimeout(() => {
        character.src = STILL_SRC;
    }, GIF_LENGTH);
}

function showPlusOne() {
    const popup = document.createElement("div");
    popup.className = "plus-one";

    const crop = document.createElement("div");
    crop.className = "plus-one-crop";

    const tiramisu = document.createElement("img");
    tiramisu.src = TIRAMISU_SRC;
    tiramisu.alt = "";

    const text = document.createElement("span");
    text.textContent = "+1";

    crop.appendChild(tiramisu);
    popup.appendChild(crop);
    popup.appendChild(text);
    stage.appendChild(popup);

    popup.addEventListener("animationend", () => popup.remove());
}

button.addEventListener("click", () => {
    count += 1;
    countDisplay.textContent = count;
    playGif();
    showPlusOne();
});

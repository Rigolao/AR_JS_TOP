const switchButton = document.querySelector('#switch-button');
const model1 = document.querySelector("#magnemite");
const model2 = document.querySelector("#dragonite");

switchButton.addEventListener('click', () => {
    if (model1.getAttribute("scale").x === 0.1) {
        model1.setAttribute("scale", "0 0 0");
        model2.setAttribute("scale", "0.01 0.01 0.01");
    } else {
        model1.setAttribute("scale", "0.1 0.1 0.1");
        model2.setAttribute("scale", "0 0 0");
    }
});

let isMouseDown = false;
let previousMouseX = 0;

function rotateModel(event) {
    const magnemiteModel = document.querySelector('#magnemite');
    const dragoniteModel = document.querySelector('#dragonite');
    if (isMouseDown) {
        const deltaX = event.clientX - previousMouseX;
        const rotation = magnemiteModel.getAttribute('rotation');
        magnemiteModel.setAttribute('rotation', {
            x: rotation.x,
            y: rotation.y + deltaX * 0.5,
            z: rotation.z
        });
        dragoniteModel.setAttribute('rotation', {
            x: rotation.x,
            y: rotation.y + deltaX * 0.5,
            z: rotation.z
        });
        previousMouseX = event.clientX;
    }
}

document.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    previousMouseX = event.clientX;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('mousemove', rotateModel);
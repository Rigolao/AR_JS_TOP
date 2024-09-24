

const switchButton = document.querySelector('#switch-button');

const model1 = document.querySelector("#magnemite");
const model2 = document.querySelector("#dragonite");

switchButton.addEventListener('click', () => {
    console.log(model1.getAttribute("scale"))
    if (model1.getAttribute("scale").x === 0.1) {
        model1.setAttribute("scale", "0 0 0")
        model2.setAttribute("scale", "0.01 0.01 0.01")
    } else {
        model1.setAttribute("scale", "0.1 0.1 0.1")
        model2.setAttribute("scale", "0 0 0")
    }
})
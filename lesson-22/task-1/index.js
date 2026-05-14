const elem = document.querySelector(".rect_div");
const p = document.querySelector(".rect_p");
const span = document.querySelector(".rect_span");
const evenstListSelector = document.querySelector(".events-list");
const buttonClearElement = document.querySelector(".clear-btn");
const buttonRemoveHandlers = document.querySelector(".remove-handlers-btn");
const buttonAttachHandlers = document.querySelector(".attach-handlers-btn");

function checkEventClick(text, color) {
    evenstListSelector.innerHTML += `<span style = "color: ${color}; margin-left: 8px">${text}</span>`;
}

const bindGreenDiv = checkEventClick.bind(null, "DIV", "green");
const bindGreenP = checkEventClick.bind(null, "P", "green");
const bindGreenSpan = checkEventClick.bind(null, "DIV", "green");
const bindGrayDiv = checkEventClick.bind(null, "DIV", "grey");
const bindGrayP = checkEventClick.bind(null, "P", "grey");
const bindGraySpan = checkEventClick.bind(null, "DIV", "grey");

function clearContentButton() {
    evenstListSelector.innerHTML = "";
}

function removeHandlerButton() {
    elem.removeEventListener("click", bindGreenDiv);
    p.removeEventListener("click", bindGreenP);
    span.removeEventListener("click", bindGreenSpan);
    elem.removeEventListener("click", bindGrayDiv, true);
    p.removeEventListener("click", bindGrayP, true);
    span.removeEventListener("click", bindGraySpan, true);
}

function attachHanlerButton() {
    elem.addEventListener("click", bindGreenDiv);
    p.addEventListener("click", bindGreenP);
    span.addEventListener("click", bindGreenSpan);

    elem.addEventListener("click", bindGrayDiv, true);
    p.addEventListener("click", bindGrayP, true);
    span.addEventListener("click", bindGraySpan, true);
}

attachHanlerButton();
buttonClearElement.addEventListener("click", clearContentButton);
buttonRemoveHandlers.addEventListener("click", removeHandlerButton);
buttonAttachHandlers.addEventListener("click", attachHanlerButton);

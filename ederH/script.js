initHeaderText = () => {
    let header = document.getElementById("header");

    header.innerText = "Hello world!"
}

bindEvents = () => {
    initHeaderText();
}

document.addEventListener("DOMContentLoaded", (e) => {
    bindEvents();

})
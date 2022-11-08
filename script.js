let createDiv = document.querySelector(".createDiv");

function cursorAnimation(e) {
    let movingDivs = document.querySelectorAll(".movingDiv");
    if (movingDivs.length < 10) {
        let movingElement = document.createElement("div");
        movingElement.classList.add("movingDiv");
        createDiv.appendChild(movingElement);
        movingElement.style.transition = "all 0.3s linear"
        movingElement.style.left = e.clientX + "px"
        movingElement.style.top = e.clientY + "px"
        movingElement.style.top = movingElement.offsetTop - 50 + "px"
        movingElement.style.visibility = "hidden"

        setTimeout(() => {
            createDiv.removeChild(movingElement);
        }, 100)
    }

}

document.addEventListener("mousemove", cursorAnimation);
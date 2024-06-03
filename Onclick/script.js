function log(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element) {
    element.style.visibility = "hidden";
}

function like() {
    alert("Ninja was liked");
}
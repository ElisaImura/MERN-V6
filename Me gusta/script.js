function like(element) {
    var number = element.getAttribute("data");
    var num = document.querySelector("#numLikes-"+number).innerText;
    num++;
    document.querySelector("#numLikes-"+number).innerText = num;
}
var menu = document.getElementById("menu");
var ul = document.getElementById("ulitem");
var menubtn = document.getElementsByClassName("menu_btn");
ul.style.left = "-500px"
menu.onclick = function() {
    if (ul.style.left == "-500px") {
        ul.style.left = "0"
        menu.src = "images/close.png"
    } else {
        ul.style.left = "-500px"
        menu.src = "images/menu.png"
    }
}
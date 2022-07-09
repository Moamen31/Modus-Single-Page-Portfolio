//get elements
let menu = document.querySelector(".toggle-menu")
let links = document.querySelector(".links")

menu.addEventListener("click", function(){
    links.classList.toggle("show")
})
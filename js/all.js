const MENU = document.getElementById("menu");

(window).onload = function(){
    handleMenu();
}   

function handleMenu(elm){
    elm = exists(elm) ? elm : document.getElementById("menuBtn");
    const menuInput = topHeader.querySelector(".menu-btn");
    menuInput.checked = false;
    elm.onclick = function(){
        if (menuInput.checked){
            topHeader.removeClass("bg-secondary");
            MENU.fadeOut(0.2);
        } else {
            topHeader.addClass("bg-secondary");
            MENU.fadeIn(0.2);
        }
    }
}
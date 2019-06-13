const MENU = document.getElementById("menu");
const LOGO = document.getElementById("logo");


(window).onload = function(){
    handleMenu();
    categoriesSlide();
}   

function handleMenu(elm){
    elm = exists(elm) ? elm : document.getElementById("menuBtn");
    const menuInput = topHeader.querySelector(".menu-btn");
    menuInput.checked = false;
    elm.onclick = function(){
        if (menuInput.checked){
            topHeader.removeClass("bg-secondary");
            MENU.fadeOut(0.2);
            LOGO.addClass("d-none");
        } else {
            topHeader.addClass("bg-secondary");
            MENU.fadeIn(0.2);
            LOGO.removeClass("d-none");
        }
    }
}

function categoriesSlide(){

    new Glide('#categories', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        rewind:false
    }).mount();

    //categories.querySelector("ul").style.width = "100%";
    categories.querySelectorAll("li").forEach((li) => {
        li.style.width = "100%";
    })

}
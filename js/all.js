const MENU = document.getElementById("menu");
const LOGO = document.getElementById("logo");
const CATEGORIES = document.getElementById("categories");

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

    // categories element not loaded, do nothing
    if (!CATEGORIES) return;

    const list = CATEGORIES.querySelectorAll('li');
    const index = list.indexOf(CATEGORIES.querySelector("li:not(.glide__slide--clone).active"));

    new Glide('#categories', {
        type: 'carousel',
        perView: 3,
        startAt:index
    }).mount();

    //categories.querySelector("ul").style.width = "100%";
    CATEGORIES.querySelectorAll("li").forEach((li) => {
        li.style.width = "100%";
    })

}
const SHARE_BTN = document.getElementById("shareBtn");

SHARE_BTN.onclick = function(){
    const span = this.querySelector("span");
    const socialIcons = this.closest("ul").querySelectorAll(".social-icon");

    if (this.hasClass("active")){
        span.innerText = this.dataset.text;
        this.removeClass("lg active");
        socialIcons.forEach((icon) => {
            icon.addClass("d-none");
        });
    } else {
        this.dataset.text = span.innerText;
        this.querySelector("span").clear();
        this.addClass("lg active");
        socialIcons.forEach((icon) => {
            icon.removeClass("d-none");
        });
    }    
}
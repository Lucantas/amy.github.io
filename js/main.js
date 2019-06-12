if (!Object.prototype.hide){
    Object.prototype.hide = function(){
        this.style.display = "none";
    }
}

if (!Object.prototype.fadeIn){
    Object.prototype.fadeIn = function(time){
        time = time || .3;
        toggleVisibility(this,time,0,100);
    }
}

if (!Object.prototype.fadeOut){
    Object.prototype.fadeOut = function(time){
        time = time || .3;
        toggleVisibility(this,time,100,0);
    }
}

if (!Object.prototype.addClass){
    Object.prototype.addClass = function(){
        var items;
        if (arguments[0].split(" ").length > 0){
            items = arguments[0].split(" ");
        } else {
            items = Array.from(arguments);
        }
        items.forEach((className) => {
            if (!this.classList.contains(className)){
                this.classList.add(className);
            }
        })
    }
}

if (!Object.prototype.removeClass){
    Object.prototype.removeClass = function(className){
        var items;
        if (arguments[0].split(" ").length > 0){
            items = arguments[0].split(" ");
        } else {
            items = Array.from(arguments);
        }
        items.forEach((className) => {
            if (this.classList.contains(className)){
                this.classList.remove(className);
            }
        })       
    }
}

if (!Node.prototype.clear){
	Node.prototype.clear = function(){
		this.innerText = "";
		this.innerHtml = "";
	}
}

if (!Node.prototype.hasClass){
    Node.prototype.hasClass = function(className){
        if (this.classList.contains(className)) return true;
        return false;
    }
}


function exists(variable){
    switch ( variable ){
        case undefined:
        case null:
            return false;
        default:
            return true;
    }
}

function toggleVisibility(element,time,initial,end){
    if(initial == 0){
        increment = 2;
        element.style.display = "block";
        element.removeClass("hidden");
    }else {
        increment = -2;
        element.addClass("hidden");
    }

    opc = initial;

    interval = setInterval(() => {
        if(opc == end){
            if(end == 0){
                element.style.display = "none";
            }
            clearInterval(interval);
        } else {
            opc += increment;
            element.style.opacity = opc/100;
            element.style.filter = "alpha(opacity="+opc+")";
        }
    },time * 10);
}
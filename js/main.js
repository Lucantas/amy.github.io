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
    Object.prototype.addClass = function(className){
        if (!this.classList.contains(className)){
            this.classList.add(className);
        }
    }
}

if (!Object.prototype.removeClass){
    Object.prototype.removeClass = function(className){
        if (this.classList.contains(className)){
            this.classList.remove(className);
        }
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
    }else {
        increment = -2;
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

const delayMili = 4000;
const delayMili_hide = 3500;
const delayMili2 = 3000;
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function conjureSpell(){
    new Audio("button-click.mp3").play();
    document.getElementById("theImage").src="witch_chant3.jpg";
    document.getElementById("theImage").classList="img_active";
    setTimeout(function(){
        new Audio("click.mp3").play();
    }, delayMili2);

    setTimeout(function(){
        document.getElementById("theImage").classList="hidden";
    }, delayMili_hide);
    
    setTimeout(function(){
        document.getElementById("theImage").src="idle_witch_animated.gif";
        document.getElementById("theImage").classList="img_idle";
    }, delayMili);

};


function banishSpell(){
    new Audio("button-click.mp3").play();
    document.getElementById("theImage").src="witch_banish.png";
    document.getElementById("theImage").classList="img_active";
    setTimeout(function(){
    }, delayMili2);
    
    setTimeout(function(){
        document.getElementById("theImage").classList="hidden";
    }, delayMili_hide);
    
    setTimeout(function(){
        document.getElementById("theImage").src="idle_witch_animated.gif";
        document.getElementById("theImage").classList="img_idle";
    }, delayMili);

};







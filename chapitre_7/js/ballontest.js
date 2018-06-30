//test pas à pas balle rebondissante
var demarrer = document.getElementById("demarrer");
var arreter = document.getElementById("arreter");
var ballon = document.getElementById("ballon");
var cadre = document.getElementById("cadre");
var largeurBallon = parseFloat(getComputedStyle(ballon).width); //largeur de l'image
var animationId = null;
var sens = 1; // direction
var vitesse = 4;

// 1- déplacer la balle
// 2- déplacer au click
// 3- arrêter au click
// 4- arrêter au bord du cadre droite
// 5- inverser le sens au bout du cadre
function moove() {
    demarrer.disabled = true;
    arreter.disabled = false;
    var lBloc = parseFloat(getComputedStyle(ballon).left); //par rapport à gauche
    var xCadre = parseFloat(getComputedStyle(cadre).width); //largeur du carde
    if (lBloc + largeurBallon <= xCadre) {        
        ballon.style.left = (lBloc + sens * vitesse) + "px";
        animationId = requestAnimationFrame(moove);        
        
    } else {
        sens = -sens; //vers la gauche
        ballon.style.left = (lBloc + sens * vitesse) + "px";
        animationId = requestAnimationFrame(moove);
    }
    
    
    
}

function stop() {
    demarrer.disabled = false;
    arreter.disabled = true;    
    cancelAnimationFrame(animationId);
}

// au click sur démarrer 
demarrer.addEventListener("click", moove)
//au click sur démarrer
arreter.addEventListener("click", stop)


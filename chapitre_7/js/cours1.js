var compteurElt = document.getElementById("compteur");

// diminue le compteur jusqu'à 0
function diminuerCompteur() {
    //conversion en nombre du text du compteur
    var compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        // annule l'exécution répétée
        clearInterval(intervalID);
        // modifie le titre de la page
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!";
        // modifie le titre après 2 secondes
        setTimeout(function () {
            titre.textContent = "Tout est cassé !";
        }, 2000);
        
    }
}
//appelle la fonction diminuerCompteur toutes les secondes 
var intervalID = setInterval(diminuerCompteur, 1000);

//-----------------
var bloc = document.getElementById("bloc");
var cadre = document.getElementById("cadre");
var vitesse = 7; // Valeur du déplacement en pixels
// Conversion en nombre de la largeur du bloc (valeur de la forme "XXpx")
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null; // Identifiant de l'animation

// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if (xBloc + largeurBloc <= xMax) { // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        bloc.style.left = (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBloc);
    } else {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }
}

//animationId = requestAnimationFrame(deplacerBloc); // Début de l'animation    
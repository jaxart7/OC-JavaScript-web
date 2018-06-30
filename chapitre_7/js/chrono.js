//démarrer et arrêter un chronomètre
var bouton = document.getElementById("chrono");
var compteur = document.getElementById("compteur");
var intervalId = null;
var demarre = false; //démarré = true, arrêté = false

function augmenterComteur() {
    compteur.textContent = Number(compteur.textContent) + 1;
}

bouton.addEventListener("click", function () {
    if (!demarre) {
        intervalID = setInterval(augmenterComteur, 1000);
        bouton.textContent = "Arrêter";
    } else {
        clearInterval(intervalID);
        bouton.textContent = "Démarrer";
    }
    demarre = !demarre;
})

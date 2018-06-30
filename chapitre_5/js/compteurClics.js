// Compter le nombre de clics

// crée les variables pour simplifier
var clicElt = document.getElementById("clic");
var desactElt = document.getElementById("desactiver");
var i = 0; // nombre de clics

//compter les clics
clicElt.addEventListener("click", function () {
    i++; //incrémente le compteur
    document.getElementById("compteurClics").textContent = i;
})

// désactiver les clics
desactElt.addEventListener("click", function () {
    i = 0; //RAZ
    document.getElementById("compteurClics").textContent = i;
})
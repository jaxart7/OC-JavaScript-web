// clique sur une lettre affiche mot et def par ordre alphabétique
var lettres = document.getElementById("lettres");
var mots = document.getElementById("mots");

// fonction qui ajoute le terme et la définiton à la page
function AjouterElt(lettre) {
    // Reset le champs de recherche
    mots.innerHTML = "";
    console.log("clique sur + " + lettre);
    // requête AJAX
    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + lettre, function (reponse) {
        // transforme la réponse en un tableau
        var reponses = JSON.parse(reponse);
        // Terme et définition
        reponses.forEach(function(elt) {
            var mot = document.createElement("h3");
            mot.textContent = elt.term;
            var def = document.createElement("p");
            def.textContent =  elt.definition;
            mots.appendChild(mot);
            mots.appendChild(def);
        });
        // S'il n'y a pas de mot dans la réponse
        if (mots.textContent === "") {
            var erreur = document.createElement("p");
            erreur.textContent = "Aucun mot trouvé pour " + lettre;
            mots.appendChild(erreur);
        }
    })
}
// donne un id à chaque lettre : id=lettreA ...
var listeLettres = lettres.querySelectorAll("a");
listeLettres.forEach(function(lienElt) {
    lienElt.id = "lettre" + lienElt.textContent;
});

// Détail : click sur chaque lettre (event)
var lettreA = document.getElementById("lettreA");
var lettreB = document.getElementById("lettreB");
var lettreC = document.getElementById("lettreC");
var lettreD = document.getElementById("lettreD");
var lettreE = document.getElementById("lettreE");
lettreA.addEventListener("click", function () {
    //fonction pour ajouter les mots et defs à la page
    AjouterElt("A");
});
lettreB.addEventListener("click", function () {
    AjouterElt("B");
});
lettreC.addEventListener("click", function () {
    AjouterElt("C");
});
lettreD.addEventListener("click", function () {
    AjouterElt("D");
});
lettreE.addEventListener("click", function () {
    AjouterElt("E");
});

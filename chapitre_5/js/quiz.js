// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];
// TODO
// lister les 3 questions dans la div "contenu"
var i = 0;
questions.forEach(function (question) {
    // ligne 1
    var ligne1 = document.createElement("p");
    // question i + 1
    var strongElt = document.createElement("strong");
    strongElt.textContent = "Question " + (i + 1) + " : ";
    // enoncé
    var enonceelt = document.createTextNode(question.enonce);
    // ajout à la ligne 1
    ligne1.appendChild(strongElt);
    ligne1.appendChild(enonceelt);
    // ajout de la ligne1 à la page
    document.getElementById("contenu").appendChild(ligne1);

    //ligne 2 (contenant div l2)
    var divL2 = document.createElement("div");
    divL2.id = "l2";
    var ligne2 = document.createElement("button");
    ligne2.textContent = "Afficher la réponse";
    ligne2.style.marginBottom = "10px";
    divL2.appendChild(ligne2);
    document.getElementById("contenu").appendChild(divL2);

    // affichage réponse à l'énoncé
    // crée l'élément à affiché
    var reponseElt = document.createElement("p");
    reponseElt.textContent = question.reponse;
    // remplacer le bouton par la réponse au click
    ligne2.addEventListener("click", function (e) {
        divL2.innerHTML = "";
        divL2.appendChild(reponseElt);
    })
})
//saisie de l'utilisateur
var couleurP = prompt("Quel couleur pour la police ?");
var couleurFond = prompt("Quel couleur pour le fond ?");

var pElts = document.getElementsByTagName("div");

for (var i = 0; i < pElts.length; i++) {
    pElts[i].style.color = couleurP;
    pElts[i].style.backgroundColor = couleurFond;
}

// lien vers l'url wikipedia après la liste

//texte
var texte = document.createElement("p");
texte.appendChild(document.createTextNode("En voici une "));
var lien = document.createElement("a");
lien.textContent = "liste";
lien.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
texte.appendChild(lien);
texte.appendChild(document.createTextNode(" plus complète."));

// ajoute du texte sur la page
document.getElementById("contenu").appendChild(texte);
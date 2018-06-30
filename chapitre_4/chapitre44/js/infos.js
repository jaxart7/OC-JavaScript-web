//crée le texte
var infoText = document.createElement("p");
infoText.textContent = "Informations sur l'élément :";

// crée les détails
var liste = document.createElement("ul");
var puceH = document.createElement("li");
var puceL = document.createElement("li");

var styleContenu = getComputedStyle(document.getElementById("contenu"));
var H = styleContenu.height;
var L = styleContenu.width;

// définition des puces
puceH.textContent = "Hauteur : " + H;
puceL.textContent = "Longueur : " + L;

// ajout des puces à la liste
liste.appendChild(puceH);
liste.appendChild(puceL);

//intégration
document.getElementById("infos").appendChild(infoText);
document.getElementById("infos").appendChild(liste);
//accéder à l'élément contenu
var styleContenu = getComputedStyle(document.getElementById("contenu"));

//crée la liste
var ulElt = document.createElement("ul"); //crée la liste
var liElt1 = document.createElement("li"); //crée les puces
var liElt2 = document.createElement("li");

liElt1.textContent = "Hauteur : " + styleContenu.height + " px";
liElt2.textContent = "Longueur : " + styleContenu.width + " px";

//ajout li à la liste
ulElt.appendChild(liElt1);
ulElt.appendChild(liElt2);

//ajouter
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément")); 
document.getElementById("infos").appendChild(ulElt);
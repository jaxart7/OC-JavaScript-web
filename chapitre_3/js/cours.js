//ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// suprression du contenu html de la liste
//document.getElementById("langages").innerHTML = "";

// Modification du contenu  textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// définition de l'attibut "id" du premier titre
//document.querySelector("h1").id = "titre";

// les class classList
var titreElt = document.querySelector("h1"); // accès au premier titre
titreElt.classList.remove("debut"); //efface class debut
titreElt.classList.add("titre"); // ajoute classe titre
console.log(titreElt)

// ajout langage python à la liste
var pythonElt = document.createElement("li");
pythonElt.id = "python";
pythonElt.textContent = "Python",
document.getElementById("langages").appendChild(pythonElt);

var rubyElt = document.createElement("li"); 
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(rubyElt);

var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

document.getElementById("langages").insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');

//remplament element de liste
var bachElt = document.createElement("li");
bachElt.is = "bash";
bachElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bachElt, document.getElementById("perl"));

//supprimer un noeud
document.getElementById("langages").removeChild(document.getElementById("csharp"));

//ajout lien URL wiki sous la liste
var lienWiki = '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complète</p>'
document.getElementById("langages").insertAdjacentHTML("afterEnd", lienWiki);
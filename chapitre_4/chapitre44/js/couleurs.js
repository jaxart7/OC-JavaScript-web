// changer la couleur du fond de paragraphe
// changer la couleur du texte de ...

var divElts = document.querySelectorAll("div");

var pEltsFond = prompt("Quelle couleur pour le fond ?");
var pEltsText = prompt("Quelle couleur pour le texte ?");

divElts.forEach(function(para) {
    para.style.backgroundColor = pEltsFond;
    para.style.color = pEltsText;
})
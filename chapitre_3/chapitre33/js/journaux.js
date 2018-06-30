// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
journaux.forEach(function(lien) {
    // crée l'élément
    var lienElt = document.createElement("a");
    // définition de l'élément
    lienElt.href = lien;
    lienElt.textContent = lien;    
    // intégration de l'élément sur la page
    document.getElementById("contenu").appendChild(lienElt);
    // saut de ligne    
    document.getElementById("contenu").appendChild(document.createElement("br"));
    
})

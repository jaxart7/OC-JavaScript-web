// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
journaux.forEach(function(lien) {
    var Lien = document.createElement("a");
    Lien.textContent = lien;
    Lien.href = lien;
    document.getElementById("contenu").appendChild(Lien);
    document.getElementById("contenu").appendChild(document.createElement("br"));
})
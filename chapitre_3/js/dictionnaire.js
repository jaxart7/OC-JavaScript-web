// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
var dlElt = document.createElement("dl");

mots.forEach(function(dico) {
    var mot = document.createElement("dt"); // crée le dt
    var strongElt = document.createElement("strong");
    strongElt.textContent = dico.terme;

    var def = document.createElement("dd"); // crée le dd
    def.textContent = dico.definition;

    document.getElementById("contenu").appendChild(strongElt);
    document.getElementById("contenu").appendChild(mot);
    document.getElementById("contenu").appendChild(def);
})
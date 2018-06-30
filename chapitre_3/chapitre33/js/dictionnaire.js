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

var Liste = document.createElement("dl"); //crée la liste


mots.forEach(function(mot) {
    // création
    var motTerme = document.createElement("dt");
    var strongTerme = document.createElement("strong");
    strongTerme.textContent = mot.terme;
    motTerme.appendChild(strongTerme);
    // ajout du terme à la page
    Liste.appendChild(motTerme);
    
    var motDef = document.createElement("dd");  
    motDef.textContent = mot.definition;
    Liste.appendChild(motDef);    
})

document.getElementById("contenu").appendChild(Liste);
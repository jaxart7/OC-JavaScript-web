// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return [];
    }
}

//liste déroulante
for (var i = 0; i < maisons.length; i++) {
    var optionElt = document.createElement("option");
    optionElt.value = maisons[i].code;
    optionElt.textContent = maisons[i].nom;
    document.getElementById("maison").appendChild(optionElt);
}

//ajout des puces à l'option choisie
document.getElementById("maison").addEventListener("change", function (e) {
    var famille = getPersonnages(e.target.value);
    document.getElementById("persos").innerHTML = ""; //vider la liste précédente
    for (var i = 0; i < famille.length; i++) {
        var puceElt = document.createElement("li");
        puceElt.textContent = famille[i];
        document.getElementById("persos").appendChild(puceElt);
    }
})
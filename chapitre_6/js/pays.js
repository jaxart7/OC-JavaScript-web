// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var paysElt = document.querySelector("input");
var suggestionsElt = document.getElementById("suggestions");

// gère la changement de valeur saisie
paysElt.addEventListener("input", function () {
    suggestionsElt.innerHTML = ""; // vide la liste
    listePays.forEach(function (pays) {
        //si correspondance
        if (pays.indexOf(paysElt.value) === 0) {
            var suggestionElt = document.createElement("div");
            suggestionElt.classList.add("suggestion");
            suggestionElt.textContent = pays;
            //gère le clic sur une suggestion
            suggestionElt.addEventListener("click", function (e) {
                // remplace la valeur saisie par la suggestion cliquée
                paysElt.value = e.target.textContent;
                //vide la liste après le clic sur le choix de suggestion
                suggestionsElt.innerHTML = "";
            });
            suggestionsElt.appendChild(suggestionElt);
        }
    });
});






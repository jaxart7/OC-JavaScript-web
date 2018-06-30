/* var avion = {
    marque: "Airbus",
    couleur: "A320"
};
console.log(avion);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
// Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvion));

var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions)); */

/* ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // afiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
}); */

// Afficher la liste des langages sur la page : <ul id="langages">
// Séparer la chaine de caractère des langages avec split

function afficher(reponse) {
    var reponseString = reponse;
    console.log(reponseString);    
    var reponseArray = reponseString.split(";");
    console.log(reponseArray);
    reponseArray.forEach(function (element) {
        // créer les puces LI pour chaque élément
        var puceElt = document.createElement("li");
        puceElt.textContent = element;
        // ajoute puce à la page
        document.getElementById("langages").appendChild(puceElt);
    })
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);
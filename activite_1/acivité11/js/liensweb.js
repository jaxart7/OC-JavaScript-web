/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

listeLiens.forEach(function (siteWeb) {
    // crée la classe lien x3
    var classLien = document.createElement("div");
    classLien.classList.add("lien");

    //crée la 1ère ligne ttittre + url
    var ligne1 = document.createElement("h4"); //contenant
    ligne1.style.margin = "0px";
    var titreLien = document.createElement("a"); // titre
    titreLien.textContent = siteWeb.titre;
    titreLien.href = siteWeb.url;
    titreLien.style.textDecoration = "none";
    titreLien.style.color = "#428bca";
    var urlLien = document.createElement("span"); //url
    urlLien.textContent = " " + siteWeb.url;

    //Crée la 2eme ligne
    var ligne2 = document.createElement("span");
    ligne2.textContent = "Ajouté par " + siteWeb.auteur;

    // ajout à la div class .lien
    ligne1.appendChild(titreLien); // ajout titre 
    ligne1.appendChild(urlLien); //ajout url
    classLien.appendChild(ligne1); // ajout de la 1ere ligne
    classLien.appendChild(ligne2); // ajout de la 2eme ligne
    
    // ajout de la div .lien à la page
    document.getElementById("contenu").appendChild(classLien);

})
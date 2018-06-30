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

listeLiens.forEach(function(siteWeb) {
    // crée la classe lien x3
    var classLien = document.createElement("div");
    classLien.class = lien;
    //crée la 1ère ligne ttittre + url
    var ligne1 = document.createElement("h4"); //contenant
    var titreLien = document.createElement("a"); // titre
    titreLien.textContent = siteWeb.titre;
    titreLien.href = siteWeb.url;
    var urlLien = document.createElement("span"); //url
    urlLien.textContent = siteWeb.url;
    
    
    
    
    
    
})
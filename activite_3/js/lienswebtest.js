/* 
Activité 3
*/

// Crée et renvoie un élément DOM affichant les données d'un lien
var listeLiens = [];
var contenu = document.getElementById("contenu");

// ajaxGet pour récupérer les derniers liens posté sur l'API
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function (reponse) {
    // transforme la réponse en tableau JSON listeLiens
    listeLiens = JSON.parse(reponse);
    // Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
    listeLiens.forEach(function (lien) {
        var elementLien = creerElementLien(lien);
        contenu.appendChild(elementLien);
    });

});

// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

// Bouton ajouter un lien , div "ajouter"
var divAjout = document.createElement("div"); //div pour l'ajout de lien
divAjout.id = "ajouter";
divAjout.style.marginBottom = "10px";
var bouton = document.createElement("button"); //"ajouter un lien"
bouton.textContent = "Ajouter un lien";
divAjout.appendChild(bouton);
// Ajout de la nouvelle div avant la div "contenu"
document.querySelector("body").insertBefore(divAjout, contenu);

// Lors du click sur le bouton : remplacement par un formulaire + bouton
// Création du formulaire
var form = document.createElement("form");
form.innerHTML += '<input style="margin-right: 10px" type="text" name="auteur" id="auteur" placeholder="Entrez votre nom" required>';
form.innerHTML += '<input style="margin-right: 10px" type="text" name="titre" id="titre" placeholder="Entrez le titre du lien" required>';
form.innerHTML += '<input style="margin-right: 10px" type="text" name="url" id="url" placeholder="Entrez l’URL du lien" required>';
form.innerHTML += '<input type="submit" id="ajouteElt" value="Ajouter">';

// Au click sur "ajouter un lien" : remplacer le bouton par le formulaire
bouton.addEventListener("click", function (e) {
    divAjout.replaceChild(form, bouton);
    // Au click sur l'envoi du formulaire : envoi des datas vers l'API
    form.addEventListener("submit", function (e) {
        // crée 3 variables pour récupérer les saisies de l'utilistateur
        var newTitre = form.elements.titre.value;
        var newUrl = form.elements.url.value
        var newAuteur = form.elements.auteur.value;
        var regex = /^(https|http)+\:\/\//;
        if (newTitre !== "" && newUrl !== "" && newAuteur !== "") { //3 champs remplis
            if (regex.test(newUrl) === false) { //édite l'URL
                newUrl = "http://" + newUrl;
            }
            var nouvelObjet = {
                titre: newTitre,
                url: newUrl,
                auteur: newAuteur
            };
            // envoyer nouvelElt vers l'API lors du click sur "ajouter"
            ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", nouvelObjet, function (reponse2) {
                    console.log("Le lien " + JSON.stringify(nouvelObjet) + " a bien été envoyé vers le serveur.")
                },
                true
            );
            // Utiliser la fonction sur le nouvel objet
            var nouvelElt = creerElementLien(nouvelObjet);
            // Ajouter en tête de liste
            contenu.insertBefore(nouvelElt, document.querySelector(".lien"));
            // remplacer le formulaire par le bouton initiale
            divAjout.replaceChild(bouton, form);
            //message d'info ( dessus le bouton ) qui disparait après 2 secondes
            var textInfo = document.createElement("p");
            textInfo.id = "info";
            textInfo.style.backgroundColor = "#aaddff";
            textInfo.style.height = "50px";
            textInfo.textContent = "Le lien « " + newTitre + " » a bien été ajouté.";
            textInfo.style.color = "#114477";
            textInfo.style.paddingTop = "25px";
            textInfo.style.paddingLeft = "10px";
            textInfo.style.fontWeight = "bold";
            document.querySelector("body").insertBefore(textInfo, divAjout);
            setTimeout(function () {
                // suppression du message
                document.querySelector("body").removeChild(textInfo);
            }, 2000);
            // Clear les champs de texte pour la prochaine saisie
            form.elements.titre.value = "";
            form.elements.auteur.value = "";
            form.elements.url.value = "";
        } else {
            console.log("Il faut remplir les 3 champs de texte")
        }

    });
});

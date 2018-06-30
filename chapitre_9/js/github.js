// saisir un nom et obtenir : nom, avatar, site web du profil
var contenu = document.getElementById("contenu");
var bouton = document.getElementById("valider");
var recherche = document.getElementById("saisie");
var form = document.querySelector("form");
// récupère le nom rentrée par l'utilisateur au moment du click
form.addEventListener("submit", function (e) {
    contenu.innerHTML = "";
    
    
    var saisie = form.elements.saisie.value;
    form.elements.saisie.value = "";
    console.log("votre recherche : " + saisie);
    
        
        
    // requête ajax GET
    ajaxGet("https://api.github.com/users/" + saisie, function (reponse) {
        var reponses = JSON.parse(reponse);
        var avatar = document.createElement("img");
        avatar.src = reponses.avatar_url;
        avatar.style.height = "150px";
        avatar.style.width = "150x";
        var nomGH = document.createElement("p");
        nomGH.textContent = reponses.name;
        var lienSite = document.createElement("a");
        lienSite.href = reponses.blog;
        lienSite.textContent = lienSite.href;        
        
        contenu.appendChild(avatar);
        contenu.appendChild(nomGH);
        contenu.appendChild(lienSite);
    });

    e.preventDefault();

})



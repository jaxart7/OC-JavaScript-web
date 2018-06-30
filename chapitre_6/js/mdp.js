// valider la saisie quand l'utilisateur soumet les données : bouton envoyer
var form = document.querySelector("form");
var sautLigne = document.createElement("br");

// appuie sur le bouton Envoyer
form.addEventListener("submit", function (e) {
    var saisieMdp = form.elements.mdp1.value;
    var confirmeMdp = form.elements.mdp2.value;    
    var textInfoMdp = document.getElementById("infoMdp");
    
    if (saisieMdp === confirmeMdp) { //même mdp
        textInfoMdp.textContent = "Les 2 mots de passe sont identiques";
    } else {
        textInfoMdp.textContent = "Erreur : les 2 mots de passes ne sont pas similaires";        
    }
    
    if (saisieMdp.length < 6) { //longueur mini de 6 caractères
        var infoLongueur = document.createTextNode("Erreur : la longueur minimale du mot de passe est de 6 caractères");        
        textInfoMdp.appendChild(sautLigne);
        textInfoMdp.appendChild(infoLongueur);
    }
    
    var regex = /[0-9]/; // Au moins 1 chiffre dans le mdp
    if (!regex.test(saisieMdp)) {
        var infoChiffre = document.createTextNode("Erreur le mot de passe doit contenir au moins un chiffre")
        textInfoMdp.appendChild(sautLigne);
        textInfoMdp.appendChild(infoChiffre);
    }
    
    e.preventDefault(); // Annulation de l'envoi des données
})
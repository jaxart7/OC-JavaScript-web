// ajouter de nouveaux articles grâce aux formulaire
var form = document.querySelector("form");
// soumission d'un formulaire
form.addEventListener("submit", function(e) {
    e.preventDefault();
    // récupère les champs
    var data = new FormData(form);
    //envoi des données du formulaire au serveur ; callback est vide
    ajaxPost("https://oc-jswebsrv.herokuapp.com/article", data, function () {
        // message d'info pour l'envoi
        var messageEnvoi = document.createElement("p");
        messageEnvoi.textContent = "L'article a bien été ajouté.";
        document.body.appendChild(messageEnvoi);
    });
});





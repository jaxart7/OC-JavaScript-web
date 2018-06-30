// Envoyer le résultat du formulaire vers l'API au format JSON
var form = document.querySelector("form");
// Lors de la soumission 
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // récupère le champs du form dans un l'objet data
    var data = {
        pseudo: form.elements.pseudo.value,
        evaluation: form.elements.note.value,
        message: form.elements.message.value,

    };
    console.log(data);
    // envoi des données
    ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", data, function () {
            // message de validation
            var messageV = document.createElement("p");
            messageV.textContent = "Votre évaluation a bien été envoyée !";
            document.body.appendChild(messageV);
        },
        true
    );
})
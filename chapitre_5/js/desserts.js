// ajouter nouveau dessert
// clic sur le bouton
// demande quel dessert
// ajoute la puce li avec le dessert à ul
document.querySelector("button").addEventListener("click", function () {
    var saisie = prompt("Quel dessert souhaitez-vous ajouter ?");
    // crée la puce
    var puce = document.createElement("li");
    // défini la puce    
    puce.textContent = saisie;
    // modification de la puce
    puce.addEventListener("click", function () {
        var modif = prompt("Quelle dessert à la place ?");
        puce.textContent = modif;
    })
    // ajout de la puce à liste
    document.getElementById("desserts").appendChild(puce);
})

// changer la couleur des paragraphes


document.addEventListener("keypress", function (e) {
    var touche = String.fromCharCode(e.charCode); //récupère la touche préssée
    touche = touche.toLowerCase();
    var couleur = "";
    switch (touche) {
        case "r": //rouge
            couleur = "red";
            break;
        case "j": //jaune
            couleur = "yellow";
            break;
        case "v": //vert
            couleur = "green";
            break;
        case "b": //bleu
            couleur = "blue";
            break;
        default:
            console.log("touche " + touche + " non gérée");
    }
    // change le couleur de fond
    var divs = document.getElementsByTagName("div");    
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = couleur;
    }
})
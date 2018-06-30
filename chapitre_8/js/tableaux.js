// récupère le fichier sur le serveur
ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    // transforme la reponse en tableau d'objets JS
    var rep = JSON.parse(reponse);
    console.log(rep);
    //crée la tableau
    var tab = document.createElement("table"); // tableau
    // ajout de la balise tab
    tab.id = "tableauTab";
    document.getElementById("tableau").appendChild(tab);
    // 1ere ligne du tableau
    var tabThNom = document.createElement("th");
    tabThNom.textContent = "Nom";
    var tabThAnnee = document.createElement("th");
    tabThAnnee.textContent = "Année";
    var tabThAuteur = document.createElement("th");
    tabThAuteur.textContent = "Auteur";
    var tabTr1 = document.createElement("tr"); // ligne 1
    tabTr1.appendChild(tabThNom);
    tabTr1.appendChild(tabThAnnee);
    tabTr1.appendChild(tabThAuteur);
    document.getElementById("tableauTab").appendChild(tabTr1); // Ajoute l1 à la page
    // 2eme ligne
    var tabTr2 = document.createElement("tr");    
    var tabTd21 = document.createElement("td");
    tabTd21.textContent = rep[0].nom;
    var tabTd22 = document.createElement("td");
    tabTd22.textContent = rep[0].annee;
    var tabTd23 = document.createElement("td");
    tabTd23.textContent = rep[0].auteur;
    tabTr2.appendChild(tabTd21);
    tabTr2.appendChild(tabTd22);
    tabTr2.appendChild(tabTd23);
    document.getElementById("tableauTab").appendChild(tabTr2); // Ajoute l2 à la page
    // 3eme ligne
    var tabTr3 = document.createElement("tr");    
    var tabTd31 = document.createElement("td");
    tabTd31.textContent = rep[1].nom;
    var tabTd32 = document.createElement("td");
    tabTd32.textContent = rep[1].annee;
    var tabTd33 = document.createElement("td");
    tabTd33.textContent = rep[1].auteur;
    tabTr3.appendChild(tabTd31);
    tabTr3.appendChild(tabTd32);
    tabTr3.appendChild(tabTd33);
    document.getElementById("tableauTab").appendChild(tabTr3); // Ajoute l3 à la page
    // 2eme ligne
    var tabTr4 = document.createElement("tr");    
    var tabTd41 = document.createElement("td");
    tabTd41.textContent = rep[2].nom;
    var tabTd42 = document.createElement("td");
    tabTd42.textContent = rep[2].annee;
    var tabTd43 = document.createElement("td");
    tabTd43.textContent = rep[2].auteur;
    tabTr4.appendChild(tabTd41);
    tabTr4.appendChild(tabTd42);
    tabTr4.appendChild(tabTd43);
    document.getElementById("tableauTab").appendChild(tabTr4); // Ajoute l2 à la page
    
});


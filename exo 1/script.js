let liste = document.getElementById('liste-commissions');

function ajout() {
     let ajouter = document.getElementById("input").value;
     let enfant = document.createElement("li");
     liste.appendChild(enfant);
     enfant.innerHTML = ajouter;
}




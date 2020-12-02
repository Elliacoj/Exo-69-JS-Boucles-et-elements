let liste = document.getElementById('liste-commissions');
let dernier = document.getElementsByTagName("li")

function ajout() {
     let ajouter = document.getElementById("input").value;
     let enfant = document.createElement("li");
     liste.appendChild(enfant);
     enfant.innerHTML = ajouter;
}

function retirer() {
     if (liste.childElementCount === 0) {
     }
     else {
      liste.removeChild(liste.lastElementChild);
     }
}
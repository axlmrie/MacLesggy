
let data = document.getElementById("sign_in");

data.addEventListener("submit",(event)=> {event.preventDefault(); print()});
//Inscription de l'utilisateur
function print() {
  const xhr = new XMLHttpRequest();
  const fd = new FormData(data);
  const jsondata = {};

  fd.forEach((value, key) => {
      jsondata[key] = value;
  });

  const jsonstring = JSON.stringify(jsondata);

  xhr.open("POST", "http://127.0.0.1:8000/inscription");
  xhr.setRequestHeader("Content-Type", "application/json");
  //Si l'inscription est faite : récupération de l'id_joueur pour ouvrir sa page d'accueil
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 201) {
              const responseData = JSON.parse(xhr.responseText);

              // Affiche la valeur de id_utilisteur dans la console
              console.log('ID Utilisateur:', responseData);
              window.location.href=`http://127.0.0.1:8081/home_page.html/?user=${responseData}`
              // Autres actions après l'inscription si nécessaire
          } else {
              console.error('Erreur lors de la requête:', xhr.status);
          }
      }
  };

  xhr.send(jsonstring);
}
//Récupération des niveaux   

//Récupération des pays

//Récupération des circuits


//Gestion du bouton Connexion
const btnCo = document.getElementById("connexion");
btnCo.addEventListener("click",(event)=> {event.preventDefault(); connexion()})
//Renvoie à la page de connexion
function connexion(){
    window.location.href='http://127.0.0.1:8081/connection.html'
}


// Appeler la fonction lors du chargement de la page

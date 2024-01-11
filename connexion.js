//Gestion du bouton connection
const btn = document.getElementById("connect")
btn.addEventListener("click",(event)=> {event.preventDefault(); connexion()});
//Gestion de la connexion
function connexion() {
    const prenom = document.getElementById("nom").value
    const nom = document.getElementById("prenom").value
    const usr = document.getElementById("nomUser").value
    const pswd = document.getElementById("mdp").value
    console.log(usr,pswd);
  fetch(`mariadb://max:root@10.191.14.110:3306/MacLesggi${usr}&${pswd}&${nom}&${prenom}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      data.forEach(function(Object){
        if(pswd == Object.password){
             const idUser = Object.id_joueur
            window.location.href=`http://127.0.0.1:8081/home.html/?user=${idUser}`
        }else{
            console.log("degage")
        }
      });
      
    })
    .catch((error) => console.error("Erreur lors de la requête API :", error));
}
//Gestion du bouton inscription
const btnInsc = document.getElementById("inscription");
btnInsc.addEventListener("click",(event)=> {event.preventDefault(); inscription()})
//Retour à l'inscription
function inscription(){
  window.location.href='http://127.0.0.1:8081/index.html'
}
console.log("ok oui")
let data = document.getElementById("sign_in");
let val = ''
let valAll =[]
document.addEventListener('DOMContentLoaded', function() {
    let temp = document.getElementById("temp");
    fetch("http://192.168.1.27/temperature")
    .then(response=>response.json())
    .then(data =>{
    const taille = data.length
    console.log(taille)
    valAll = data
    val = data[taille-1][0]
    val = val.toString()
    temp.innerText = val+"°C"
 })
});

document.addEventListener('DOMContentLoaded', function(){
    let hum = document.getElementById("humidite");
    fetch("http://192.168.1.27/humidite")
    .then(response=>response.json())
    .then(data =>{
     const taille = data.length
     console.log(taille)
     val = data[taille-1][0]
     val = val.toString()
     console.log(val)
     hum.innerText = val+"%"
})
});

document.addEventListener('DOMContentLoaded', function(){

         let pres = document.getElementById("pression");
         fetch("http://192.168.1.27:8000/pression")
         .then(response=>response.json())
         .then(data =>{
         const taille = data.length
         console.log(taille)
         val = data[taille-1][0]
         val = val.toString()
         console.log(val)
         pres.innerText = val+"hPa"
})
});


function valider(){
    
    var a = document.getElementById("email").value.indexOf("@")
    
    var b = document.getElementById("email").value.indexOf(".",a+2)
    
    if (document.getElementById("nom").value == ""){
        alert('Veuillez remplir le champ : "Votre nom".')
}
    else if (document.getElementById("prenom").value == ""){
        alert('Veuillez remplir le champ : "Votre prénom".')
    }
    
    else if (document.getElementById("entreprise").value == ""){
        alert('Veuillez remplir le champ : "Nom de votre entreprise".')
    }
    
    else if (document.getElementById("email").value == ""){
        alert('Veuillez remplir le champ : "Votre email".')
    }
    
    else if (document.getElementById("email").value.indexOf("@") == -1){
        alert("L'adresse email n'est pas valide.")
    }
    
    else if (document.getElementById("email").value.indexOf(".",a+3) == -1){
        alert("L'adresse email n'est pas valide.")
    }
    
    else if (document.getElementById("email").value.substring(b+2, b+3) == ""){
        alert("L'adresse email n'est pas valide.")
    }
    
    else if (document.getElementById("message").value == ""){
        alert("Veuillez entrer un message dans le champ correspondant.")
    }
    
    else if (document.getElementById("donnees").checked == false){
        alert("Veuillez cocher la case à propos de vos données personnelles.")
    }
    
    else{
    document.getElementById("formulaire").innerHTML="Merci d'avoir répondu à ce formulaire et d'avoir envoyé une offre de stage à nos étudiants. Votre offre leur sera transmise dans les plus brefs délais."
    
    }
}

function check(){

    if((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 61 || event.keyCode > 122) && event.keyCode != 46 && event.keyCode != 8 && event.keyCode != 16) {
event.returnValue = false; 
}
}
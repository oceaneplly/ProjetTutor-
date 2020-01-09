function valider(){
    
    if (document.getElementById("nom") === undefined){
        alert('Veuillez remplir le champ : "Votre nom".')
}
    else if (document.getElementById("prenom") === undefined){
        alert('Veuillez remplir le champ : "Votre prénom".')
    }
    
    else if (document.getElementById("entreprise") === undefined){
        alert('Veuillez remplir le champ : "Nom de votre entreprise".')
    }
    
    else if (document.getElementById("email") === undefined){
        alert('Veuillez remplir le champ : "Votre email".')
    }
    
    else if (document.getElementById("message") === undefined){
        alert("Veuillez entrer un message dans le champ correspondant.")
    }
    
    else if (document.getElementById("donnees") === undefined){
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
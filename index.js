const service = require('./service');
//var requestPromise = require('request-promise-native');


const readline = require('readline');

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


function startMenu() {

    const menu = `
    1. Liste des clients
    2. Ajouter clients
    3. Rechercher un client par nom
    4. Vérifier la disponibilité d'une chambre
    99. Quitter
     `;

    rl.question( menu, choix => {
   
        // 3
        console.log(`Vous avez saisi : ${choix}`);

       

        if (choix === '99') {
            rl.close(); // attention, une fois l'interface fermée, la saisie n'est plus

        } else if(choix === '1') {
            
               
               service.listerClients( data => {
                    // ici
                    // on a eu la réponse
                    // les données sont dans data
                    data.forEach(   unPost =>  {
                                    console.log( `${unPost.uuid}-${unPost.nom}-${unPost.prenoms}`) });
                    
    
                    startMenu();

                    
                });
        
       
        }
    })

}

startMenu();



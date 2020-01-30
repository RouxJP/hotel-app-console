var service = require('./service');


var readline = require('readline');

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


function startMenu() {

    var menu = `
    1. Liste des clients
    2. Ajouter clients
    3. Rechercher un client par nom
    4. Vérifier la disponibilité d'une chambre
    99. Quitter
     `;

    rl.question( menu, function (choix) {
   
        // 3
        console.log(`Vous avez saisi : ${choix}`);

       

        if (choix === '99') {
            rl.close(); // attention, une fois l'interface fermée, la saisie n'est plus

        } else if(choix === '1') {
               service.listerClients( function( data){
                // ici
                // on a eu la réponse
                // les données sont dans data
                data.forEach( function( unPost) {
                    console.log( unPost.uuid +  "-" + unPost.nom +  "-" + unPost.prenoms);

                });
                
                service.ajouterClients( function( data){                
                         console.log( "Le client " + data + " a été ajouté ");
    
                    });
    
                });                

                startMenu();

                
            });

            
        }
       
    });
}

startMenu();



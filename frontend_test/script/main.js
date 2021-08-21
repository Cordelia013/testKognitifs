//je recupère toute les class des listes déroulantes
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);


// je crée une fonction d'ouverture et de fermeture de la liste
function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
    
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
            //   modification de class si l'élément est actif
                this.parentElement.classList.remove('dropdown-open');

                this.nextElementSibling.classList.remove('dropdown-active');
    
            } else {
                // je ferme la liste deroulante ouverte
                closeDropdown();
    
                //  en fonction de l'action je modifie la class et j'ajout les class ouvert et active
                this.parentElement.classList.add('dropdown-open');
                // La propriété nextElementSibling me permet de mettre aucun espace entre l'élément ouvert et l'element qui le suit
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }
}
// mise en place de la fonction event sur le click zone de la fenetre
window.addEventListener("click", function (e) {

    // déclenche la fermeture du menu s'il  y a un click en dehors du menu
    if (e.target.closest('.dropdown-container') === null) {
        // je ferme ma liste deroulante
        closeDropdown();
    }

});


// Fonction qui me permet de gerer la liste déroulante
function closeDropdown() { 
    console.log('run');
    
    // me permet de supprimer la classe ouverte et active des autres listes déroulantes ouvertes (fermeture de la liste déroulante ouverte) 
    document.querySelectorAll('.dropdown-container').forEach(function (container) { 
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
        menu.classList.remove('dropdown-active');
    });
}

// Ferme la liste déroulante avec la souris
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
    //me permet de fermer la liste déroulante après qur l'utilisateur ait quitté la liste
    dropDownList.onmouseleave = closeDropdown;
});

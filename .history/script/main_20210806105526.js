//je recupère toute les class des liste déroulante
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);


// je creer une fonction d'ouverture et de fermetureb de la liste
function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
    
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                // je click pour fermer la liste déroulante
                this.parentElement.classList.remove('dropdown-open');

                this.nextElementSibling.classList.remove('dropdown-active');
    
            } else {
                // je ferme la liste deroulante ouverte
                closeDropdown();
    
                //  en fonction de l'action je modifie la class et j'ajout les class ouvert et active
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }
}
// mise en place de la fonction event sur le click
window.addEventListener('click', function (e) {

    // déclenchement du la fermeture du menu s'il  ya un click en dehors du menu
    if (e.target.closest('.dropdown-container') === null) {
        // je ferme ma liste deroulante
        closeDropdown();
    }

});


// Fermer le  Dropdowns
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

// Fermer la liste déroulante avec la souris
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
});

// Attendre que tout le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionner tous les liens de navigation qui commencent par "#"
    const liensNavigation = document.querySelectorAll('a[href^="#"]');

    liensNavigation.forEach(lien => {
        lien.addEventListener('click', function (e) {
            // Empêcher le comportement de saut immédiat par défaut
            e.preventDefault();

            // Récupérer la section cible
            const cibleId = this.getAttribute('href');
            const sectionCible = document.querySelector(cibleId);

            if (sectionCible) {
                // Calculer la position en soustrayant la hauteur de la barre de navigation (environ 70px)
                const hauteurHeader = 70;
                const positionCible = sectionCible.getBoundingClientRect().top + window.scrollY - hauteurHeader;

                // Animer le défilement
                window.scrollTo({
                    top: positionCible,
                    behavior: 'smooth' // C'est ici que la magie du glissement opère !
                });
            }
        });
    });

    // Sélectionner toutes les cartes de compétences
    const skillCards = document.querySelectorAll('.skill-card');

    // Pour chaque carte, écouter les événements de la souris
    skillCards.forEach(card => {
        
        // Évènement : La souris entre sur la carte
        card.addEventListener('mouseenter', () => {
            // Ajouter la classe 'active' pour déclencher l'animation CSS
            card.classList.add('active');
        });

        // Évènement : La souris sort de la carte
        card.addEventListener('mouseleave', () => {
            // Retirer la classe 'active' pour masquer à nouveau
            card.classList.remove('active');
        });
        
    });
});

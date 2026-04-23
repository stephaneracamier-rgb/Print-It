/*Script ayant pour objectif :
Lors d'un clic droit le passage au visuel suivant sur la droite avec coloration du Bullet Point correpondant
Lors d'un clic à gauche le passage au visuel suivant sur la gauche avec coloration du Bullet Point correpondant
Lors de l'arrivée au dernier ou au premier visuel défilement continu pour revenir au point de départ
Avec cela insertion d'une Tagline sur tous les visuels*/


EN PREMIER METTRE UN EVENT SUR CHEVRON DROITE ET UN EVENT SUR GAUCHE
IMAGE APRES CLIC DEVIENT LA PRINCIPALE SUCCESSIVEMENT AVEC UNE CONDITION QUI RENVOIE A PREMIERE IMAGEEN FIN DE BOUCLE
DOUBLE BOUCLE DANS UN SENS PUIS LAUTRE


/*Ecoute des événements
ABSENCE DE FONCTION ENTRAINANT LE PASSAGE AU VISUEL SUIVANT ET LE REMPLISSAGE DU BULLET POINT SUIVANT */
let clicGauche = document.querySelector(".arrow_left");
clicGauche.addEventListener("click", function () {
        console.log("Vous avez cliqué sur le chevron gauche")
    });

let clicDroit = document.querySelector(".arrow_right");
clicDroit.addEventListener("click", function () {
        console.log("Vous avez cliqué sur le chevron droit")
    });
    
/*Tableau des visuels du slider et comptage*/
let bannerImg = ["slide1", "slide2", "slide3", "slide4"]
for (let i = 0; i < 4; i++) {
console.log(i)
}

/*Insertion de la Tagline dans le slider
PAS DE RECUPERATION DE L'ELEMENT A EFFECTUER */
let tagline = "Impressions tous formats <span>en boutique et en ligne</span>"

let P =
        <p>${tagline}</p>   
    ;

let banner = document.querySelector("banner")
banner.innerHTML = P   



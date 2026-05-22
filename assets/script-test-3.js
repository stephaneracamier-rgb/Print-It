/*Script ayant pour objectif :
Lors d'un clic droit le passage au visuel suivant sur la droite avec coloration du Bullet Point correpondant
Lors d'un clic à gauche le passage au visuel suivant sur la gauche avec coloration du Bullet Point correpondant
Lors de l'arrivée au dernier ou au premier visuel défilement continu pour revenir au point de départ
Avec cela insertion d'une Tagline sur tous les visuels*/


// EN PREMIER METTRE UN EVENT SUR CHEVRON DROITE ET UN EVENT SUR GAUCHE
// IMAGE APRES CLIC DEVIENT LA PRINCIPALE SUCCESSIVEMENT AVEC UNE CONDITION QUI RENVOIE A PREMIERE IMAGEEN FIN DE BOUCLE
// DOUBLE BOUCLE DANS UN SENS PUIS LAUTRE

/*Tableau des visuels avec leur textes dans le slider plus comptage*/
const slides = [
	{
		"image": "assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


/*Ecoute des événements
ABSENCE DE FONCTION ENTRAINANT LE PASSAGE AU VISUEL SUIVANT ET LE REMPLISSAGE DU BULLET POINT SUIVANT */
const clicGauche = document.querySelector(".arrow_left");
const clicDroit = document.querySelector(".arrow_right");
const imageBanner = document.querySelector(".banner-img");


// Index de démarrage des Slides avec la valeur 0 ou première image
let activeSlide = 0;

clicGauche.addEventListener("click", function () {
	// CAS LIMITE DEFILEMENT : CLIC NIVEAU PREMIER SLIDE (INDEX = 0) RENVOIE AU DERNIER SLIDE INDEX = 3
	// SI LIMITE NON ATTEINTE CLIC GAUCHE FAIT PASSER AU SLIDE SUIVANT DE MANIERE DECROISSANTE (INDEX)
	if (activeSlide === 0) {
		activeSlide = slides.length - 1;
	} else {
		activeSlide--;
	}

	initDiapo(activeSlide, 'Méthode flèche gauche');
});

clicDroit.addEventListener("click", function () {
	// CAS LIMITE DEFILEMENT : CLIC NIVEAU DERNIER SLIDE (INDEX = 3) RENVOIE AU PREMIER INDEX = 0
	// SI LIMITE NON ATTEINTE CLIC DROIT FAIT PASSER AU SLIDE SUIVANT DE MANIERE CROISSANTE (INDEX)
	if (activeSlide === slides.length - 1) {
		activeSlide = 0;
	} else {
		activeSlide++;
	}

	initDiapo(activeSlide, 'Méthode flèche droite');

	// Quand on veut récupére une suele donnée précise d'un tableau nom_du_tableau[indice de l'élement]
	// Quand on veut récupére dans un ojbect : nom_de_l'object.cle_de_l_element
});

function initDiapo(idSlide, origine){	
	console.log('On charge notre fonction custom - Index chargé : ' + idSlide);
	console.log('Appel de la fonction depuis : ' + origine);
	
	// Charger dans notre élément imageBanner la première diapo (donc index 0)
	let slide = slides[idSlide];
	let urlImage = slide.image;
	imageBanner.setAttribute("src", urlImage)
	}

initDiapo(0, 'Chargement initial');

// Sélection
const banner = document.getElementById("banner");
const dotsBullet = document.querySelector(".dots");
// Objectif injecter cela :
// <img class="banner-img" src="./assets/images/slideshow/slide1.jpg" alt="Banner 1 Print-it">
// <img class="banner-img" src="./assets/images/slideshow/slide2.jpg" alt="Banner 2 Print-it">

// Traitement
// array.forEach((element) => console.log(element));

slides.forEach (
	function(slide, index) {
	    let dot = `<span class="dot" dot-index="${index}"></span>`;

		// Injection
		dotsBullet.insertAdjacentHTML("beforeend", dot);
	}
);


// Version fonction fléchée
/* slides.forEach((slide) => {
	console.log(slide.image);	
}) */

// Quand on veut récupére dans un object : nom_de_l'object.cle_de_l_element

// Affichage de controle
console.log(banner);


/*Création de la constante bullet*/
// Sélection


/*Création de la constante imageBanner avec intervalle défilement*/


// console.log()

// bannerImg.setAttribute("src", slides[0].image)

// setIntervall(function () {
// }, 5000)



// for (let i = 0; i < 4; i++) {
// 	console.log(i)
// }

// /*Insertion de la Tagline dans le slider
// PAS DE RECUPERATION DE L'ELEMENT A EFFECTUER */
// let tagline = "Impressions tous formats <span>en boutique et en ligne</span>"

// let banner = document.querySelector("banner")
// banner.innerHTML = P




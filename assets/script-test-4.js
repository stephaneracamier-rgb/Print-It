/*Script ayant pour objectif :
Lors d'un clic droit le passage au visuel suivant sur la droite avec coloration du Bullet Point correpondant
Lors d'un clic à gauche le passage au visuel suivant sur la gauche avec coloration du Bullet Point correpondant
Lors de l'arrivée au dernier ou au premier visuel défilement continu pour revenir au point de départ
Avec cela insertion d'une Tagline sur tous les visuels*/


// EN PREMIER METTRE UN EVENT SUR CHEVRON DROITE ET UN EVENT SUR GAUCHE
// IMAGE APRES CLIC DEVIENT LA PRINCIPALE SUCCESSIVEMENT AVEC UNE CONDITION QUI RENVOIE A PREMIERE IMAGEEN FIN DE BOUCLE
// DOUBLE BOUCLE DANS UN SENS PUIS LAUTRE

/* Tableau des visuels et des textes défilant dans le slide */
/* Tableau des slides */
const slides = [
	{
		image: "assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

/* Sélections DOM */
const clicGauche = document.querySelector(".arrow_left");
const clicDroit = document.querySelector(".arrow_right");

const imageBanner = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

const dotsBullet = document.querySelector(".dots");

// Index de démarrage des Slides avec la valeur 0 ou première image

let activeSlide = 0;

/* Création et gestion des cas pour les dotsBullet avec la classe dot par défaut*/

slides.forEach((slide, index) => {

	const dot = document.createElement("span");
	// dot = '<span></span>'

	dot.classList.add("dot");
	// <span class="dot"></span>

	/* Attribution de la class dot_selected au premier slide  */
	if (index === 0) {
		dot.classList.add("dot_selected");
	}

	/* Stockage de l'index va créer un attribut data-[variable]=[valeur] */
	dot.dataset.index = index;
	// <span class="dot" data-index={index}></span>

	/* Insertion HTML */
	dotsBullet.appendChild(dot);

	//let dot = `<span class="dot" dot-index="${index}"></span>`;
	// dotsBullet.insertAdjacentHTML("beforeend", dot);

	/* Ecoute du clic sur le dotsBullet */
	dot.addEventListener("click", function () {

		activeSlide = index;

		initDiapo(activeSlide, "Click bullet");

	});
});

/* Fonction d'initialisation du slider avec les différents paramètres */

function initDiapo(idSlide, origine) {

	console.log("Slide chargée :", idSlide);
	console.log("Origine :", origine);

	/* Définition constante slide */
	const slide = slides[idSlide];

	/* Récupération de l'image */

	imageBanner.src = slide.image;

	/* Insertion de la tagline dans le HTML */

	tagLine.innerHTML = slide.tagLine;

	/* constante définissant le remplacmet de la classe dot par la class dot_selected */

	const allDots = document.querySelectorAll(".dot");

	/* Suppression de l'ancienne classe attribuée */
	allDots.forEach((dot) => {
		dot.classList.remove("dot_selected");
	});

	/* Ajout de la nouvelle classe attribuée */
	allDots[idSlide].classList.add("dot_selected");
}

/* Clic sur flêche droite pour défilement */

clicDroit.addEventListener("click", function () {

	activeSlide++;

	/* Retour début */
	if (activeSlide >= slides.length) {
		activeSlide = 0;
	}

	initDiapo(activeSlide, "Flèche droite");

});

/* Clic sur flêche gaauche pour défilement*/

clicGauche.addEventListener("click", function () {

	activeSlide--;

	/* Retour fin */
	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}

	initDiapo(activeSlide, "Flèche gauche");

});

/* Initialisation du chargement des slides */

initDiapo(activeSlide, "Chargement initial");
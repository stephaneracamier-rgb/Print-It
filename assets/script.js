/* Caractéristiques du script :
Diaporama composé de 4 Slides dotés d'un Visuel, d'une Tagline et d'un bulletPoint 
Changement de couleur du bulletPoint pour la Slide affichée
Défilement manuel par clic sur la Flèche droite et la Flèche gauche 
Limitation du défilement des Slides : le clic sur la première ou la dernière Slide renvoi à la Side opposée */

/* Tableau de stockage des données des Slides (visuels et textes) */
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

/* Sélections DOM avec des constantes permettant de récupérer Sélecteurs et Class CSS */
const clicGauche = document.querySelector(".arrow_left");
const clicDroit = document.querySelector(".arrow_right");
const imageBanner = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsBullet = document.querySelector(".dots");

/* Variable d'état du Diaporama, avec la Slide 0 affichée par défaut */
let activeSlide = 0;

/* Boucle de création et gestion des dotsBullet (sur la base du tableau de Slides
Paramètres : SLIDE (objets du tableau) et INDEX (positionnements dans le tableau) */

slides.forEach((slide, index) => {

	const dot = document.createElement("span");
	/* Création de l'élément HTML pour injecter les dotsBullet */

	dot.classList.add("dot");
	/*Attribution par défaut de la class DOT pour toutes les dotsBullet*/

	/* Condition d'attribution de la class DOT_SELECTED : première slide de l'Index */
	if (index === 0) {
		dot.classList.add("dot_selected");
	}

	/* Stockage de l'index pour les données DOT
	Création d'un attribut data-[variable]=[valeur] */
	dot.dataset.index = index;

	/* Injection dans le HTML de l'élément DOT de l'Objet */
	dotsBullet.appendChild(dot);

	/* Ecoute du clic sur le dotsBullet avec 
	une function vide pour la détection du clic
	le changement de la slide active sur la base de l'Index
	l'appel de la fonction d'initialisation */
	dot.addEventListener("click", function () {

		activeSlide = index;

		initDiapo(activeSlide, "Click bullet");

	});
});

/* Fonction d'initialisation du slider avec les paramètres idSlide (index d'affichage) origine (pour l'action) */
function initDiapo(idSlide, origine) {

	console.log("Slide chargée :", idSlide);
	console.log("Origine :", origine);

	/* Constante de la récupération de la slide */
	const slide = slides[idSlide];

	/* Injection de l'image attribuée à la slide */
	imageBanner.src = slide.image;

	/* Injection du texte (tagline) attribuée à la slide */
	tagLine.innerHTML = slide.tagLine;

	/* Sélection globale des dotsBullet permettant de récupérer tous les éléments .dot  */
	const allDots = document.querySelectorAll(".dot");

	/* Suppression de l'ancienne sélection, tous les dotsBullet perdent la class DOT_SELECTED */
	allDots.forEach((dot) => {
		dot.classList.remove("dot_selected");
	});

	/* Ajout de la nouvelle sélection, seul la slide active se voit attribuer la class DOT_SELECTED */
	allDots[idSlide].classList.add("dot_selected");
}

/* Clic sur la flêche droite pour le défilement des slides à droite */
clicDroit.addEventListener("click", function () {

    /* Incrémentation via l'Index des slides*/	
	activeSlide++;

	/* Retour à la slide de début via la boucle infinie */
	if (activeSlide >= slides.length) {
		activeSlide = 0;
	}

	initDiapo(activeSlide, "Flèche droite");

});

/* Clic sur la flêche gauche pour défilement des slides à gauche */
clicGauche.addEventListener("click", function () {
    
	/* Décrémentation via l'Index des slides*/
	activeSlide--;

	/* Retour à la slide de fin via la boucle infinie */
	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}

	initDiapo(activeSlide, "Flèche gauche");

});

/* Initialisation du Diaporama avec chargement des slideset affichage de la premièer slide */
initDiapo(activeSlide, "Chargement initial");
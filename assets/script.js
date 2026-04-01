
/*const bulletPoint = document.querySelector(".dots");
bulletPoint.classList.add("dot")
console.log(bulletPoint)*/

/*const bulletPointSelected = document.querySelector(".dots");
bulletPointSelected.classList.add("dot_selected")
console.log(bulletPointSelected)*/

let clicGauche = document.querySelector(".arrow_left");
clicGauche.addEventListener("click", function () {
        console.log("Vous avez cliqué sur le chevron gauche")
    });

let clicDroit = document.querySelector(".arrow_right");
clicDroit.addEventListener("click", function () {
        console.log("Vous avez cliqué sur le chevron droit")
    });

let bannerImg = ["slide1", "slide2", "slide3", "slide4"]
for (let i = 0; i < 4; i++) {
console.log(i)
}

let contenuTitre = "Impressions tous formats"
let contenuParagraphe = "en boutique et en ligne"

let banner = document.querySelector("banner")

let HTML =
    <div id="banner">
        <p>${contenuTitre}</p>
        <span>${contenuTitre}</span>
    </div>

banner.innerHTML


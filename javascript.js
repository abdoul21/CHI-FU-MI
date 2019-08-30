var mishoufi = ['Pierre', 'Feuille', 'Ciseaux'];



//Renvoie un nombre aléatoire 
function nombreAleatoire(max) {
    return Math.round(Math.random() * max);
}

//Permet de générer un pierre feuille ciseaux aléatoirement depuis le tableau
function mainAleatoire() {
    return mishoufi[nombreAleatoire(2)];
}

var scorOrdi = 0;
var scorJoueur = 0;
var mainordi = (mainAleatoire());
var mainjoueur;
console.log(mainordi);
for (let index = 0; index < 3; index++) {
    mainordi = (mainAleatoire());
    console.log(mainordi);

    mainjoueur = prompt("CHI-FU-MI");

    if (mainjoueur == mainordi) {
        alert('égaliter')
    } else if (mainjoueur == "Pierre" && mainordi == "Feuille" || mainjoueur == "Feuille" && mainordi == "Ciseaux" || mainjoueur == "Ciseaux" && mainordi == "Pierre") {
        scorOrdi++;
        alert("perdu score ordi : " + scorOrdi);

    } else if (mainjoueur == "Feuille" && mainordi == "Pierre" || mainjoueur == "Ciseaux" && mainordi == "Feuille" || mainjoueur == "Pierre" && mainordi == "Ciseaux") {
        scorJoueur++;
        alert('gagner score joueur ' + scorJoueur);


    }
} if (scorJoueur > scorOrdi) {
    alert("joueur a gagner " + scorJoueur + " points contre " + scorOrdi + " point" )
}else if (scorJoueur < scorOrdi){
    alert("ordi a gagner " + scorOrdi + " point contre " + scorJoueur + " point")
}


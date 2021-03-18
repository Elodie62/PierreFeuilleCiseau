let pointOrdi = 0;
let pointUtilisateur = 0;
let tour = 1;

function choixOrdi() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choix = ["Pierre", "Feuille", "Ciseaux"];
  return choix[randomNumber];
}

function playTurn(choixUtilisateur) {
  let reponseOrdi = choixOrdi();

  if (reponseOrdi === choixUtilisateur) {
    $(".action").html("Choix de l'ordinateur: " + reponseOrdi + " <br/> <br/> Egalité");
    pointOrdi++;
    pointUtilisateur++;
    $(".scoreOrdi").text(pointOrdi);
    $(".scoreJoueur").text(pointUtilisateur);
  } else if (
    (reponseOrdi === "Pierre" && choixUtilisateur === "Ciseaux") ||
    (reponseOrdi === "Feuille" && choixUtilisateur === "Pierre") ||
    (reponseOrdi === "Ciseaux" && choixUtilisateur === "Feuille")
  ) {
    $(".action").html("Choix de l'ordinateur: " + reponseOrdi + " <br/> <br/> Le PC gagne");
    pointOrdi++;
    $(".scoreOrdi").text(pointOrdi);
  } else {
    $(".action").html("Choix de l'ordinateur: " + reponseOrdi + " <br/> <br/> Vous avez gagné !! ");
    pointUtilisateur++;
    $(".scoreJoueur").text(pointUtilisateur);
  }
}

$(".boite button").click(function () {
  playTurn(this.value);
  tour++;
  $(".Tour").text(tour);
  if (tour === 10) {
    $(".action").html("Le PC à " + pointOrdi + " points" + " <br/> Vous avez " + pointUtilisateur + " points");
    tour = 0;
    pointOrdi = 0;
    pointUtilisateur = 0;
    $(".scoreOrdi").text(pointOrdi);
    $(".scoreJoueur").text(pointUtilisateur);
  }
});

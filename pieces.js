// Récupération des pièces depuis le fichier JSON
const response = await fetch("pieces-autos.json");
const pieces = await response.json();

for (let i = 0; i < pieces.length; i++) {
  const article = pieces[i];
  // Récupération de l'élément du DOM qui accueillera les fiches

  const sectionFiches = document.querySelector(".fiches");
  // Création d’une balise dédiée à une pièce automobile
  const pieceElement = document.createElement("article");

  // création des balises avec createElement
  const imageElement = document.createElement("img");
  imageElement.src = pieces[i].image; /* OU imageElement.src = article.image; */
  const nomElement = document.createElement("h2");
  nomElement.innerText = article.nom;
  const prixElement = document.createElement("p");
  prixElement.innerText = `Prix : ${article.prix} € (${
    article.prix < 35 ? "€" : "€€€"
  })`;
  const categorieElement = document.createElement("p");
  categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
  const descriptionElement = document.createElement("p");
  descriptionElement.innerText =
    article.description ?? "(Pas de description pour le moment.)";
  const stockElement = document.createElement("p");
  stockElement.innerText = article.disponibilite
    ? "En stock"
    : "Rupture de stock";

  // Rattacher les éléments au reste du document
  // rattachement des balises au DOM

  sectionFiches.appendChild(pieceElement);

  pieceElement.appendChild(imageElement);
  pieceElement.appendChild(nomElement);
  pieceElement.appendChild(prixElement);
  pieceElement.appendChild(categorieElement);
  pieceElement.appendChild(descriptionElement);
  pieceElement.appendChild(stockElement);
}

const boutonTrier = document.querySelector(".btn_trier");
boutonTrier.addEventListener("click", function () {
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.prix <= 35;
  });
  //
});

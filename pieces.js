const pieces = await fetch("pieces-autos.json").then((pieces) => pieces.json());

function genererPieces(pieces) {
  for (let i = 0; i < pieces.length; i++) {
    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises
    const imageElement = document.createElement("img");
    imageElement.src = pieces[i].image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${
      article.prix < 35 ? "€" : "€€€"
    })`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "aucune catégorie";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText =
      article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite
      ? "En stock"
      : "Rupture de stock";

    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    //Ajout des éléments au DOM pour l'exercice
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
    /*document.body.appendChild(pieceElement);*/
  }
}
genererPieces(pieces);

// gestion des boutons
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", () => {
  const piecesOrdonnees = Array.from(pieces);
  piecesOrdonnees.sort((a, b) => {
    return a.prix - b.prix;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", () => {
  const piecesFiltrees = pieces.filter((piece) => {
    return piece.prix <= 35;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});

//Correction Exercice
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", () => {
  const piecesOrdonnees = Array.from(pieces);
  piecesOrdonnees.sort((a, b) => {
    return b.prix - a.prix;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesOrdonnees);
});

const boutonDescription = document.querySelector(".btn-nodesc");

boutonDescription.addEventListener("click", () => {
  const piecesFiltrees = pieces.filter((piece) => {
    return piece.description;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});

const noms = pieces.map((piece) => piece.nom);
for (let i = pieces.length - 1; i >= 0; i--) {
  if (pieces[i].prix > 35) {
    noms.splice(i, 1);
  }
}
console.log(noms);

//Création de l'en-tête
const pElement = document.createElement("p");
pElement.innerText = "Pièces abordables :";
//Création de la liste
const abordablesElements = document.createElement("ul");
//Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
  const nomElement = document.createElement("li");
  nomElement.innerText = noms[i];
  abordablesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document
  .querySelector(".abordables")
  .appendChild(pElement)
  .appendChild(abordablesElements);

//Code Exercice
const nomsDisponibles = pieces.map((piece) => pieces.nom);
const prixDisponibles = pieces.map((piece) => pieces.prix);

for (let i = pieces.length - 1; i >= 0; i--) {
  if (pieces[i].disponibilite === false) {
    nomsDisponibles.splice(i, 1);
    prixDisponibles.splice(i, 1);
  }
}

const disponiblesElements = document.createElement("ul");

for (let i = 0; i < nomsDisponibles.length; i++) {
  const nomElement = document.createElement("li");
  nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
  disponiblesElements.appendChild(nomElement);
}

const pElementDisponible = document.createElement("p");
pElementDisponible.innerText = "Pièces disponibles :";
document
  .querySelector(".disponibles")
  .appendChild(pElementDisponible)
  .appendChild(disponiblesElements);

const inputPrixMax = document.querySelector("#prix-max");
inputPrixMax.addEventListener("input", () => {
  const piecesFiltrees = pieces.fiter((piece) => {
    return piece.prix <= inputPrixMax.ariaValueMax;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});
// ----------------------------------------- Exercice modèle pour la 1ere partie du cours

// // Récupération des pièces depuis le fichier JSON
// const response = await fetch("pieces-autos.json");
// const pieces = await response.json();

// for (let i = 0; i < pieces.length; i++) {
//   const article = pieces[i];
//   // Récupération de l'élément du DOM qui accueillera les fiches

//   const sectionFiches = document.querySelector(".fiches");
//   // Création d’une balise dédiée à une pièce automobile
//   const pieceElement = document.createElement("article");

//   // création des balises avec createElement
//   const imageElement = document.createElement("img");
//   imageElement.src = pieces[i].image; /* OU imageElement.src = article.image; */
//   const nomElement = document.createElement("h2");
//   nomElement.innerText = article.nom;
//   const prixElement = document.createElement("p");
//   prixElement.innerText = `Prix : ${article.prix} € (${
//     article.prix < 35 ? "€" : "€€€"
//   })`;
//   const categorieElement = document.createElement("p");
//   categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
//   const descriptionElement = document.createElement("p");
//   descriptionElement.innerText =
//     article.description ?? "(Pas de description pour le moment.)";
//   const stockElement = document.createElement("p");
//   stockElement.innerText = article.disponibilite
//     ? "En stock"
//     : "Rupture de stock";

//   // Rattacher les éléments au reste du document
//   // rattachement des balises au DOM

//   sectionFiches.appendChild(pieceElement);

//   pieceElement.appendChild(imageElement);
//   pieceElement.appendChild(nomElement);
//   pieceElement.appendChild(prixElement);
//   pieceElement.appendChild(categorieElement);
//   pieceElement.appendChild(descriptionElement);
//   pieceElement.appendChild(stockElement);
// }

// //gestion des boutons

// const boutonTrier = document.querySelector(".btn-trier");

// boutonTrier.addEventListener("click", function () {
//   const piecesOrdonnees = Array.from(pieces);
//   piecesOrdonnees.sort(function (a, b) {
//     return a.prix - b.prix;
//   });
//   console.log(piecesOrdonnees);
// });

// const boutonFiltrer = document.querySelector(".btn-filtrer");

// boutonFiltrer.addEventListener("click", function () {
//   const piecesFiltrees = pieces.filter(function (piece) {
//     return piece.prix <= 35;
//   });
//   console.log(piecesFiltrees);
// });

// // exercice

// const boutonDecroissant = document.querySelector(".btn-decroissant");

// boutonDecroissant.addEventListener("click", () => {
//   const piecesOrdonnees = Array.from(pieces);
//   piecesOrdonnees.sort(function (a, b) {
//     return b.prix - a.prix;
//   });
//   console.log(piecesOrdonnees);
// });

// const boutonDescription = document.querySelector(".btn-nodesc");

// boutonDescription.addEventListener("click", () => {
//   const piecesFiltrees = pieces.filter((piece) => {
//     return piece.description;
//   });
//   console.log(piecesFiltrees);
// });

// // Projetez des données avec la fonction map

// // Fonction lambda
// const noms = pieces.map((piece) => piece.nom);
// for (let i = pieces.length - 1; i >= 0; i--) {
//   // signifie qu'on fait commencer la boucle par le dernier indice
//   if (pieces[i].prix > 35) {
//     noms.splice(i, 1);
//   }
// }
// console.log(noms);

// // Fonction normale/classique
// // const noms = pieces.map((piece) => {
// //   return piece.nom;
// // });
// // console.log(noms);

// const abordablesElements = document.createElement("ul");
// for (let i = 0; i < noms.length; i++) {
//   const nomElement = document.createElement("li");
//   nomElement.innerText = noms[i];
//   abordablesElements.appendChild(nomElement);
// }
// document.querySelector(".abordables").appendChild(abordablesElements);

// const nomsDisponibles = pieces.map((piece) => piece.nom);
// const prixDisponibles = pieces.map((piece) => piece.prix);

// for (let i = pieces.length - 1; i >= 0; i--) {
//   if (pieces[i].disponibilite === false) {
//     nomsDisponibles.splice(i, 1);
//     prixDisponibles.splice(i, 1);
//   }
// }

// const disponiblesElements = document.createElement("ul");

// for (let i = 0; i < nomsDisponibles.length; i++) {
//   const nomElement = document.createElement("li");
//   nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
//   disponiblesElements.appendChild(nomElement);
// }

// document.querySelector(".disponibles").appendChild(disponiblesElements);

// // Efface le contenu de la balise body et donc l’écran
// // document.querySelector(".fiches").innerHTML = '';

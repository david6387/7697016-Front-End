// Récupération des pièces depuis le fichier JSON
const response = await fetch("pieces-autos.json");
const pieces = await response.json();

// création des balises avec createElement
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${
  article.prix < 35 ? "€" : "€€€"
})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

// Rattacher les éléments au reste du document
// rattachement des balises au DOM
const sectionFiches = document.querySelector(".fiches");

sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

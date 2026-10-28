const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 },
];

function estValide(p) {
  return Number.isFinite(p.prix) && Number.isFinite(p.stock) && p.prix >= 0 && p.stock >= 0;
}

console.log("=== Catalogue ===");
produits.forEach(p => console.log(`${p.nom} - ${p.prix} MAD`));

const disponibles = produits.filter(p => p.stock > 0);
console.log(`\nProduits disponibles: ${disponibles.length}`);
console.log(disponibles.map(p => p.nom).join(", "));

const valeurTotale = produits.reduce((somme, p) => somme + p.prix * p.stock, 0);
console.log(`\nValeur totale du stock: ${valeurTotale} MAD`); 

if (disponibles.length === 0) {
  console.log("\nAucun produit disponible");
} else {
  const moinsCher = disponibles.reduce((min, p) => (p.prix < min.prix ? p : min));
 
  const { nom, prix } = moinsCher;
  console.log(`\nProduit le moins cher: ${nom} - ${prix} MAD`);
}

const resume = produits.map(p => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
console.log("\n=== Résumé ===");
console.log(resume.join("\n"));
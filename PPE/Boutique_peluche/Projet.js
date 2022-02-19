/*Liste des peluches*/
var panier = [];
var list = [
    { numero: 1, lienimage: "images/minigirafe.jpg", titre: "Mini Girafe" , prix: 70},
    { numero: 2, lienimage: "images/minisanglier.jpg", titre: "Mini Sanglier", prix: 100 },
    { numero: 3, lienimage: "images/miniescargot.jpg", titre: "Mini Escargot" , prix:10},
	{ numero: 4, lienimage: "images/minirenard.jpg", titre: "Mini Renard", prix:50},
	{ numero: 5, lienimage: "images/miniherisson.jpg", titre: "Mini Herisson", prix:30},
	{ numero: 6, lienimage: "images/minilapin.jpg", titre: "Mini Lapin", prix :30}
];

var prixtt = 0;


/*Pour avoir l'heure en direct*/
let date1 = Date();
let date2 = Date.now();

document.getElementById('date').innerHTML = date1;

/*Creer les cartes avec les animaux, leurs noms, prix, et l'ajout au panier*/
let tab = document.getElementById('liste')
list.forEach(peluche => {
    tab.innerHTML+=`<div id = ${peluche['numero']} class = "peluche">
    <h5>Nom : ${peluche['titre']}</h5>
    <image src = ${peluche['lienimage']}></image>
    <p>${peluche['prix']}€</p>
    <button onclick="addToBasket(this)">Ajouter au panier</button></div>`
    
});


/*Fonction permettant l'ajout au panier ainsi que de l'enlever*/
function addToBasket(button){
    
    if (button.parentNode.parentNode.id == 'liste'){
    document.getElementById('panier').appendChild(button.parentNode)
    button.innerText = "Retirer du panier"
    prixtt+=list[button.parentNode.id-1]['prix']
    document.getElementById('titre_panier').innerHTML = `Prix totale de votre panier: ${prixtt}€`
}
    else{
        document.getElementById('liste').appendChild(button.parentNode)
        button.innerText = "Ajouter au panier"
        prixtt-=list[button.parentNode.id-1]['prix']
        document.getElementById('titre_panier').innerHTML = `Prix totale de votre panier: ${prixtt}€`
    }
}



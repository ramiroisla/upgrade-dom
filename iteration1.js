// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let showButton = document.querySelector(".showme");
console.log(showButton);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let showH1 = document.querySelector("#pillado");
console.log(showH1);
// 1.3 Usa querySelector para mostrar por consola todos los p
let allP = document.querySelectorAll("p");
allP.forEach((element) => console.log(element));
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let allClass = document.querySelectorAll(".pokemon");
allClass.forEach((element) => console.log(element));
// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
// data-function="testMe".
let atrElements = document.querySelectorAll("[data-function]");
atrElements.forEach((element) => console.log(element));
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

let Element3 = document.querySelectorAll("[data-function]");
console.log(Element3[2]);

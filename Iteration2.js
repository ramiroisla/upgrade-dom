// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement("div");
console.log(newDiv);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv2 = document.createElement("div");
newDiv2.appendChild(document.createElement("p"));
console.log(newDiv2);
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let loop6p = document.createElement("div");
for (let index = 0; index < 6; index++) {
  loop6p.appendChild(document.createElement("p"));
}
console.log(loop6p);
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let pWithText = document.createElement("p");
pWithText.innerText = "Soy dinámico!";
console.log(pWithText);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let newH2 = document.createElement("h2");
newH2.className = "fn-insert-here";
newH2.innerText = "Wubba Lubba dub dub";
console.log(newH2);
// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
let newUlList = document.createElement("ul");
apps.forEach(function (element) {
  let newLiList = newUlList.appendChild(document.createElement("li"));
  newLiList.innerHTML = element;
});

console.log(newUlList);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let deleteClass = document.querySelectorAll(".fn-remove-me");
deleteClass.removeAttribute;
console.log(deleteClass);

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let newP = document.createElement("p");
newP.innerText = "Voy en medio!";
document.body.insertBefore(newP, document.querySelectorAll("div")[1]);
console.log(newP);
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let specificDiv = document.querySelectorAll('div[class="fn-insert-here"]');

specificDiv.forEach(function (element) {
  let divP = document.createElement("p");
  divP.innerHTML = "Voy dentro!";
  element.appendChild(divP);
});

console.log(specificDiv);
console.log("-------");
const newParr = document.createElement("p");
newParr.innerText =
  "Este es nuestro párrafo personalizado.Lo hemos creado desde0";
newParr.classList.add("article", "otra-clase");
newParr.id = "special-p";
newParr.setAttribute("type", "text");
// Localizando al padre donde lo queremos añadir
const parent = document.querySelector("#article-title").parentElement;
// Usanos appendChild que lo añade al final.
parent.appendChild(newParr);

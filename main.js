let contenedor =document.querySelector('#hola');
const div_nuevo = document.createElement('div');

div_nuevo.textContent= " Hola mundo ";
div_nuevo.style.color = "red";
div_nuevo.style.fontSize = "30px";


const ing_nuevo = document.createElement('img');
ing_nuevo.src="https://seeklogo.com/images/S/SENATI-logo-382A962923-seeklogo.com.png"

div_nuevo.appendChild(ing_nuevo);
contenedor.appendChild(div_nuevo);

//crear un elemento de parrafo 
//agregar lorem impus
//crear un div
   //crear elemento h6
   // agregar un texto al h6 "------"

//lucio andre arizaca carrion
let div_actividad =document.querySelector('.actividad');
const p = document.createElement('p');
const div = document.createElement('div');

   
p.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore a culpa iusto dolore officiis asperiores, tenetur nam vel impedit quidem harum perspiciatis ut amet. Molestias quam sed nobis alias laudantium?"
const h6 = document.createElement('h6');
div.textContent="lucio Andre Arizaca Carrion"

div.appendChild(h6);
div_actividad.appendChild(p);
div_actividad.appendChild(div);


fetch('https://api.randomuser.me/')
  .then(response => response.json())
  .then(data => {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `El nombre es: ${data.results[0].name.first}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
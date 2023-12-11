import './style.css'
import data from './assets/data';
import { header } from './components/header/header';
import { about } from './components/about/about';
import { education } from './components/education/education';
import { experience } from './components/experience/experience';
import { projects } from './components/projects/projects';
import { footer } from './components/footer/footer';
import { viewSelector } from './assets/viewSelector';
import { reorder } from './assets/reorder'
import { showProject } from './assets/showProject';
import { searchWordInObject } from './assets/searchWordInObject';



/*En cuanto a requisitos para este proyecto tendremos lo siguiente:

1️⃣ Responsive / Buena semántica / CSS variables

2️⃣ El código dividido en componentes, con su js y su css respectivamente.- 

3️⃣ Mínimo 2 funcionalidades con eventos

4️⃣ Pintado de datos utilizando variables (no introducir datos a mano directamente a los elementos que creemos)

5️⃣ No crear ningún elemento dentro del body del html que no venga creado ya por defecto en VITE*/


// Agregamos todas las partes de la página
const app = document.querySelector('#app');

app.prepend(header);

const main = document.createElement('main');
main.appendChild(about);
main.appendChild(education);
main.appendChild(experience);
main.appendChild(projects);
app.append(main);

app.appendChild(footer);
viewSelector('about_me');


// Agregamos los escuchadores de Eventos de Header
const education_link = document.querySelector('#education_link');
education_link.onclick = () => {
  viewSelector('education')
}

const about_me_link = document.querySelector('#about_me_link');
about_me_link.onclick = () => {
  viewSelector('about_me')
}

const experience_link = document.querySelector('#experience_link');
experience_link.onclick = () => {
  viewSelector('experience')
}

const projects_link = document.querySelector('#projects_link');
projects_link.onclick = () => {
  viewSelector('projects')
}

// Esto es para mostrar y ocultar el menu hamburguesa, version movil
const menuHamburguesa = document.querySelector('#menu-hamburguesa');
menuHamburguesa.addEventListener('click', () => {
  console.log('has dado click al menu burguer');
  let nav = document.querySelector('header>nav');
  if (nav.style.display === 'none') {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none'
  }
})


// Estos son todos los bucles que muestan la información contenida en data
const skillsUl = document.querySelector('#skills-ul');
for (let i = 0; i < data.skills.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = `
  <p>${data.skills[i]}</p>
  `
  skillsUl.appendChild(li)
}

const coursesUl = document.querySelector('#relevant-courses');
for (let i = 0; i < data.education.relevantCourses.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = `
  <p>${data.education.relevantCourses[i]}</p>
  `
  coursesUl.appendChild(li)
}

const experienceUl = document.querySelector('#experience-list');
for (let i = 0; i < data.workExperience.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = `
  <h3>${data.workExperience[i].position}</h3>
  <h4>${data.workExperience[i].startDate} - ${data.workExperience[i].endDate}</h4>
  <h4>${data.workExperience[i].company}</h4>
  <p>${data.workExperience[i].description}</p>
  `
  experienceUl.append(li)
}


// Para los proyectos, la función está definida en assets
for (let i = 0; i < data.projects.length; i++) {
  showProject(i)
}



// Barra de BUSQUEDA DE PROYECTOS -----------
let search = document.querySelector('#search_projects');

var input = document.createElement('input');
input.type = 'text';
input.name = 'search';
input.id = 'search';
input.placeholder = '🔎 Buscar';

//    ---------------         CAPTURAR EL VALOR DE INPUT              -------------------  //
input.onkeydown = (event) => {

  if (event.key.length === 1) {   // Si la tecla presionada es una letra
    console.log(input.value + event.key);
    searchWordInObject(data.projects, input.value + event.key) // Donde buscar, palabra clave
  }else{
    console.log(input.value);
    searchWordInObject(data.projects, input.value) // Si la ultima tecla no es una letra, que busque sólo lo que hay en el input
  }
}
search.appendChild(input);


skillsUl.onclick = () => {
  reorder(skillsUl);
};
coursesUl.onclick = () => {
  reorder(coursesUl);
};
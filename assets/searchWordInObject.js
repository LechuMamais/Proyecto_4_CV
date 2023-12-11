import { showProject } from "./showProject";

export function searchWordInObject(arrayDeObjetos, palabraClave) {
    const indicesCoincidentes = [];

    arrayDeObjetos.forEach((objeto, indice) => {

        const expresionRegular = new RegExp(palabraClave, 'gi');
        const coincidencias = JSON.stringify(objeto).match(expresionRegular);

        // Si hay coincidencias, nos quedamos con su índice
        if (coincidencias) {
            indicesCoincidentes.push(indice);
        }
    });

    console.log(indicesCoincidentes);
    let projectsList = document.querySelector('#projects-list');
    projectsList.innerHTML = '';
    for (let i = 0; i < indicesCoincidentes.length; i++) {
        showProject(indicesCoincidentes[i])
    }
    if (indicesCoincidentes.length === 0) {
        const projectsList = document.querySelector('#projects-list');
        projectsList.innerHTML = `
            <h4>No hay resultados para su busqueda.</h4>
        `
        projectsList.append(projectsList)
    }
}
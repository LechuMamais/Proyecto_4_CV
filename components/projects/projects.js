import data from '../../assets/data';
import './style.css'

export const projects = document.createElement('section')
projects.id = 'projects';
projects.classList = 'hidden';
projects.innerHTML = `
    <h2>Projects</h2>
    <ul id="projects-list">
        <!--Acá va un li por cada proyecto-->
    </ul>
`
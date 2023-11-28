import data from '../../assets/data';
import './style.css'

export const about = document.createElement('section')
about.id = 'about_me';
about.classList.add('hidden');
about.classList.add('flex-main-section');
about.innerHTML = `
    <h2>${data.name}</h2>
    <ul id="skills-ul">
    <!--Pintar ul>p por cada skill de data.skills-->
    </ul>
    <p>${data.aboutMe}</p>
    <a href="mailto:${data.email}">Contact me</a>
`
import data from '../../assets/data';
import './style.css'

export const experience = document.createElement('section')
experience.id = 'experience';
experience.classList = 'hidden';
experience.innerHTML = `
    <h2>Experience</h2>
    <ul id="experience-list">
        <!--Acá va un li por cada experience de data.workExperience-->
    </ul>
`
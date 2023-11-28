import data from '../../assets/data';
import './style.css'

export const experience = document.createElement('section')
experience.id = 'experience';
experience.classList.add('hidden');
experience.classList.add('flex-main-section');
experience.innerHTML = `
    <h2>Experience</h2>
    <ul id="experience-list">
        <!--Acá va un li por cada experience de data.workExperience-->
    </ul>
`
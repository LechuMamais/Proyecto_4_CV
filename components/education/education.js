import data from '../../assets/data';
import './style.css'

export const education = document.createElement('section')
education.id = 'education';
education.classList.add('hidden')
education.classList.add('flex-main-section');

education.innerHTML = `
    <h2>Education</h2>
    <h3>${data.education.degree}</h3>
    <h4>${data.education.university}</h4>
    <spam>${data.education.graduationYear}</spam>
    <p>${data.education.honors}</p>
    <h3>Relevant Courses:</h3>
    <ul id="relevant-courses">
    <!--Acá va un li por cada curso de data.education.relevantCourses-->
    </ul>
`

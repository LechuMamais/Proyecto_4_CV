import data from '../../assets/data';
import './style.css'


export const header = document.createElement('header');
header.innerHTML = `
    <div id="logo">
      <img alt="${data.name}" src="${data.avatar}">
      <h1>${data.name}</h1>
    </div>
    
    <nav>
      <ul>
        <li>
          <a id="about_me_link">About me</a>
        </li>
        <li>
          <a id="education_link">Education</a>
        </li>
        <li>
          <a  id="experience_link">Experience</a>
        </li>
        <li>
          <a id="projects_link">Projects</a>
        </li>
      </ul>
    </nav>

`

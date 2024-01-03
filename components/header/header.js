import data from '../../assets/data';
import './style.css'


export const header = document.createElement('header');
header.innerHTML = `
    <div id="logo">
      <div>
        <img alt="${data.name}" src="${data.avatar}">
      </div>
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

    <div id="menu-hamburguesa">
      <img src="../../public/hamburguesa.png" alt="menu"></img>
    </div>

`

import data from "./data";



export const showProject = (i) => {
    const projectsList = document.querySelector('#projects-list');
    let li = document.createElement('li');
    li.innerHTML = `
<h3>${data.projects[i].title}</h3>
<h4>${data.projects[i].description}</h4>
<a href="${data.projects[i].link}" target="_blank">More...</a>
<img class="project_img" src="${data.projects[i].preview}" alt="${data.projects[i].title}">
`
    projectsList.append(li)

}

export const viewSelector = (selection) => {

    // Ocultar todas las section
    const main = document.querySelector('main');
    for (let i = 0; i < main.childNodes.length; i++) {
        main.childNodes[i].classList.add('hidden');
    }

    // Mostrar la parte seleccionada
    document.querySelector('#'+selection).classList.remove('hidden');

    // Despintar el link anterior (todos)
    let prevLink = document.querySelector('.active_link');
    if(prevLink){
        prevLink.classList.remove('active_link');
    }
    
    // Dejar el link pintado
    document.querySelector('#'+selection+'_link').parentElement.classList.add('active_link');

    // Ocultar el menú en caso de que sea menu hamburguesa, en responsive
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var nav = document.querySelector('header>nav');
    if(viewportWidth<=696){
        
        nav.style.display = 'none'
    }
}

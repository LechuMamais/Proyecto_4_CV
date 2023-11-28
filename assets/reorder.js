export const reorder = (ulDeObjetos) => {
  const childrens = ulDeObjetos.children;
  console.log(childrens)


let i = 0;
setInterval(
  function(){
    if(i<childrens.length){
      childrens[i].style.order = Math.floor(Math.random() * childrens.length);
      i++
    }
  },125);

};


  /*for (let i = 0; i < childrens.length; i++) {
    setTimeout(function(){
      (childrens[i].style.order = Math.floor(Math.random() * childrens.length))
    },5000)
    
  };*/
// Seleção dos elementos que serão manpulados
//Seleção de DOM

var btn = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
var links= document.querySelectorAll('.menu a')

//console.log(btn);
//console.log(menu);

function menuSite(){
    //console.log('Função acionada')
    menu.classList.toggle('menu-aberto');
    btn.classList.toggle('x');
}

//Evento -> ação do usuário

btn.addEventListener('click', menuSite);
///menu.addEventListener('click', menuSite);
links.forEach(function(link){
    link.addEventListener('click', menuSite)    
});

//console.log(links.length); retorna o número de itens de uma lista
// for(var i=0; i<links.length; i++){
//     links[i].addEventListener('click', menuSite);
// }
// Retorne no console todos as imagens do site

const todas = document.getElementsByTagName('img');

console.log(todas);

//  Retorne no console apenas as imagens que começaram com a palavra imagem

const imgss = document.querySelectorAll('img[src^="img/imagem');
console.log(imgss);

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .sneakers-descricao

const h22 = document.querySelector('h2');
console.log(h22);
// Selecione o ultimo p do site

const ultimoP = document.querySelectorAll('p');

console.log(ultimoP[ultimoP.length-1]);

// Moste no console cada parágrafo do site

const allP = document.querySelectorAll('p');

allP.forEach((item) => console.log(item));
// mostre o texto dos parágrafos no console

allP.forEach((item) => {
    console.log(item.innerText)
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index ) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
    console.log(i++);
});

imgs.forEach(() => i++);

// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll(".menu a");
  
menu.forEach(function (item) {

        item.classList.add("ativo");

    }
);
 
// Remova a classe ativo de todo os itens do menu e mantenha apenas no primeiro

menu.forEach((item) => item.classList.remove('ativo'));

menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

const imgse = document.querySelectorAll('img');

imgse.forEach((item) => console.log(item.hasAttribute('alt')));

// Modifique o href do link externo no menu

const linkExterno = document.querySelector("a[href^='http'");

linkExterno.setAttribute('href','http://www.youtube.com');
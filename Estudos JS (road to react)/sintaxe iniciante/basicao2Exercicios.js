

// Crie um objeto com seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var eu = {
    nome: "Athos",
    sobrenome: "Rodolfo",
    idade: 23,
    altura: 1.90,
}

// Crie um método no objeto anterior, que mostre o seu nome completo

eu.nomeCompleto = function(){
    return this.nome + " " + this.sobrenome;
}


// Modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: "Labrador",
    cor: "preto",
    idade: 10,
    viuHomem: false,

    latir(viu){
        viu = this.viuHomem;
        if(viu == true){
        return "latindo";
        }else{
            return "cachorro não viu ninguem";
        }
    }
}

//nomeie 3 propriedades ou métodos de strings
// R = .toLowerCase() , toUpperCase(), .replace()

//nomeie 5 propriedades ou métodos de elementos do DOM
// R = .querySelector(), .innerHtml(), addEventListener()

//busque na web um objeto (método) capaz de interagir com o clipboard
// clipboard é a parte doseu computador que lida com CTRL + C e CTRL + V

// R =

function copy() {
    let copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click",copy);



  function paste() {
    
    var pasteText = document.querySelector("#output");
    pasteText.focus();
    document.execCommand("paste");
    
  }

  document.querySelector("#paste").addEventListener("click", paste);



// ==== ARRAYS ====

// Crie um array com os anos que o Brasil ganhou a copa
//1959, 1962, 1970, 1994, 2002

var brasilCampeao = [1959, 1962,1970,1994,2002];

// Interaja com o array utilizando um loop, para mostrar
// no console a seguinte mensagem, 'O brasil ganhou a copa de ${ano}'

for (var i = 0; i<brasilCampeao.length; i++){   
    console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var i = 0; i<frutas.length;i++){ 
    
    console.log(frutas[i]);
    
    if(frutas[i] === 'Pera'){
        console.log('achou pera, encerrando');
        break;
    }
}

var fruta = frutas[frutas.length-1];
console.log(`A ultima fruta é : ${fruta}`);
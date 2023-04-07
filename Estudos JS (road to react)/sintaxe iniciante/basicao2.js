
// INTRODUÇÃO A OBJETOS EM JAVASCRIPT (SERÁ Q É MAIS FACIL Q EM JAVA????)

// objeto pessoa
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true

}

// METODOS 

// objeto quadrado com métodos de calculo de área e perímetro

var quadrado = {
  lados: 4,
  area (lado){
    return lado*lado;
  },
  perimetro(lado){
    return this.lados * lado;
  },
  cinco(){
    return 5;
  }
}

addEventListener('click', function(){ console.log(Math.round(Math.random() * 10));});

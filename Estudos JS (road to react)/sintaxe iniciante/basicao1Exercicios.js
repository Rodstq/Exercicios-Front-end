 //Crie uma função para verificar se um valor é Truthy

 function ehTrhuthy(valor){
    return !!valor;
 }

  //Crie uma função que retorne o seu nome completo
  // ela deve possuir os parâmetros: nome e sobrenome

  function nomeCompleto(nome,sobrenome){
    console.log(nome + " " + sobrenome);
  }

// Crie uma função que verifica se um número é par

function ehPar(num){
  if ( num % 2 == 0){
    return true;
  } else {
    return false;
  }
}

//Crie um a função que retirna o tipo de dado do arugmento passado nela (typeof)

function typeDoDado(dado){
  return typeof(dado);
}

//AddEventListener é uma função nativa do JavaScript
//o primeiro parâmetro é o evento que ocorre e o segundo o Callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evento 'click' ocorrer
function showName(){
addEventListener('click', function(){
  console.log('Athos Rodolfo');
});
}

//Corrija o erro abaixo (codigo abaixo já está corrigido)

var totalPaises=193;

function precisoVisitar(paisesVisitados){
  
  return `Ainda  faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados){
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
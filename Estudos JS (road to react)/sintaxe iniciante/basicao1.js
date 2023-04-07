

function basicao(){

var meuNome = "athos";
var minhaIdade = "23";
var minhaComidaFavorita;
minhaComidaFavorita = "feijoada";

var var1;
let var2;
var var3;
var var4;
let var5;


var temString = "string aqui ";
var temNumero = 123;
var idade = 23;
var nome = "Athos ";
var sobrenome = "Rodolfo";
var nomeCompleto = nome + sobrenome;
var frase = " It's time";

console.log(temString , temNumero, idade, nomeCompleto, frase);
console.log(typeof(nome));


var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

var nan1 = 'a10' * 2;
console.log(nan1);
var nan2 = 'a10' / 2;
console.log(nan2);

var sum = '200';
sum = +sum;
var soma = sum + 50;
console.log(soma);

var incremento = 5;
incremento++;
console.log(incremento);

var idadeParente = 62;

if( idade < idadeParente){
    console.log("idade é menor");
} else if ( idade === idadeParente){
    console.log('é igual');
}else{
    console.log("idade é maior");
}

var expressao = (5-2) && (5-'') && ( 5-2);
console.log(expressao);

var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta=0;

console.log(!!nome);
console.log(!!idade);
console.log(!!possuiDoutorado);
console.log(!!empregoFuturo);
console.log(!!dinheiroNaConta);

var brasil = 207;
var china = 1340;

switch (brasil > china) {
  case true:
    console.log('brasil tem mais pessoas');
  case false :
    console.log("china tem mais pessoas");

}

addEventListener('click', function(){console.log("Clicou!!!!")});

}

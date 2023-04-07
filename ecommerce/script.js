// const clickable= document.querySelector('.moletom');
// var adicionados = document.querySelector('.produtosAdicionados');
// var num=0;

// clickable.addEventListener('click', abreCarrinho);

// function abreCarrinho(){
//   alert('criando produto');
//   num++;
//   adicionados.textContent('aasdas');
// }

var amostra = [2, 50, 75, 90];

for (var i = 0; i <= amostra.length; i++){
    if(amostra[i] >= 75){
      print("Descartar da lista");
    } else if (amostra[i] >= 50 && amostra[i] < 75){
      print("Manter sob observação");
    } else if ( amostra[i] < 50){
      print('Isolar e inicar protocolo de cuidados');
    }
  }
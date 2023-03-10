const clickable= document.querySelector('.moletom');
var adicionados = document.querySelector('.produtosAdicionados');
var num=0;

clickable.addEventListener('click', abreCarrinho);

function abreCarrinho(){
  alert('criando produto');
  num++;
  adicionados.textContent('aasdas');
}
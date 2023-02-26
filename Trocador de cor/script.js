const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".cor");

btn.addEventListener("click", function() {
   let cor = "#";
   for(let i = 0; i < 6; i++) {
    cor += hex[getRandomNumber()];
    console.log(cor);
   }

   color.textContent = cor;
   document.body.style.backgroundColor = cor;
});

function getRandomNumber (){
    return Math.floor(Math.random() * hex.length);
}




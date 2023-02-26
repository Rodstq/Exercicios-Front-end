
const bin = [0,1,2,3,4,5,6,7,8,9,10];
var digitos = parseInt(prompt("digite quantos dígitos você quer"));

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
        let atualA=[];

        for(i = 0; i <= digitos; i++){
            var atual = bin[getRandomNumber()];
            atualA.push(atual);
            if (i == digitos){
            console.log(atualA);
            // const newP = document.createElement('p');
            // newP.innerText = atualA;
            // document.body.appendChild(para);


            const newP = document.createElement("p");
            const node = document.createTextNode(atualA);
            
            newP.appendChild(node);
            document.getElementById("geral").appendChild(newP);

            }            
        }
});

function getRandomNumber (){
    return Math.floor(Math.random() * bin.length);
}
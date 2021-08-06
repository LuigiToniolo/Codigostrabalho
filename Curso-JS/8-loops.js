console.log(`\nTrabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existe");
        destinoExiste = true;
        break; 
    }
    contador += 1;
}
console.log("Destino Existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe, tivemos um erro!");
}

for(let cont = 0;cont < 3; cont++){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existe");
        destinoExiste = true;
    }
}
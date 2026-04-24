// Métodos
// Limpeza e validação

const email = "       email@empresa.com    ";
const emailLimpo = email.trim(); // Remove o espaço do email
console.log(emailLimpo)

//includes - verifica se o dominio é valido 
if(emailLimpo.includes("@")){
    console.log("Email valido")
}else{
    console.log("Email invalido")
}

// transformação de texo 

const tituloLivro = "Como aprender a programar"

const texto = tituloLivro
.toLowerCase() // deixar minusculo 
.split(" ") // Remove parte do texto 
.join("-") // oq colocar coloca no meio das palavras

console.log(texto)

//to fixed
const precoProduto = 199.99;
const desconto = 0.15; //15%
const precoFinal = precoProduto * (1 - desconto);
console.log(precoFinal)
console.log(`R$ ${precoFinal.toFixed(2)}`);
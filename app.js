let lista_de_numeros_sorteados = [];
let numerosecreto = numeroaleatorio();
let tentativas = 1  ;
let propainel;
removeratributo()
function exibirtexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
} 
exibirtexto("h1", "Bem vindo ao desafio do número secreto");
exibirtexto("p", "escolha um número de 1 a 100");

function verificarChute() {
    let chute = document.querySelector ("input").value;
    let tentativas_tentativa = tentativas > 1? "tentativas" : "tentativa";
    let textonativa = `você descobriu o número secreto com ${tentativas} ${tentativas_tentativa}`
    console.log (chute,tentativas);
    if (chute == numerosecreto ) {
        exibirtexto ("p", textonativa);
        exibirtexto ("h1", "Acertou!!!") 
    document.getElementById ("reiniciar").removeAttribute("disabled")
    document.getElementById("desabilitar_chute").setAttribute("disabled",true)
    }
    else {
        if (chute > numerosecreto) {
            exibirtexto("p", "tente um número menor")
        }
        else {
            exibirtexto("p", "tente um número maior")
        }
    } tentativas++
    limparcampo()
    
    

}
    

function numeroaleatorio() {
  let numero_escolhido = parseInt(Math.random() * 100 + 1 ) ;
  if (lista_de_numeros_sorteados.includes(numero_escolhido)) {
    return numeroaleatorio();
  } else{
     lista_de_numeros_sorteados.push(numero_escolhido)
     console.log(lista_de_numeros_sorteados)
    return numero_escolhido
  }
}

function limparcampo() {
    chute = document.querySelector ("input");
    chute.value = "" ;
} 
function reiniciar() {
    numerosecreto = numeroaleatorio();
    limparcampo()
    tentativas = 1
    exibirtexto("h1", "Bora para mais 1!!")
    exibirtexto("p", "escolha um número de 1 a 100")
    document.getElementById("reiniciar").setAttribute("disabled", true)
}
function removeratributo() {
   return document.getElementById ("desabilitar_chute").removeAttribute("disabled") 
    }
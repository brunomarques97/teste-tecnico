//exercicio 1
const indice = 13;
let soma = 0;
let k = 0;

while ( k < indice) {
    k = k + 1; soma = soma + k; 
}
document.getElementById('exercicio1').textContent = soma;


//exercicio 2
function verificarFibonacci() {
    const numeroInformado =  parseInt(document.getElementById('numero').value);
    
    if (pertenceFibonacci(numeroInformado)) {
        document.getElementById('exercicio2').textContent = numeroInformado + " pertence à sequência de Fibonacci.";
    } else {
        document.getElementById('exercicio2').textContent = numeroInformado + " não pertence à sequência de Fibonacci.";
    }
}

function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
  
    while (b <= numero) {
      if (b === numero) {
        return true;
      }
      let temp = b;
      b = a + b;
      a = temp;
    }
  
    return false; 
  }
  


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

  //exercicio 3

  fetch('dados.json')
    .then(response => response.json())
    .then(faturamento_diario => {
        const faturamento = faturamento_diario
            .filter(dia => dia.valor > 0) 
            .map(dia => dia.valor);

        const menorFaturamento = Math.min(...faturamento);
        const maiorFaturamento = Math.max(...faturamento);

        const somaFaturamento = faturamento.reduce((acc, valor) => acc + valor, 0);
        const mediaFaturamento = somaFaturamento / faturamento.length;

        const diasAcimaDaMedia = faturamento.filter(valor => valor > mediaFaturamento).length;

        document.getElementById('menorFaturamento').textContent = "Menor valor de faturamento: " + menorFaturamento;
        document.getElementById('maiorFaturamento').textContent = "Maior valor de faturamento: " + maiorFaturamento;
        document.getElementById('diasAcimaDaMedia').textContent = "Dias com faturamento acima da média: " + diasAcimaDaMedia;
     
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
  


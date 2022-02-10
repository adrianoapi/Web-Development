document.querySelector('#botao').addEventListener('click', function () {

    let peso    = document.querySelector('#peso'  ).value;
    let altura  = document.querySelector('#altura').value;
    let frase   = document.createElement('span');

    let imc     = peso / (altura * altura);

    frase.textContent = 'IMC: ' +  Math.round(imc) ;

    let resultado = document.querySelector('.resultado');

    resultado.appendChild(frase);

});
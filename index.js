

function input() {
    document.getElementById("altura").focus();
}
window.onload = input;

document.querySelector('#btn-calcular').addEventListener('click', function () {

    let peso      = document.querySelector('#peso'     ).value;
    let altura    = document.querySelector('#altura'   ).value;
    let resultado = document.querySelector('.resultado');

    let imc = peso / (altura * altura);
    resultado.innerHTML = "Calculando...";

    // Validar valores
    if(peso <= 0 || altura <= 0){
        resultado.innerHTML = 'Informe valores válidos!';
        return false;
    }

    // Passar imagem de interação
    setTimeout(function(){
        resultado.innerHTML = 'Seu IMC é de  '
        + '<strong>' + Math.round(imc) + '</strong>, '
        + 'logo está <strong>' + criarFrase(imc) + '</strong>!';

        input();

   }, 300);

});

function criarFrase(value)
{
    let text = "com obesidade Morbida";

    if (value < 20)   {  
        text ='abaixo do peso ideal';
    }  
    else if (value > 20 && value <= 25)   {  
        text ="no peso Ideal";
    }  
    else if (value > 25 && value <= 30)   {  
        text ="acima do peso ideal";
    }  
    else if (value > 30 && value <= 35)   {  
        text ="no inicio da obesidade";
    }  
    else if (value > 35 && value <= 40)   {  
        text ="com obesidade preocupante";
    }  

    return text;
}
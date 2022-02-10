document.querySelector('#botao').addEventListener('click', function () {

    let peso    = document.querySelector('#peso'  ).value;
    let altura  = document.querySelector('#altura').value;
    let frase   = document.createElement('span'   );

    let imc     = peso / (altura * altura);

    frase.textContent = 'Seu IMC é de  ' +  Math.round(imc) + ', logo ' + criarFrase(imc);

    let resultado = document.querySelector('.resultado');

    resultado.appendChild(frase);

});

function criarFrase(value)
{
    let text = "informe novamente os valores";

    if (value < 20)   {  
        text ='Abaixo do peso ideal';
    }  
    else if (value > 20 && value <= 25)   {  
        text ="Peso Ideal";
    }  
    else if (value > 25 && value <= 30)   {  
        text ="Acima do peso ideal";
    }  
    else if (value > 30 && value <= 35)   {  
        text ="Inicio da obesidade";
    }  
    else if (value > 35 && value <= 40)   {  
        text ="Obesidade preocupante";
    }  
    else if (value > 40 && value <= 50)   {  
        text ="Obesidade Morbida";
    }

    return text;
}
document.querySelector('#botao').addEventListener('click', function () {

    let peso    = document.querySelector('#peso'  ).value;
    let altura  = document.querySelector('#altura').value;
    let frase   = document.createElement('span'   );

    let imc     = peso / (altura * altura);

    frase.textContent = 'Seu IMC é de  ' +  Math.round(imc) + ', logo está ' + criarFrase(imc) + '!';

    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = "";
    resultado.appendChild(frase);

});

function criarFrase(value)
{
    let text = "...";

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
    else if (value > 40 && value <= 50)   {  
        text ="com obesidade Morbida";
    }

    return text;
}
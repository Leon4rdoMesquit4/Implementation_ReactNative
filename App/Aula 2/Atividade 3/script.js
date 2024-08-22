// crie um programa para calcular a massa corpórea de um indivíduo, 
// o usuário vai entrar com os dados e o programa deve dizer se o usuário 
// está acima do peso, abaixo, sobrepeso, obesidade, etc

function calcularIMC(peso, altura) {
    // Calcula o IMC
    let imc = peso / (altura * altura);

    // Retorna o IMC com duas casas decimais
    return imc.toFixed(2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

document.getElementById("verificar").onclick = 
    function() {
        var peso = parseFloat(document.getElementById("peso").value)
        var altura = parseFloat(document.getElementById("altura").value)
        var resultado = classificarIMC(calcularIMC(peso, altura))
        console.log(resultado)

        document.getElementById('resultado').innerHTML = resultado
    }

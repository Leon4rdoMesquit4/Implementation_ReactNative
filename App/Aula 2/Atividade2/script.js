// crie um programa que leia uma dada temperatura e converta para a temperatura escolhida pelo o usuário

document.getElementById("Conversor").onclick = function () {
    
    const limitesDeTemperatura = {
        1: -273.15, // Celsius
        2: -459.67, // Fahrenheit
        3: 0        // Kelvin
    };

    let temperature = parseFloat(document.getElementById("temperatura").value)
    let temp1 = Number(document.getElementById("temp1").value);
    let temp2 = Number(document.getElementById("temp2").value);

    if (temperature < limitesDeTemperatura[temp1]) {
        alert(`Valor impossível ${temperature}`)
        return;
    } 

    let conversion1 = toCelsius(temperature, temp1)
    let conversion2 = fromCelsius(conversion1, temp2)

    alert(`O valor convertido foi ${conversion2}`)

};

function toCelsius(value, from) {
    switch (from) {
        case 2:
            return (value - 32) * 5 / 9;
        case 3:
            return value - 273.15;
        default:
            return value; // Já está em Celsius
    }
}

// Função para converter Celsius para qualquer unidade
function fromCelsius(value, to) {
    switch (to) {
        case 2:
            return value * 9 / 5 + 32;
        case 3:
            return value + 273.15;
        default:
            return value; // Já está em Celsius
    }
}
// crie um programa que sorteie números da loteria aleatorios 
// de acordo com o tipo de jogo, se escolheu quina terá que sortear 
// 5, lotofacil 15, sena 6, e não pode repetir os números aleatórios 
// no mesmo jogo

function sortearSequencia(numero, limite) {

    let array = []

    while (array.length <= numero) {

        let number = Math.floor(Math.random() * limite + 1)

        if (array.includes(number) == false) {
            array.push(number)
        }

    }

    return alert(array)
}

document.getElementById("Lotofacil").addEventListener("click", function () {
    sortearSequencia(15, 25)
});
document.getElementById("Quina").addEventListener("click", function () {
    sortearSequencia(5, 80)
});
document.getElementById("Sena").addEventListener("click", function () {
    sortearSequencia(6, 60)
});

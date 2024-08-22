var time = 0

function imprimir() {
    document.write('<p>Contando</p>')
}

let contador = document.getElementById('contador')

// var timer = setInterval(() => (
//     contador.innerHTML += 'Hello World<br/>'
// ), 1000)


// setTimeout(imprimir, 3000)

// setTimeout( () => (
//     contador.innerHTML += 'Hello World<br/>'
// ), 2000)

function verificar() {
    time += 1
    contador.innerHTML = `${time}`
    console.log(time)
}

var timer = setInterval(verificar, 1000)

function stopTimer() {
    clearInterval(timer)
}
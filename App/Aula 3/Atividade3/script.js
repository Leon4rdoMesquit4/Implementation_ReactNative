// let user = [
//     {nome: 'Leozin', idade: 21, cargo: 'Estudante'},
//     {nome: 'Nina', idade: 22, cargo: 'Estudante'},
//     {nome: 'Victor', idade: 21, cargo: 'Estudante'},
// ]
// let users2 = [
//     {nome: 'Leozin', idade: 21, cargo: 'Programador', genero: 'Masculino'},
//     {nome: 'Nina', idade: 22, cargo: 'Designer', genero: 'Feminino'},
//     {nome: 'Victor', idade: 21, cargo: 'Programador', genero: 'Masculino'},
// ]

// let userr = {
//     nome: 'Leozin', 
//     idade: 21, 
//     cargo: 'Estudante'
// };

// for (var i = 0; i < users2.length; i++) {
//     console.log(users2[i].nome)
//     console.log(users2[i].idade)
//     console.log(users2[i].cargo)
//     console.log(users2[i].genero)
// }

// let {nome, idade} = userr;

// console.log(nome, idade);

// let numbers = [9, 3, 4, 6, 7, 12]
// let numbers2 = [...numbers ,9, 3, 4, 6, 7, 12]

// console.log(numbers2)

// let pessoa = {
//     nome: 'Gabi',
//     idade: 22
// }

// let profissional = {
//     ...pessoa,
//     profissao: 'Programadora raiz'
// }

// console.log(profissional)

// function user(info) {
//     let data = {
//         ...info,
//         stats: 'ok',
//         inicio: '2024'
//     }
//     console.log(data)
// }

// user({ nome: 'Leozin', email: 'LeozinReiDelas@gmail.com'})

// function user(...nomes) {
//     console.log(nomes)
// }

// user('Leozin', 'Gabi', 'Arthur', 'Emilly')

// function gerarNumeros(...numeros) {
//     const num = Math.floor(Math.random() * numeros.length)
//     console.log(numeros[num], num)
// }

// gerarNumeros(2,3,1,33,6,78,54,23)

// let nomes = ['Leozin', 'Gabi', 'Arthur', 'Emilly']

// nomes.map((item, index) => {
//     console.log(item, index)
// }
// )

// function somaRegular(a, b){
//     let total = a + b
//     return console.log(total)
// }

// somaRegular(5, 6)

// let soma = (a, b) => {
//     let total = a + b
//     return console.log(total)
// }

// soma(20, 20)

//https://reqres.in/api/users?page=2

let listElement = document.querySelector('#app')
let users = []

function getUsers() {
    fetch('https://reqres.in/api/users?page=2')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            users = data.data
            users.map((user) => {
                let liElement = document.createElement('li')
                let titleElement = document.createElement('strong')
                let imgElement = document.createElement('img')

                let titleText = document.createTextNode(user.first_name + '' + user.last_name)
                titleElement.appendChild(titleText)
                liElement.appendChild(titleElement)

                imgElement.src = user.avatar
                liElement.appendChild(imgElement)

                listElement.appendChild(liElement)
            })
        })
}

getUsers()
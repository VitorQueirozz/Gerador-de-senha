const slider = document.querySelector('#slider')
const button = document.querySelector('#button')
const valor = document.querySelector('#valor')

const containerPassword = document.querySelector('#container-password')
const title = document.querySelector('.title')
const password = document.querySelector('.password')
const tooltip = document.querySelector('.tooltip')

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@"

let novaSenha = ''

valor.innerHTML = slider.value

slider.oninput = function() {
    valor.innerHTML = this.value
}

function gerarSenha() {
    
    let pass = ''
    for(let i = 0, n = charset.length; i < slider.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass
}

function copiarSenha () {
    navigator.clipboard.writeText(novaSenha)
}

button.addEventListener('click', gerarSenha)
containerPassword.addEventListener('click', copiarSenha)

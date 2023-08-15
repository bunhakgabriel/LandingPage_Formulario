var formulario = document.getElementById('formulario')

const objInputs = {
    nome: document.getElementById('nome'),
    sobrenome: document.getElementById('sobrenome'),
    email: document.getElementById('email'),
    confirmEmail: document.getElementById('confirmEmail'),
    senha: document.getElementById('senha'),
    confirmSenha: document.getElementById('confirmSenha'),
}

const verificarCamposVazios = () => {
    let bolean = true
    for(let valor of Object.values(objInputs)){
        if(valor.value === ''){
            bolean = false
            valor.style.borderBottomColor = 'red'
        } else {
            valor.style.borderBottomColor = 'green'
        }
    }
    return bolean
}

const verificarNomeSobrenome = () => {
    let bolean = true
    nome = objInputs.nome.value
    sobrenome = objInputs.sobrenome.value
    expression = /^[a-zA-Z]+$/

    if(!expression.test(nome)){
        objInputs.nome.style.borderBottomColor = 'red'
        bolean = false
    }
    if(!expression.test(sobrenome)){
        objInputs.sobrenome.style.borderBottomColor = 'red'
        bolean = false
    }
    return bolean
}

const verificarEmail = () => {
    let bolean = true
    email = objInputs.email.value
    confirmEmail = objInputs.confirmEmail.value
    expression = /^\w+@[a-z0-9]+\.com/

    if(!expression.test(email)){
        objInputs.email.style.borderBottomColor = 'red'
        bolean = false
    }
    if(!expression.test(confirmEmail)){
        objInputs.confirmEmail.style.borderBottomColor = 'red'
        bolean = false
    }
    if(email != confirmEmail){
        objInputs.confirmEmail.style.borderBottomColor = 'red'
        bolean = false
    }

    return bolean

}

const verificarSenha = () => {
    let bolean = true

    senha = objInputs.senha.value
    confirmSenha = objInputs.confirmSenha.value
    console.log(senha,confirmSenha)

    if(senha != confirmSenha){
        objInputs.confirmSenha.style.borderBottomColor = 'red'
        bolean = false
    }
    if(senha.length < 6 || senha.length > 12){
        objInputs.senha.style.borderBottomColor = 'red'
        bolean = false
    }
    if(confirmSenha.length < 6 || senha.length > 12){
        objInputs.confirmSenha.style.borderBottomColor = 'red'
        bolean = false
    }

    return bolean
}

const verificarData = () => {
    let bolean = true

    mes = document.getElementById('mes').value
    dia = document.getElementById('dia').value
    ano = document.getElementById('ano').value

    if(mes === '2' && dia > 28){ alert('Data invalida'), bolean = false}
    if(mes === '4' && dia > 30){ alert('Data invalida'), bolean = false}
    if(mes === '6' && dia > 30){ alert('Data invalida'), bolean = false}
    if(mes === '9' && dia > 30){ alert('Data invalida'), bolean = false}
    if(mes === '11' && dia > 30){ alert('Data invalida'), bolean = false}
    return bolean
}

const iniciarEventos = () => {
    const campos = verificarCamposVazios()
    const nomeSobrenome = verificarNomeSobrenome()
    const email = verificarEmail()
    const senha = verificarSenha()
    const dataNasc = verificarData()

    if(campos && nomeSobrenome && email && senha && dataNasc) {
        alert('Formulário enviado.')
        formulario.submit()
    }
}

document.addEventListener('submit', e => {
    e.preventDefault()
    iniciarEventos()
})

//Essa função ira criar o <select id='ano'> no html 
function carregarAnosHtml(){
    let select = document.getElementById('ano')
    let ano = 1919 

    for(let c = 2005; c > ano; c--){
        let option = document.createElement('option')
        option.setAttribute('value', c)
        option.innerText = c
        select.appendChild(option)
    }
}
carregarAnosHtml()











/*

function Valida(){

    this.nome = document.getElementById('nome').value
    this.sobrenome = document.getElementById('sobrenome').value
    this.mes = document.getElementById('mes').value
    this.dia = document.getElementById('dia').value
    this.ano = document.getElementById('ano').value
    this.email = document.getElementById('email').value
    this.confirmEmail = document.getElementById('confirmEmail').value
    this.senha = document.getElementById('senha').value
    this.confirmSenha = document.getElementById('confirmSenha').value
    this.telefone = document.getElementById('telefone').value

    this.eventos = function(){
        const campos = this.verificarCamposVazios()
    }

    this.verificarCamposVazios = () => {
        let bolean = true

        for(let valor of Object.values(this)){
            if(valor === ''){
                bolean = false
                valor.style.borderBottomColor = 'red'
            } else {
                valor.style.borderBottomColor = 'green'
            }
        }
        return bolean
    }

}

document.addEventListener('submit', e => {
    e.preventDefault()
    const form = new Valida()
    form.eventos()
})

*/


/*
document.addEventListener('input', (e) => {
    const form = new Valida()
    form.eventos()
    console.log(e.target)
})
*/

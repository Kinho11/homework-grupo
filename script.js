function mostrarModal() {
    let modalFundo = document.querySelector(`.modal-fundo`)
    let modalLembrete = document.querySelector('.modal-adicionar')

    modalFundo.style.display = 'flex'
    modalLembrete.style.display = 'flex'
}

function limparModalAddLembrete() {
    let modalFundo = document.querySelector('.modal-fundo')
    let modalLembrete = document.querySelector('.modal-adicionar')

    modalFundo.style.display = 'none'
    modalLembrete.style.display = 'none'


    let textoDaData = document.querySelector('.data')
    let elementoAtual = document.querySelector(`#${textoDaData.innerText}`)

    let novoLembrete = document.createElement("div");
    novoLembrete.classList.add('card')


    let textoLembrete = document.querySelector('#lembrete').value
    let horarioLembrete = document.querySelector('#horario').value

    novoLembrete.innerText = `${textoLembrete} Horario: ${horarioLembrete}`
 
    
    elementoAtual.appendChild(novoLembrete)



}

function avancar() {
    let textoDaData = document.querySelector('.data')
    let proximoElemento = document.querySelector(`#${textoDaData.innerText}`).nextElementSibling
    let elementoAtual = document.querySelector(`#${textoDaData.innerText}`)
    let semLembrete = document.querySelector('#semLembrete')

    if(proximoElemento.id != "") {
        textoDaData.innerHTML = proximoElemento.id

        if(elementoAtual.firstChild != undefined) {
            semLembrete.classList.add('desativado')
        }
    
        elementoAtual.classList.add('desativado')
        proximoElemento.classList.remove('desativado')
    }

    

}

    function voltar() {
    let textoDaData = document.querySelector('.data')
    let elementoAnterior = document.querySelector(`#${textoDaData.innerText}`).previousElementSibling



    if(elementoAnterior.id != "" && elementoAnterior.id != "semLembrete") {
        textoDaData.innerHTML = elementoAnterior.id
    }
}

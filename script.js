function mostrarModal() {
    let modalFundo = document.querySelector(`.modal-fundo`)
    let modalLembrete = document.querySelector('.modal-adicionar')

    modalFundo.style.display = 'flex'
    modalLembrete.style.display = 'flex'
}

function limparModalAddLembrete() {
    let modalFundo = document.querySelector('.modal-fundo')
    let modalLembrete = document.querySelector('.modal-adicionar')
    let semLembrete = document.querySelector('#semLembrete')
    modalFundo.style.display = 'none'
    modalLembrete.style.display = 'none'


    let textoDaData = document.querySelector('.data')
    let elementoAtual = document.querySelector(`#${textoDaData.innerText}`)

    let novoLembrete = document.createElement("div");
    novoLembrete.classList.add('card-lembrete')

    let textoLembrete = document.querySelector('#lembrete').value
    let horarioLembrete = document.querySelector('#horario').value


    novoLembrete.innerHTML = `<span>${textoLembrete}</span> <span>${horarioLembrete}</span>`
 
    
    elementoAtual.appendChild(novoLembrete)

    if(elementoAtual.firstChild != null) {
        semLembrete.classList.add('desativado')
    }



}

function avancar() {
    let textoDaData = document.querySelector('.data')
    let proximoElemento = document.querySelector(`#${textoDaData.innerText}`).nextElementSibling
    let elementoAtual = document.querySelector(`#${textoDaData.innerText}`)
    let semLembrete = document.querySelector('#semLembrete')

    if(proximoElemento.id != "") {
        textoDaData.innerHTML = proximoElemento.id

        elementoAtual.classList.add('desativado')
        proximoElemento.classList.remove('desativado')
    }

    if(proximoElemento.firstChild != null) {
        semLembrete.classList.add('desativado')
    } else {
        semLembrete.classList.remove('desativado')
    }

}

    function voltar() {
    let textoDaData = document.querySelector('.data')
    let elementoAnterior = document.querySelector(`#${textoDaData.innerText}`).previousElementSibling
    let elementoAtual = document.querySelector(`#${textoDaData.innerText}`)
    let semLembrete = document.querySelector('#semLembrete')


    if(elementoAnterior.id != 'semLembrete') {
        if(elementoAnterior.id != "" && elementoAnterior.id != "semLembrete") {
            textoDaData.innerHTML = elementoAnterior.id
        
            elementoAtual.classList.add('desativado')
            elementoAnterior.classList.remove('desativado')
        }
    
        if(elementoAnterior.firstChild != null) {
            semLembrete.classList.add('desativado')
        } else {
            semLembrete.classList.remove('desativado')
        }
    }

}



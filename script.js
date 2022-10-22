function mostrarModal() {
    let modalFundo = document.querySelector(`.modal-fundo`)
    let modalLembrete = document.querySelector('.modal-adicionar')

    modalFundo.style.display = 'flex'
    modalLembrete.style.display = 'flex'
}

function limparModalAddLembrete() {
    let textoLembrete = document.querySelector('#lembrete').value
    let horarioLembrete = document.querySelector('#horario').value


    if(textoLembrete != "" && horarioLembrete != "") {
        let modalFundo = document.querySelector('.modal-fundo')
        let modalLembrete = document.querySelector('.modal-adicionar')
        let semLembrete = document.querySelector('#semLembrete')
        let textoDaData = document.querySelector('.data')
        let elementoAtual = document.querySelector(`#${textoDaData.innerText}`)
        let novoLembrete = document.createElement("div");
        let arrComparacao = []

        modalFundo.style.display = 'none'
        modalLembrete.style.display = 'none'
    
        
        novoLembrete.classList.add('card-lembrete')
    
        novoLembrete.innerHTML = `<span>${textoLembrete}</span> <span>${horarioLembrete}</span>`
     
        elementoAtual.appendChild(novoLembrete)
        
    
        for(i=0; i < elementoAtual.children.length; i++) {
            arrComparacao.push(elementoAtual.children[i].children[1].innerText)
        }
    
        arrComparacao.sort()
    
        if(elementoAtual.firstChild != null) {
            semLembrete.classList.add('desativado')
            elementoAtual.insertBefore(novoLembrete, elementoAtual.children[arrComparacao.indexOf(novoLembrete.children[1].innerText)])
        }

        console.log(arrComparacao)
    
        textoLembrete = ""
        horarioLembrete = ""
     
    } else {
        alert("Campo vazio dectado !!")
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



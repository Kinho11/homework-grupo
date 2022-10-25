function mostrarModal() {
    let modalFundo = document.querySelector(`.modal-fundo`)
    let modalLembrete = document.querySelector('.modal-adicionar')

    modalFundo.style.display = 'flex'
    modalLembrete.style.display = 'flex'
}


const data = new Date()
var meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
var textoDaData = document.querySelector('.data')
textoDaData.innerText = `${meses[data.getMonth()]+'-'+data.getFullYear()}`
var contadorMeses = data.getMonth()
var contadorAnos = data.getFullYear()
let novoLembrete = document.createElement("div");
let divPai = document.querySelector('#pai')
novoLembrete.className = "card-pai"
novoLembrete.setAttribute('id', `${meses[contadorMeses%12]}-${contadorAnos}`)
divPai.insertAdjacentElement("beforeend", novoLembrete)
contadorMeses = contadorMeses + 1200000

function avancar() {
    let textoDaData = document.querySelector('.data')
    let elementoAtual = document.querySelector(`#${textoDaData.innerText}`)
    let semLembrete = document.querySelector('#semLembrete')

    let divPai = document.querySelector('#pai')

    contadorMeses++
    if(contadorMeses%12 == 0) {
        contadorAnos++
    }
    
    if(elementoAtual != null) {
        elementoAtual.classList.add('desativado')
    }
    
    
    textoDaData.innerText = `${meses[Math.abs(contadorMeses)%12]}-${contadorAnos}`
    elementoAtual = document.querySelector(`#${textoDaData.innerText}`)
    if(elementoAtual == null) {
        let novoLembrete = document.createElement("div");
        novoLembrete.className = "card-pai"
        novoLembrete.setAttribute('id', `${meses[Math.abs(contadorMeses)%12]}-${contadorAnos}`)
        divPai.insertAdjacentElement("beforeend", novoLembrete)

    }
        
        if(elementoAtual != null) {
            elementoAtual.classList.remove('desativado')

        }
    
}

function voltar() {
        let textoDaData = document.querySelector('.data')
        let elementoAtual = document.querySelector(`#${textoDaData.innerText}`)
        let semLembrete = document.querySelector('#semLembrete')

        if(contadorMeses%12 == 0) {
            contadorAnos--
        }
        if(elementoAtual != null) {
            elementoAtual.classList.add('desativado')
        }
        
        contadorMeses--

        textoDaData.innerText = `${meses[Math.abs(contadorMeses)%12]}-${contadorAnos}`

        
        elementoAtual = document.querySelector(`#${textoDaData.innerText}`)

        if(elementoAtual != null) {
            elementoAtual.classList.remove('desativado')

        }
        
        let divPai = document.querySelector('#pai')
       
        if(elementoAtual == null ) {
            let novoLembrete = document.createElement("div");
            novoLembrete.className = "card-pai"
            novoLembrete.setAttribute('id', `${meses[Math.abs(contadorMeses)%12]}-${contadorAnos}`)
            divPai.insertAdjacentElement("afterbegin", novoLembrete)
    
        }
        

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
     
    } else {
        alert("Campo vazio dectado !!")
    }

    document.querySelector('#lembrete').value = ""
    document.querySelector('#horario').value = ""
    
}

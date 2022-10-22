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
}



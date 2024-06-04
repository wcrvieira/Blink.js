// Seleciona todos os atributos que contenham button
document.querySelectorAll('button').forEach(button => {
    // O botão adiciona um evento do mouse (click)
    button.addEventListener('click', () => {
        // Neste trecho, a função recupera o valor do button
        fetch(`/led?turnTo=${button.id}`)
        // Aqui, a função atribui o nome da classe do button
        document.body.className = button.id
    })
})




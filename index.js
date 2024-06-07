// Declaração de constantes que recebem os pacotes instalados
const { Board, Led } = require('johnny-five')
const express = require('express')

// Aqui, é criada uma constante que simula uma placa Arduino
const board = new Board()

// Função que inicializa os elementos da placa Arduino
board.on('ready', () => {
    // Definimos qual é a porta do Arduino conectada ao led
    const led = new Led(12)

    // Cria uma constante que recebe a biblioteca Express do Javascript
    const app = express()
    // Cria a rota principal para buscar o arquivo index.html
    app.get('/', (req, res) => {
        // Devolve o caminho do arquivo index.html
        res.sendFile('index.html', { root: '.' })
    })

    // Cria uma segunda rota para ler o valor dos buttons (botões)
    app.get('/led', (req, res) => {
        const { turnTo } = req.query
        // Se recebe o valor do button, envia o comando apropriado
        if (typeof led[turnTo] == 'function') {     
            led[turnTo]()
            res.send(`Ligando led ${turnTo}`)
        } else {
            // Caso contrário, envia mensagem de erro
            res.status(406).send('Ação inválida')
        }
    })
    // Cria constante para configurar qual porta usar
    const port = process.env.PORT || 3000
    // Ativa o monitoramento da porta (escuta)
    app.listen(port, () => console.log(`> Servidor rodando na porta ${port}`))
})
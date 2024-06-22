// INSTALAR AS DEPENDENCIAS
const express = require('express')
const app = express()

const mysql = require('mysql')

// CONFIGURAR O MYSQL COM DADOS EM OBJETO

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'aula_node'
})

//Conectar usando os conceitos de  Conceito de call back - coleta os erros durante a conexão

// CONEXÃO
db.connect(err => {
    if (err) {
        throw err
    }
    console.log('Conectado ao MySQL')
})

// CONFIGURAÇÃO DO EJS
// Realizar um set do express para ejs.
app.set('view engine', 'ejs')


// CRIAR UMA ROTA
// ('/') Aspas barra indica página inicial
app.get('/', (req, res) => {
    const sql = "SELECT * FROM alunos"
    db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('pagina', {
            alunos:results
        })

    })
})

// ABRIR UMA ROTA

app.listen(3000, () => {
    console.log('Servidor aberto!')
})
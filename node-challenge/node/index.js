const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const config = {
    host: 'nodechallengedb',
    user: 'root',
    password: 'root',
    database: 'nodechallengedb'
}


const listOfNames = ['Mateus', 'Jorge', 'Cristiano', 'Júlia', 'Ana', 'Clara']

const connectionWithDatabase = mysql.createConnection(config) 

app.get('/', async (req, res) => {
    const randomNumber =  Math.floor(Math.random() * listOfNames.length)
    const nameToInsert = listOfNames[randomNumber]    
    const insertPersonSql = `INSERT INTO person(name) values ('${nameToInsert}')`

   connectionWithDatabase.query(insertPersonSql, [nameToInsert], (insertError) => {
    if (insertError) {
        console.log(insertError)
        res.status(500).send('Ocorreu um erro ao inserir uma pessoa aleatoriamente!');
        return;
    }

    connectionWithDatabase.query('SELECT name FROM person', (selectError, results) => {
        if (selectError) {
            res.status(500).send('Ocorreu um erro ao buscar as pessoas cadastradas!');
            return;
        }

        const peopleNames = results.map(row => row.name);

        res.render('fullcycle', { peopleNames });
    });
});

   
})

app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log('Node está rodando na porta: ' + port)
})
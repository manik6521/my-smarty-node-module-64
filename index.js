const express = require("express");
var cors = require('cors');
const res = require("express/lib/response");
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('smarty---------++++++------!')
})

const users = [
    { id: 1, name: 'sabaNa', phone: '124506931' },
    { id: 2, name: 'saba', phone: '124506931' },
    { id: 3, name: 'sa na', phone: '124506931' },
    { id: 4, name: 'sou ik ana', phone: '124506931' },
    { id: 5, name: 'sa nlOa', phone: '124506931' },
    { id: 6, name: 'sana', phone: '124506931' }
]
app.get('/users', (req, res) => {

    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port  ${port}`)
})

app.post('/user', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})



const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Wow I am excited from node 2');
})
const users = [
    {id:0, name:'Sabana', email: 'sabana@gmail.com'},
    {id:1, name:'Alamgir', email: 'sabana@gmail.com'},
    {id:2, name:'Sonia', email: 'sabana@gmail.com'},
    {id:3, name:'Mirza', email: 'sabana@gmail.com'},
    {id:4, name:'Mirza', email: 'sabana@gmail.com'},
    {id:5, name:'Mirza', email: 'sabana@gmail.com'}
]
app.get('/users', (req, res)=>{
    const search = req.query.search
    if(search){
        const searchResult =users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }else{
        res.send(users);
    }
});

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body)
    // res.send(JSON.stringify(newuser));
    res.json(newUser);
})

app.get('/users/:id',(req,res)=>{
    const id= req.params.id;
    const user = users[id];
    res.send(user)
})
app.get('/fruits', (req,res)=>{
    res.send(['mango', 'orange', 'banana'])
})
app.get('/fruits/mangoes/fazli', (req,res)=>{
    res.send('Yammy Yammy tok marka fazli');
})

app.listen(port, () => {
    console.log('listning form node', port);
})
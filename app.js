const express= require('express');
const path = require('path')
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000,() => {
    console.log('servidor corriendo en el puerto 3000')
})
app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname + '/views/home.html'))
})

app.get('/register', (req,res)=> {
    res.sendFile(path.resolve(__dirname + '/views/register.html'))
})

app.get('/login', (req,res)=> {
    res.sendFile(path.resolve(__dirname + '/views/login.html'))
})

app.post('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname + '/views/home.html'))
})


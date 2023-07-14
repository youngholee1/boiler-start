const express = require('express');
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yhl1173:fkaus55@cluster0.8q6wuyt.mongodb.net/', {
}). then(() => console.log("mongoDB Connected..."))
.catch(err=> console.log(err))

app.get('/', (req, res) => res.send('Hello world'))

app.listen(port, () => console.log('example app ${port}!'))
const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.send('Welcome azure')
})

app.listen(5000, ()=> {
    console.log('Server is listening at port 5000....')
})
const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.send('Hello world azure deployment is here')
})

app.listen(process.env.PORT || 5000);
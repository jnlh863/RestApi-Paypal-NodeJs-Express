const express = require('express');
const {PORT} = require('./config.js');
const ruta = require('./routers/pagos.routing.js');
const path = require('path');

const app = express();


app.use(ruta);
app.use(express.static(path.resolve('src/public')));



app.listen(PORT, ()=>{
    console.log(`Puerto ${PORT}`)
});
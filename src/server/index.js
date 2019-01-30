const express = require("express");
const path = require("path");

//const bodyParser = require('body-parser');

const app = express();
const distPath = path.join(__dirname, "..", "..", "dist");
const port = 3000;

app.use(express.static(distPath));
//app.use( bodyParser.json() );

app.listen(3000, ()=>{
    console.log(`linstening on port ${port}...`)
})
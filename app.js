const express = require("express");  

const app = express ();             

const path = require("path");           


app.listen(3001, () => {
    console.log("servidor a la escucha del puerto 3001");
}); 

const publicPath = path.resolve(__dirname, "./Public");
app.use( express.static(publicPath) );

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/index.html"));
});

app.get("/Registro", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/register.html"));
});

app.get("/Login", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/login.html"));
});

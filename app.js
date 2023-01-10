const express = require("express");  

const app = express ();             

const path = require("path");           


const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Servidor a la escucha del puerto ${port}`"));

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



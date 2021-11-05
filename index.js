const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Express" });
});

const DB_USER = "duarte"
const DB_PASSWORD = encodeURIComponent("LPXSi0A8hIYcgDD4");

// LPXSi0A8hIYcgDD4
// mongodb+srv://duarte:LPXSi0A8hIYcgDD4@apicluster.mm7xl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.mm7xl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectamos ao MongoDB");
    app.listen(port, () => {
        console.log(`Rodando na porta ${port} 🚀`);
    });
})
.catch((error) => {
    console.log(error);
});
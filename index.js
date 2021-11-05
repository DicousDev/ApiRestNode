const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const Person = require("./models/Person");

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Express" });
});

app.post("/person", async (req, res) => {
    const {name, age, salary, approved} = req.body;

    if(!name || !age || !salary || !approved) {
        res.status(422).json({error: `Todos os campos são obrigatórios`})
        return false;
    }

    const person = {
        name,
        age,
        salary,
        approved
    };

    try {
        await Person.create(person);
        res.status(201).json({message: "Pessoa inserida no sistema com sucesso."});
    }
    catch(error) {
        res.status(500).json({error: error});
    }
});

const DB_USER = "duarte"
const DB_PASSWORD = encodeURIComponent("LPXSi0A8hIYcgDD4");

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
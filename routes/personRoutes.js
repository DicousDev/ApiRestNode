const Person = require("../models/Person");
const router = require("express").Router();

router.post("/", async (req, res) => {
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

module.exports = router;
require("dotenv").config()
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
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

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
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const path = require("path");
const routes = require("./routes");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");
//app.use(express.static('views'));
app.use(express.static(path.join(__dirname, 'views')));
app.use("/routes", routes)

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT, "http://localhost:4000/")
})
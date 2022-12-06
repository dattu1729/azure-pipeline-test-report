const express     = require("express");
const bodyParser  = require("body-parser");
const data        = require("./data.json");

const app = express();

// examples of url path to get list
app.get("/api/data", (req, res) => {
    res.json(data);
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.listen(8080, "localhost", () => {
    console.log("Starting server on http://localhost:8080");
});
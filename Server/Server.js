const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port =2000;
const db = require("./queries");
var cors = require('cors')
const Fetching = require('./Fetching')

app.use(cors())

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/users", db.getUsers);
app.post("/getProductpage", db.getProductpage);

app.post("/getProductVariant", db.getProductVariant);


app.post("/ProductOption", db.ProductOption);
app.post("/GivemeDataofThisUser", db.GivemeDataofThisUser);



app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);

app.post("/postUserFirebase", db.postUserFirebase);

app.get("/products", db.getProduct);
app.post("/getProductbycategory", db.getProductbycategory);

app.post("/postOrder", db.postOrder);


app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API", name: "aziz" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
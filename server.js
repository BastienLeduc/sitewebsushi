//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var SushiSchema = require('./schema/schemaSushi.js');
//Connexion à la base de donnée
mongoose
  .connect("mongodb://localhost/db")
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

var db = mongoose.connection;
db.dropCollection('sushis')
db.on('error',console.error.bind(console,'connection error'));

db.once('open', function() {
  console.log("Connection Successful!");
  
  // compile schema to model
  var Sushi = mongoose.model('sushis', SushiSchema.schema);

  // a document instance
  var sushi1 = new Sushi({ nom: 'Maki saumon',type:'maki',ingredient1: 'riz' ,ingredient2: 'nori',ingredient3: 'saumon',ingredient4: '',ingredient5: '', prix: 5.20, nombre: 6 });
  var sushi2 = new Sushi({ nom: 'Maki cheese avocat',type:'maki',ingredient1: 'riz' ,ingredient2: 'nori',ingredient3: 'avocat',ingredient4: 'fromage',ingredient5: '', prix: 3.90, nombre: 6 });
  var sushi3 = new Sushi({ nom: 'Maki thon',type:'maki',ingredient1: 'riz' ,ingredient2: 'nori',ingredient3: 'thon',ingredient4: '',ingredient5: '', prix: 5.70, nombre: 6 });
  var sushi4 = new Sushi({ nom: 'California rolls Saumon avocat',type:'California rolls',ingredient1: 'riz' ,ingredient2: 'nori',ingredient3: 'sesame',ingredient4: 'saumon',ingredient5: 'avocat', prix: 5.70, nombre: 6 });
  var sushi5 = new Sushi({ nom: 'Thon avocat',type:'California rolls',ingredient1: 'riz' ,ingredient2: 'nori',ingredient3: 'sesame',ingredient4: 'thon',ingredient5: 'avocat', prix: 5.90, nombre: 6 });
  var sushi6 = new Sushi({ nom: 'Chirashi Mix thon saumon',type:'Chirashi',ingredient1: 'thon' ,ingredient2: 'saumon',ingredient3: 'sesame',ingredient4: '',ingredient5: '', prix: 15, nombre: 1 });
  var sushi7 = new Sushi({ nom: 'Chirashi Saumon avocat',type:'Chirashi',ingredient1: 'Saumon' ,ingredient2: 'avocat',ingredient3: 'sesame',ingredient4: '',ingredient5: '', prix: 15.5, nombre: 1 });
  var sushi8 = new Sushi({ nom: 'Chirashi Saumon',type:'Chirashi',ingredient1: 'Saumon' ,ingredient2: 'sesame',ingredient3: '',ingredient4: '',ingredient5: '', prix: 14.90, nombre: 1 });
  var sushi9 = new Sushi({ nom: 'Soupe miso', type:'Accompagnement', ingredient1: 'shiru' ,ingredient2: 'miso',ingredient3: '',ingredient4: '',ingredient5: '', prix: 2.90, nombre: 1 });
  var sushi10 = new Sushi({ nom: 'Salade de chou', type:'Accompagnement', ingredient1: 'chou' ,ingredient2: 'sesame',ingredient3: '',ingredient4: '',ingredient5: '', prix: 2.90, nombre: 1 });
  var sushi11 = new Sushi({ nom: 'Sushi saumon', type:'Sushi', ingredient1: 'riz' ,ingredient2: 'saumon',ingredient3: '',ingredient4: '',ingredient5: '', prix: 1.95, nombre: 1 });
  var sushi12 = new Sushi({ nom: 'Sushi thon', type:'Sushi', ingredient1: 'riz' ,ingredient2: 'thon',ingredient3: '',ingredient4: '',ingredient5: '', prix: 2.30, nombre: 1 });
  
  // save model to database
  sushi1.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi2.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi3.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi4.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi5.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi6.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi7.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi8.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi9.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi10.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi11.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });
  sushi12.save(function (err, Sushi) {
    if (err) return console.error(err);
    console.log(Sushi.nom + " saved to sushi collection.");
  });

});
//On définit notre objet express nommé app
const app = express();

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);

app.use(bodyParser.json());

//Définition des CORS
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//Définition du routeur
const router = express.Router();
app.use("/users", router);
require(__dirname + "/controllers/userController")(router);
app.use("/sushis", router);
require(__dirname + "/controllers/sushiController")(router);
app.use("/commandes", router);
require(__dirname + "/controllers/commandeController")(router);

//Définition et mise en place du port d'écoute
const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));
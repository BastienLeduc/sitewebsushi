const Sushi = require("../../schema/schemaSushi.js");

async function createSushi(req, res) {
  const { nom, type, ingredient1 , ingredient2, ingredient3 ,ingredient4, ingredient5 , prix , nombre  } = req.body;
  if (!nom || !type || !ingredient1 && !ingredient2 || !prix || !nombre) {
    //Le cas où le nom, le type , deux ingredients, le prix ou le nombre ne sont pas valides
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  // Création d'un objet sushi
  const sushi = {
    nom,
    type, 
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    prix,
    nombre
  };
  // On check en base si le sushi existe déjà
  try {
    const findSushi = await Sushi.findOne({
      nom
    });
    if (findSushi) {
      return res.status(400).json({
        text: "Le sushi existe déjà avec ce nom"
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {
    // Sauvegarde du sushi en base
    const sushiData = new Sushi(sushi);
    const sushiObject = await sushiData.save();
    return res.status(200).json({
      text: "Succès",
      token: sushiObject.getToken()
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getOneSushiByNom(req, res) {
  const { nom } = req.body;
  if (!nom) {
    //Le cas où le nom ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  try {
    // On check si la commande existe en base
    const findOneSushi = await Sushi.findOne({nom: this.nom},nom);
    if (!findOneSushi)
      return res.status(401).json({
        text: "Il n'y a pas de commandes"
      });
    else{
      console.log(findOneSushi)
      return res.status(200).json({
        text: "Succès",
        data: findOneSushi
      });
    };
    } catch (error) {
      return res.status(500).json({ error });
    }
}
async function getAllSushiByType(req, res) {
  const { type } = req.body;
  if (!type) {
    //Le cas où le nom ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  try {
    // On check si la commande existe en base
    const findOneSushi = await Sushi.find({type: this.type},type).toArray(function(err, result){
      if (err) throw err;
      console.log(result);
    });
    if (!findOneSushi)
      return res.status(401).json({
        text: "Il n'y a pas de commandes"
      });
    else{
      console.log(findOneSushi)
      return res.status(200).json({
        text: "Succès",
        data: findOneSushi
      });
    };
    } catch (error) {
      return res.status(500).json({ error });
    }
}

async function getAllSushi(req, res) {
  try {
    // On recupere les sushis
    const findAllSushi = await Sushi.find({});
    if (!findAllSushi)
      return res.status(401).json({
        text: "Il n'y a pas de sushis"
      });
    else{
      return res.status(200).json({
        text: "Succès",
        data: findAllSushi
      });
    };
    } catch (error) {
      return res.status(500).json({ error });
    }
}
//On exporte nos deux fonctions

exports.createSushi = createSushi;
exports.getOneSushiByNom = getOneSushiByNom;
exports.getAllSushiByType = getAllSushiByType;
exports.getAllSushi = getAllSushi;
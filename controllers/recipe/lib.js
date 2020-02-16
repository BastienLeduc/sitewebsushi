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
    const sushiData = new User(sushi);
    const sushiObject = await sushiData.save();
    return res.status(200).json({
      text: "Succès",
      token: sushiObject.getToken()
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

//On exporte nos deux fonctions

exports.createSushi = createSushi;
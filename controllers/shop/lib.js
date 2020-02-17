const Shop = require("../../schema/schemaShop.js");

async function createCommande(req, res) {
  const { email, num, contenu, prix } = req.body;
  if (!email || !num || !contenu || !prix) {
    //Le cas où l'email ou bien le password ou le prix ou le contenu ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  // Création d'un objet shop
  const shop = { email, num, contenu, prix };

  try {
    // On check si la commande existe en base
    const findCommande = await Shop.findOne({ num });
    if (findCommande) {
      return res.status(400).json({
        text: "Une commande avec ce numéro existe deja"
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {
    // Sauvegarde de la commande en base
    const shopData = new Shop(shop);
    const shopObject = await shopData.save();
    return res.status(200).json({
      text: "Succès",
      token: shopObject.getToken()
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getAllCommande(req, res) {
  try {
    // On recupere les commandes en base
    const findAllCommande = await Shop.find({});
    if (!findAllCommande)
      return res.status(401).json({
        text: "Il n'y a pas de commandes"
      });
    else {
      return res.status(200).json({
        text: "Succès",
        data: findAllCommande
      });
    };
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getOneCommande(req, res) {
  const { num } = req.body;
  if (!num) {
    //Le cas où le nom ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  try {
    // On check si la commande existe en base
    const findOneCommande = await Shop.findOne({ num: this.num }, num);
    if (!findOneCommande)
      return res.status(401).json({
        text: "Il n'y a pas de commandes"
      });
    else {
      console.log(findOneCommande)
      return res.status(200).json({
        text: "Succès",
        data: findOneCommande
      });
    };
  } catch (error) {
    return res.status(500).json({ error });
  }
}

//On exporte nos deux fonctions

exports.createCommande = createCommande;
exports.getAllCommande = getAllCommande;
exports.getOneCommande = getOneCommande;
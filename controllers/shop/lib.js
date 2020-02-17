const Shop = require("../../schema/schemaShop.js");

async function createCommande(req, res) {
  const { email, num, contenu, prix, datecollecte } = req.body;
  if (!email || !num || !contenu || !prix || !datecollecte) {
    //Le cas où l'email ou bien le password ou le prix ou le contenu ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide, un des champs est vide"
    });
  }
  // Création d'un objet shop
  const shop = { email, num, contenu, prix ,datecollecte};

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

async function getCommandeByMail(req, res) {
  const email = req.params.email;
  if (!email) {
    //Le cas où le nom ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  try {
    // On check si la commande existe en base
    const findIdCommande = await Shop.find({ email: email }, email);
    if (!findIdCommande)
      return res.status(401).json({
        text: "Il n'y a pas de commandes"
      });
    else {
      tab = []
      for (let i = 0; i < findIdCommande.length; i++) {
        try {
          const commande = await Shop.findById({ _id: findIdCommande[i]._id });
          tab.push(commande);
        } catch (error) {
          console.log(error);
        }
      }
      return res.status(200).json({
        text: "Succès",
        data: tab
      });
    };
  } catch (error) {
    return res.status(500).json({ error });
  }
}

//On exporte nos deux fonctions

exports.createCommande = createCommande;
exports.getCommandeByMail = getCommandeByMail;
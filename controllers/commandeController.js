const shop = require('./shop/lib.js');

module.exports = function (app) {
    app.post('/createcommande',shop.createCommande);
    app.get('/getcommandebymail/:email',shop.getCommandeByMail);
}
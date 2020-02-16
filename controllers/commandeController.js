const shop = require('./shop/lib.js');

module.exports = function (app) {
    app.post('/createcommande',shop.createCommande);
    app.post('/getallcommande',shop.getAllCommande);
    app.post('/getonecommande',shop.getOneCommande);
}
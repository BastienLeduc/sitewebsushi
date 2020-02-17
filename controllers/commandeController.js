const shop = require('./shop/lib.js');

module.exports = function (app) {
    app.post('/createcommande',shop.createCommande);
    app.get('/getallcommande',shop.getAllCommande);
    app.get('/getonecommande',shop.getOneCommande);
}
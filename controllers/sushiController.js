const recipe = require('./recipe/lib.js');

module.exports = function (app) {
    app.post('/createSushi',recipe.createSushi);
    app.get('/getonesushibynom',recipe.getOneSushiByNom);
    app.get('/getsushibytype',recipe.getAllSushiByType);
    app.get('/getallsushi',recipe.getAllSushi);
}
const recipe = require('./recipe/lib.js');

module.exports = function (app) {
    app.post('/createSushi',recipe.createSushi);
    app.post('/getonesushibynom',recipe.getOneSushiByNom);
    app.post('/getsushibytype',recipe.getAllSushiByType);
    app.post('/getallsushi',recipe.getAllSushi);
}
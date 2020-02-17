const recipe = require('./recipe/lib.js');

module.exports = function (app) {
    app.post('/createSushi',recipe.createSushi);
    app.get('/getallsushi',recipe.getAllSushi);
}
let routes = (function(){
    let DB = require('./DB');

    function genericRequest(req, res){
        res.send("This is the API for the game TheMDSQuiz");
    }

    function getStoryQuestion(req, res){
        let level = req.params.level;
        let id = req.params.id;

        let data = DB.get(level, id);

        res.send(JSON.stringify(data));
    }

    function getRandomQuestion(req, res){
        let data = DB.getRandom();

        res.send(JSON.stringify(data));
    }

    function getRandomBuiltQuestion(req, res){
        res.send('Random built question');
    }

    return {
        genericRequest: genericRequest,
        getStoryQuestion: getStoryQuestion,
        getRandomQuestion: getRandomQuestion,
        getRandomBuiltQuestion: getRandomBuiltQuestion
    }
})();

module.exports = routes;
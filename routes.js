var routes = (function(){

    function genericRequest(req, res){
        res.send("This is the API for the game TheMDSQuiz");
    }

    function getStoryQuestion(req, res){
        res.send('Question for level: ' + req.params.level + ', id: ' + req.params.id);
    }

    function getRandomQuestion(req, res){
        res.send('Random question');
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
let express = require('express'),
    cors = require('cors'),
    app = express(),
    routes = require('./src/routes');
    port = process.env.port || 80;

app.use(cors());

app.get('/', routes.genericRequest);
app.get('/api/storyQuestion/:level/:id', routes.getStoryQuestion);
app.get('/api/randomQuestion', routes.getRandomQuestion);
app.get('/api/randomBuiltQuestion', routes.getRandomBuiltQuestion);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});
var express = require('express');
var app = express();

app.use(express.bodyParser());

app.post('/log', function(req, res) {
    res.send('thanks');

    console.log("Time: " + req.body.time);
    console.log("Info: " + req.body.info);
});

app.listen(3000);
console.log('listening on 3000 homie');
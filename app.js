var express = require('express');
var app = express();
var runningLog = [];

var log = function(data) {
    var time = new Date();
    var info = JSON.parse(data);

    console.log(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());
    console.log(info);
    runningLog.push({time: time, info: info});
};

app.use(express.bodyParser());

app.post('/log', function(req, res) {
    res.send('thanks');
    log(req.body.info);
});

app.get('/log', function(req, res) {
    var wholeLog;
    wholeLog += '<ul>'  ;
    runningLog.forEach(function(elem, index) {
        wholeLog += '<li>' + elem.time + elem.info + '</li>';
    });
    wholeLog += '</ul>';
    res.send(wholeLog);
});

app.listen(3000);
console.log('listening on 3000 homie');

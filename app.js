var express = require('express');
var app = express();
var runningLog = [];

function var_dump(element, depth, tab) {
    if(!depth)
        depth = 0;
    if(!tab)
        tab = '';

    tab += '\t';
    string = '';

    if (typeof element == 'string') {
        string += ': ' + element + '' + '\n';
    } else {
        //Loop through all the child objects in element
        for(property in element) {
            //Add the name and value of the child object
            string += tab + property;

            //Check if the child is an object
            if(typeof element[property] == 'object')
                string += '\n'+ var_dump(element[property], depth+1, tab) + '\n';
            else
                string += ': '+ element[property] + ''+ '\n';
        }
    }
    return string;
}

var log = function(data) {
    var time = new Date();
    var info = var_dump(data);
    console.log(time);
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
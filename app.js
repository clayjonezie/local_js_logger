var express = require('express');
var app = express();

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
    console.log("Time: " + new Date());
    console.log("Info: " + var_dump(data));
};

app.use(express.bodyParser());

app.post('/log', function(req, res) {
    res.send('thanks');
    log(req.body.info);
});

app.listen(3000);
console.log('listening on 3000 homie');
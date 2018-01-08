const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

const app = express();
// let stringifyFile;

// app.use(bodyParser.json());
app.use(express.static('assets'));
app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

let server = app.listen(3000, 'localhost', function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});


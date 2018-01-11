const express = require('express');

const app = express();

const authUser = (req, res, next) => {
    console.log('Autoryzacja użytkownika...');
    next();
};

const checkPermission = (req, res, next) => {
    console.log('Sprawdzanie uprawnień.');
    next();
};

app.get('/', function(req, res) {
    res.send('Hello world');   
});

app.get('/store', authUser, checkPermission, function(req, res) {
    res.send('To jest sklep.');   
});

let server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});


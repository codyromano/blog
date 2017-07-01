const config = require('./config').getAll();
const express = require('express');
const path = require('path');
const markdownServe = require('markdown-serve');

const app = express();

app.use(`${config.path}static/`, express.static('static'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/blog/', markdownServe.middleware({ 
  rootDirectory: path.join(__dirname, 'content'),
  view: 'article',
  variable: 'content'
}));

app.get(`${config.path}*`, (req, res) => {
  res.redirect('/blog/welcome');
  res.end();
});

app.listen(config.port);
console.log(`Listening on ${config.port}`);
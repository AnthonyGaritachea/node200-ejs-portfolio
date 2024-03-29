const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var profile = require('./profile.js');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        person: {
          firstName: 'Anthony',
          lastName: 'Garitachea',
        }
      }
    res.render('index', data);
});

app.use('/profile', profile);

app.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body }, console.log(req.body))
  });

app.listen(8080, () => {
    console.log('listening at http://localhost:8080')
});
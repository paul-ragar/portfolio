const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./controller/mainCtrl');
const massive = require('massive');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

// ======== Endpoints ========


const port = 8000;
app.listen(port || 80, () => {
  console.log('Listening on port: ' + port);
})

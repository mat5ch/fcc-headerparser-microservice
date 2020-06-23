// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// set port
app.set('port', process.env.PORT || 3000);

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');

// Only allow cors with FCC
var corsOptions = {
  origin: 'https://www.freecodecamp.org',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/whoami", function (req, res) {
  const output = {'ipaddress': req.ip, 'language': req.headers['accept-language'], 'software': req.headers['user-agent']};
  res.send(output);
});

// listen for requests :)
var listener = app.listen(app.get('port'), function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

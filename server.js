const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var COMMENTS_FILE = path.join(__dirname, 'temperature.json');

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// app.get('/api/temperature', (req, res) => {
//   fs.readFile(COMMENTS_FILE, (err, data) => {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     res.json(JSON.parse(data));
//   });
// });

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

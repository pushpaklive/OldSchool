const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');

const api = require('./routes/api');
//const index = require('./routes/index')
const port = 3000;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.get('/', function(req, res){
    res.send('Hello from server.js file: Here I have set the web server! :)');
})

app.use('/api', api);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./src/config/environment');
const router = require('./src/router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.get('*', (req, res) => {    
  res.sendStatus(404);
}); 

app.listen(config.port, () => {     
  console.log(`Server is running on port http://localhost:${config.port}`); 
});

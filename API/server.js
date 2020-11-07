const express         = require('express');
const bodyParser      = require('body-parser');
const morgan          = require('morgan');
const cors            = require('cors');
const app             = express();


const port = 8000;
app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

// Listen to port
app.listen(port, () => {
  console.log("We are live on " + port);
});

require('./app/routes')(app);
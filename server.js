// Source: https://bezkoder.com/react-node-express-mysql/#Configure_MySQL_database_038_Sequelize

// Express web server in server.js where we configure CORS, initialize & run Express REST APIs.

const express = require('express'); // Express is for building the Rest apis
const bodyParser = require('body-parser'); // body-parser helps to parse the request and create the req.body object
const cors = require('cors'); // cors provides Express middleware to enable CORS with various ptions
const db = require("./models"); // calls in database 

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database with application. In development we may need to drop the existing tables and re-sync the database. So we use force: true.
db.sequelize.sync({ force:true });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to beginning of the beginning." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
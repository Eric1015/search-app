// server/app.js

/** require dependencies */
const express = require("express")
const routes = require('./routes/index')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/search-app"

/** connect to MongoDB datastore */
mongoose.connect(url, function (err, res) {
    if (err) { 
      console.log ('ERROR connecting to: ' + url + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ' + url);
    }
  });

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
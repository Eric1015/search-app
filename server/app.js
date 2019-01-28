// server/app.js

/** require dependencies */
const path = require("path")
const express = require("express")
const routes = require('./routes/index')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI;

/** connect to MongoDB datastore */
mongoose.connect(url, { useNewUrlParser: true }, function (err, res) {
    if (err) { 
      console.log ('ERROR connecting to: ' + url + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ' + url);
    }
  });

let port = process.env.PORT || 5000;

/** set up routes {API Endpoints} */
// routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/api', router)

let full_dir = __dirname.split("/");
full_dir.pop();
let root = full_dir.join("/");
// Serve static files from the React frontend app
app.use(express.static(path.join(root, '/frontend/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(root + '/frontend/build/index.html'))
})

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
// server/routes/index.js
const item = require('./item');
const image_upload = require('./image-upload');
module.exports = (router) => {
    item(router),
    image_upload(router)
}
// server/routes/article.js
const itemscontroller = require('./../controllers/items.ctrl');
module.exports = (router) => {
    router
        .route('/items')
        .get(itemscontroller.getAll)
    router
        .route('/items')
        .post(itemscontroller.addItem)
    router
        .route('/items/:id')
        .get(itemscontroller.getAllStartWith)
}
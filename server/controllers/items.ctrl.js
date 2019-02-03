const Item = require('../models/item');

module.exports = {
    addItem: (req, res, next) => {
        let {title, description, link, image} = req.body;
        let short_description = description.substring(0, 10) + "...";
        let obj = {title, description, short_description, link};
        if (image) {
            // upload image to the item
        }
        saveItem(obj);
        function saveItem(obj) {
            new Item(obj).save((err, item) => {
                if (err) {
                    res.send(err);
                } else if (!item) {
                    res.send(404);
                } else {
                    return res.send(item);   
                }
                next();
            })
        }
    },
    getAll: (req, res, next) => {
        Item.find({}).sort('title').exec((err, items) => {
            if (err) {
                res.send(err);
            } else {
                res.send(items);
            }
            next();
        })
    },
    // Get items that start with the alphabet given
    // @required
    //      req.params.start_with 
    getAllStartWith: (req, res, next) => {
        let filter = /^[A-Za-z]/;
        if (!req.params.id.match(filter)) {
            res.send(new Error("id needs to be a single alphabet character"));
        } else {
            let regex = new RegExp("^" + req.params.id, "i");
            Item.find({title: regex}).sort('title').exec((err, items) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(items);
                }
                next();
            })
        }
    }
}
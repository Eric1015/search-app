const upload = require('../services/image-upload');

module.exports = (router) => {
    router
        .route('/image-upload')
        .post(upload.single("file"), (req, res, next) => {
            res.send({image_url: req.file.location});
            next();
        });
};
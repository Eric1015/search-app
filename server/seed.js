const seeder = require('mongoose-seed');

const url = "mongodb://localhost:27017/search-app";
// Connect to MongoDB via Mongoose
seeder.connect(url, { useNewUrlParser: true }, function () {

    // Load Mongoose models
    seeder.loadModels([
        'models/item.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Item'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });

    });
});

const data = [
    {
        'model': 'Item',
        'documents': [
            {
                'title': "Vancouver",
                'link': "https://en.wikipedia.org/wiki/Vancouver",
                'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Canada_British_Columbia_location_map_2.svg/375px-Canada_British_Columbia_location_map_2.svg.png",
                'description': "The largest city in the west coast of Canada. Population: 700,000."
            }
        ]
    }
]
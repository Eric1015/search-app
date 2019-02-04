const seeder = require('mongoose-seed');

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/search-app";
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
            },
            {
                'title': "Vietnam",
                'link': "https://en.wikipedia.org/wiki/Vietnam",
                'image': "http://flags.fmcdn.net/data/flags/w1160/vn.png",
                'description': "Vietnam is a country located in south-east Asia with around 94 million population."
            },
            {
                'title': "Argentina",
                'link': "https://en.wikipedia.org/wiki/Argentina",
                'image': "http://flags.fmcdn.net/data/flags/w1160/ar.png",
                'description': "Argentina is a country in South America. Spanish is the formal language."
            },
            {
                'title': "Brazil",
                'link': "https://en.wikipedia.org/wiki/Brazil",
                'image': "http://flags.fmcdn.net/data/flags/w1160/br.png",
                'description': "Brazil is the only country speaking Portuguese in South America. It has the fifth largest population."
            },
            {
                'title': "China",
                'link': "https://en.wikipedia.org/wiki/China",
                'image': "http://flags.fmcdn.net/data/flags/w1160/cn.png",
                'description': "China is a country located in Eastern Asia. It has the largest population in the world and produces the second highest GDP."
            },
            {
                'title': "Denmark",
                'link': "https://en.wikipedia.org/wiki/Denmark",
                'image': "http://flags.fmcdn.net/data/flags/w1160/dk.png",
                'description': "Denmark is a country located in northern Europe. Its capital city, Copenhagen, is often chosen as the most livable city in the world."
            },
            {
                'title': "Egypt",
                'link': "https://en.wikipedia.org/wiki/Egypt",
                'image': "http://flags.fmcdn.net/data/flags/w1160/eg.png",
                'description': "Egypt is a country located in northern Africa. It is famous for its mysterious buildings Pyramids."
            },
            {
                'title': "France",
                'link': "https://en.wikipedia.org/wiki/France",
                'image': "http://flags.fmcdn.net/data/flags/w1160/fr.png",
                'description': "France is a country located in western Europe. It produces the most amount of food in EU for exports."
            },
            {
                'title': "Germany",
                'link': "https://en.wikipedia.org/wiki/Germany",
                'image': "http://flags.fmcdn.net/data/flags/w1160/de.png",
                'description': "Germany is a country located in central and western Europe. It accepts people from other Europian countries for work and it produces one of the highest GDP in Europe."
            },
            {
                'title': "Hungary",
                'link': "https://en.wikipedia.org/wiki/Hungary",
                'image': "http://flags.fmcdn.net/data/flags/w1160/hu.png",
                'description': "Hungary is a country located in central Europe. It is the only country in Europe where they arrange last name first."
            },
            {
                'title': "Italy",
                'link': "https://en.wikipedia.org/wiki/Italy",
                'image': "http://flags.fmcdn.net/data/flags/w1160/it.png",
                'description': "Italy is a country in Europe and located in the middle of Mediterranean Sea. It is known for its high techniques on production of bags, clothes, and any other fashion related products."
            },
            {
                'title': "Japan",
                'link': "https://en.wikipedia.org/wiki/Japan",
                'image': "http://flags.fmcdn.net/data/flags/w1160/jp.png",
                'description': "Japan is a island country located in Eastern Asia. It is known for its unique cultures, high quality of technologies, and strict manner. Anime is one of the hottest topic coming from this country."
            },
            {
                'title': "Kenya",
                'link': "https://en.wikipedia.org/wiki/Kenya",
                'image': "http://flags.fmcdn.net/data/flags/w1160/ke.png",
                'description': "Kenya is a country located in eastern Africa. It is known for its variety of wild animals."
            },
            {
                'title': "Lebanon",
                'link': "https://en.wikipedia.org/wiki/Lebanon",
                'image': "http://flags.fmcdn.net/data/flags/w1160/lb.png",
                'description': "Lebanon is a country located in western Asia. Hummus is one of the unique dishes from this country."
            },
            {
                'title': "Mongolia",
                'link': "https://en.wikipedia.org/wiki/Mongolia",
                'image': "http://flags.fmcdn.net/data/flags/w1160/mn.png",
                'description': "Mongolia is a country located in central Asia. It is known for its traditional nomadic culture."
            },
            {
                'title': "Netherlands",
                'link': "https://en.wikipedia.org/wiki/Netherlands",
                'image': "http://flags.fmcdn.net/data/flags/w1160/nl.png",
                'description': "Netherlands is a country located in western Europe. The huge support for bicycling is done in this country and many people use bicycle for several purposes."
            },
            {
                'title': "Oman",
                'link': "https://en.wikipedia.org/wiki/Oman",
                'image': "http://flags.fmcdn.net/data/flags/w1160/om.png",
                'description': "Oman is a country located in western Asia. There are many remarkable mosque in this country."
            },
            {
                'title': "Portugal",
                'link': "https://en.wikipedia.org/wiki/Portugal",
                'image': "http://flags.fmcdn.net/data/flags/w1160/pt.png",
                'description': "Portugal is a country located in southwestern Europe. It used to have strong power back in 1600s and obtained multiple territories especially in South America"
            },
            {
                'title': "Qatar",
                'link': "https://en.wikipedia.org/wiki/Qatar",
                'image': "http://flags.fmcdn.net/data/flags/w1160/qa.png",
                'description': "Qatar is a country located in western Asia. Most of its profit comes from the export of oil."
            },
            {
                'title': "Russia",
                'link': "https://en.wikipedia.org/wiki/Russia",
                'image': "http://flags.fmcdn.net/data/flags/w1160/ru.png",
                'description': "Russia is a country located in northern Asia. It is the biggest country in the world. It spans all the way from East Asia to West Asia."
            },
            {
                'title': "South Korea",
                'link': "https://en.wikipedia.org/wiki/South_Korea",
                'image': "http://flags.fmcdn.net/data/flags/w1160/kr.png",
                'description': "South Korea is a country located in eastern Asia. Its pop music is known for K-pop and also one of the most popular pop music in the world these days."
            },
            {
                'title': "Thailand",
                'link': "https://en.wikipedia.org/wiki/Thailand",
                'image': "http://flags.fmcdn.net/data/flags/w1160/th.png",
                'description': "Thailand is a country located in southeastern Asia. Its curry rice was once ranked as the most delicious dish all over the world."
            },
            {
                'title': "Ukraine",
                'link': "https://en.wikipedia.org/wiki/Ukraine",
                'image': "http://flags.fmcdn.net/data/flags/w1160/ua.png",
                'description': "Ukraine is a country located in eastern Europe. It is known for the high rate of beautiful women in the nation."
            },
            {
                'title': "Western Sahara",
                'link': "https://en.wikipedia.org/wiki/Western_Sahara",
                'image': "http://flags.fmcdn.net/data/flags/w1160/eh.png",
                'description': "Western Sahara is a country located in western Africa. A large area of the territory is desert, so people live sporatically across the country."
            },
            {
                'title': "Yemen",
                'link': "https://en.wikipedia.org/wiki/Yemen",
                'image': "http://flags.fmcdn.net/data/flags/w1160/ye.png",
                'description': "Yeman is a country located in western Asia. Mocha, a city in Yemen used to be the center of world's coffee trade."
            },
            {
                'title': "Zambia",
                'link': "https://en.wikipedia.org/wiki/Zambia",
                'image': "http://flags.fmcdn.net/data/flags/w1160/zm.png",
                'description': "Zambia is a country located in south-central Africa. It is famous for its gemstones mining."
            }
        ]
    }
]
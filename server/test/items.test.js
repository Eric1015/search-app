//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Item = require('../models/item');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const common_url = '/api';
const config = require("../config");

let expect = chai.expect;
chai.use(chaiHttp);

const example_item = {
    title: "for_testing",
    link: "http://hello.com",
    image: "http://hello.com/test.png",
    description: "hello"
}

describe('Users', () => {
    before (() => {
        mongoose.createConnection(config.DB_URI, { useNewUrlParser: true });
    });

    beforeEach((done) => {
        Item.remove({}, (err) => {
            done();
        });
    });

    after (() => {
        mongoose.connection.close();
    })

    describe('/POST user', () => {
        it('should create a valid user', () => {
            chai.request(server)
            .post(common_url + '/items')
            .send(example_item)
            .end(function(err, res) {
                expect(res).to.have.status(201);
                expect(res.body).should.be.an('object');
            })
        });
    });
});
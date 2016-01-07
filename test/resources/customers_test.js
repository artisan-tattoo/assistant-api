const superagent = require('superagent');
const expect = require('expect.js');
const customers = require('../fixtures/customers');

const config = require('../config');
const DB = require('../db_utils');

describe('assistant-api', function(){
  var resource = "customers";
  var mock_resource = customers.mock_resource;
  var mock_update = customers.mock_update;
  var update_attr = customers.update_attr;

  var collection_url = config.host + config.port + config.namespace + resource;
  var id;
  var element_url;
  var response;

  describe('with created instance of ' + resource, function(){
    beforeEach(function(done){
      
      DB.reset().then(function() {
        superagent.post(collection_url)
          .set('Authorization', config.id_token)
          .set('Content-Type', "application/vnd.api+json")
          .send(mock_resource)
          .end(function(e, res){
            console.log("RESPONSE: " + res);
            expect(e).to.equal(null);
            id = res.body.data[0].id;
            element_url = collection_url + '/' + id;
            done();
          });    
      });
      done();  
    });

    it('retrieves a collection of ' + resource, function(done){
      superagent.get(collection_url)
        .set('Authorization', config.id_token)
        .set('Content-Type', "application/vnd.api+json")
        .end(function(e, res){
          console.log(res.error);
          expect(e).to.eql(null);
          done();
        });
    });

    it('retrieves an instance of ' + resource, function(done){
      superagent.get(element_url)
        .set('Authorization', config.id_token)
        .set('Content-Type', "application/vnd.api+json")
        .end(function(e,res){
          console.log(res.error);
          expect(e).to.eql(null);
          expect(typeof res.body).to.eql('object');
          expect(res.body.id).to.eql(id);
          done();
        });
    });

    describe('an update happens', function(){

      beforeEach(function(done){
        superagent.put(element_url)
          .set('Authorization', config.id_token)
          .send(mock_update)
          .end(function(e, res){
            expect(e).to.eql(null);
            expect(typeof res.body).to.eql('object');
            done();
          });
      });

      it('checks an instance of ' + resource, function(done){
        superagent.get(element_url)
          .set('Authorization', config.id_token)
          .end(function(e, res){
            expect(e).to.eql(null);
            expect(typeof res.body).to.eql('object');
            expect(res.body.id).to.eql(id);
            expect(res.body[update_attr]).to.eql(mock_update[update_attr]);
            done();
          });
      });

    });
    
    it('removes an instance of ' + resource, function(done){
      superagent.del(element_url)
        .set('Authorization', config.id_token)
        .end(function(e,res){
          expect(e).to.eql(null);
          expect(typeof res.body).to.eql('object');
          done();
        });
    });

  });
});

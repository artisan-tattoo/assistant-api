function BaseRoutes(controller, schema) {
  this.controller = controller;
  this.schema = schema;
}

BaseRoutes.prototype.CRUD = function() {
  var controller = this.controller;
  var schema = this.schema;
  
  return {
    post: {
      '/': controller.create({
        schema: schema
      }),
      '/:id/relationships/:relation': controller.createRelation()
    },
    get: {
      '/': controller.read(),
      '/:id': controller.read(),
      '/:id/:related': controller.readRelated(),
      '/:id/relationships/:relation': controller.readRelation()
  } ,
    patch: {
      '/:id': controller.update({
        schema: schema
      }),
      '/:id/relationships/:relation': controller.updateRelation()
    },
    delete: {
      '/:id': controller.destroy(),
      '/:id/relationships/:relation': controller.destroyRelation()
    }
  };
};

module.exports = BaseRoutes;

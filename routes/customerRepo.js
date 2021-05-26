module.exports = app => {
    const controller = app.controllers.customerRepo;
  
    app.route('/api_take/v1/customerRepo')
      .get(controller.listCustomerRepo)
      .post(controller.saveCustomerRepo);
  
  }
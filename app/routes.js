
module.exports = {
  bind : function (app) {

    app.use(function(req, res, next) {
      if (req.path.substr(-1) == '/' && req.path.length > 1) {
        var query = req.url.slice(req.path.length);
        res.redirect(301, req.path.slice(0, -1) + query);
      } else {
        next();
      }
    });

    app.get('/', function (req, res) {
      res.render('index');
    });

    // add your routes here
    app.get('/rcm', function (req, res) {
      res.render('rcm/index');
    });
    app.get('/rcm/dummy', function (req, res) {
      res.render('rcm/dummy');
    });
    app.get('/rcm/form', function (req, res) {
      res.render('rcm/form');
    });
    app.post('/rcm/complete', function (req, res) {
      res.render('rcm/complete');
    });

  }
};



const router = require('express').Router();
const verify = require('./verifytoke')
const User = require('./models')
const controler = require('./controller')

router.post('/register', function(req, res) {
    controler.sav(req, res);
  });

  router.post('/login', function(req, res) {
    controler.logi(req, res);
  });

  router.get('/login',verify, function(req, res) {
    controler.data(req, res);
  });



module.exports = router;
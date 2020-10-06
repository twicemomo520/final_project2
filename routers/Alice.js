var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    'Alice\'s home page'+'<br>'+
    '<a href="/user/Alice/about"> about </a>'+'<br>'
    );
});

// define the about route
router.get('/about', function(req, res) {
   
   let options = {
      root: __dirname,
      dotfiles: 'deny'
    }
  
    res.sendFile('Alice.html', options);
});

module.exports = router;

let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    'Jason\'s home page'+'<br>'+
    '<a href="/user/Jason/about"> about </a>'+'<br>'+
    '<a href="/user/Jason/classA.html"> classA </a>'
    );
});

// define the about route
router.get('/about', function(req, res) {

  let options = {
    root: __dirname,
    dotfiles: 'deny'
  }

  res.sendFile('Jason.html', options);
});

module.exports = router;

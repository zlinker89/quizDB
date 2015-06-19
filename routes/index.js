var express = require('express');
var router = express.Router();
var quizController = require("../controllers/quiz_controller");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// autoload
router.param("quizId", quizController.load);
/* quizes */
router.get("/quizes", quizController.index);
router.get("/quizes/:quizId(\\d+)", quizController.show);
router.get("/quizes/:quizId(\\d+)/answer", quizController.answer);

/* lib/creditos*/
router.get('/author', function (req, res) {
    res.render("lib/creditos");
});

module.exports = router;

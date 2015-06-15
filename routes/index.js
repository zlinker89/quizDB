var express = require('express');
var router = express.Router();
var quizController = require("../controllers/quiz_controller");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});


/* quizes */
router.get("/quizes/question", quizController.question);
router.get("/quizes/answer", quizController.answer);

/* lib/creditos*/
router.get('/author', function (req, res) {
    res.render("lib/creditos");
});

module.exports = router;

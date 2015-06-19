var express = require('express');

var models = require('../models/models.js');


// autoload
exports.load = function(req,res,next,quizId){
    models.Quiz.find(quizId).then(function(quiz){
        if(quiz){
            req.quiz = quiz;
            next();
        }else{
            next(new Error("No existe el quizId=" + quizId));
        }
    }).catch(function(error){next(error);});
}

// GET quizes/:id
exports.show = function (req, res) {
   res.render('quizes/show', { quiz: req.quiz });
}

// GEt quizes/:id/answer
exports.answer = function (req, res) {
        if (req.query.respuesta.toLowerCase() === req.quiz.respuesta) {
                res.render("quizes/answer", { respuesta: "correcto", quiz: req.quiz });
            } else {
                res.render("quizes/answer", { respuesta: "incorrecto", quiz: req.quiz  });
            }
    
}

// GET quizes
exports.index = function (req, res) {
    models.Quiz.findAll().then(function (quizes) {
        res.render('quizes/index.ejs', { quizes: quizes });
    }).catch(function(error){next(error);});
}
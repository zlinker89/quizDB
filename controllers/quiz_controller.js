var express = require('express');

var models = require('../models/models.js');




// GET quizes/:id
exports.show = function (req, res) {
    models.Quiz.find(req.params.quizId).then(function (quiz) {
        res.render('quizes/show', { quiz: quiz });
    });
}

// GEt quizes/:id/answer
exports.answer = function (req, res) {
    models.Quiz.find(req.params.quizId).then(function (quiz) {
        if (req.query.respuesta.toLowerCase() === quiz.respuesta) {
                res.render("quizes/answer", { respuesta: "correcto", quiz: quiz });
            } else {
                res.render("quizes/answer", { respuesta: "incorrecto", quiz: quiz  });
            }
    });
}

// GET quizes
exports.index = function (req, res) {
    models.Quiz.findAll().then(function (quizes) {
        res.render('quizes/index.ejs', { quizes: quizes });
    });
}
var express = require('express');

var models = require('../models/models.js');


exports.question = function (req, res) {
    models.Quiz.findAll().success(function (quiz) {
        res.render("quizes/question", { pregunta: quiz[0].pregunta });
    });
    
};

exports.answer = function (req, res) {
    models.Quiz.findAll().success(function (quiz) {
        if (req.query.respuesta.toLowerCase() === quiz[0].respuesta) {
                res.render("quizes/answer", { respuesta: "correcto" });
            } else {
                res.render("quizes/answer", { respuesta: "incorrecto" });
            }
    });
    
};
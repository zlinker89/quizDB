var express = require('express');

exports.question = function (req, res) {
    res.render("quizes/question", { pregunta: "capital italia" });
};

exports.answer = function (req, res) {
    if (req.query.respuesta.toLowerCase() === "roma") {
        res.render("quizes/answer", {respuesta: "correcto"});
    } else {
        res.render("quizes/answer", {respuesta: "incorrecto"});
    }
};
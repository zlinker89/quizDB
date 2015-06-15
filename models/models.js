var path = require('path');

// se carga el ORM
var Sequelize = require('sequelize');

// se utiliza la base de datos
var sequelize = new Sequelize(null, null, null,
    { dialect: "sqlite", storage: "quiz.sqlite" }
);

// importamos la definicion de la tabla QUiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

// exportamos la definicion de la tabla
exports.Quiz = Quiz;

// se crea e inicializa la tabla de preguntas
sequelize.sync().success(function () {
    // success ejecuta el manejador una vez creada la tabla
    Quiz.count().success(function (count) {
        if (count === 0) { // se inicializa solo si esta vacia
            Quiz.create({
                pregunta: "¿Cual es la capital de Italia?",
                respuesta: "roma"
            });
        }
    });
});
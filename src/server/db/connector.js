"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var dbConnector = function (db) {
    var connect = function () {
        mongoose
            .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function () {
            return console.info("Successfully connected to " + db);
        })["catch"](function (error) {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        });
    };
    connect();
    return mongoose.connection.on('disconnected', connect);
};
exports["default"] = dbConnector;

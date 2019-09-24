"use strict";
const axios = require('axios');
module.exports = function (app, db) {
    app.get('/googleplace/:place', (req, res) => {
        axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + req.params.place + '&region=cl,formatted_address&key=AIzaSyBfl5JsPWncvaMJd0icji5e0huUNWh2aEo')
            .then(function (response) {
            if (response.data.status == "OK") {
                res.send(response.data);
            }
            else {
                res.status(400).send("Error al traer el lugar");
                console.log(response);
            }
        })
            .catch(function (error) {
            res.status(500).send("There was an error!" + error);
        });
    });
};

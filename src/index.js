const starWarsNames = require('./starwars-names.json');
const uniqueRandomArray = require('unique-random-array');
const javi = 'fun';

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};

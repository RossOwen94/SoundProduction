const mongoose = require('mongoose');


var sampleSchema = mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    soundCloud: {type: String},
    difficulty: {type: Number},
    instrumentation: [{type: String}],
    longDesc: String,
    description: {type: String},
    price: {type: Number}
});


var Sample = mongoose.model('sample',sampleSchema);

module.exports = Sample;
let mongoose = require('mongoose') //connect mongoose
const CovidSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    county: String, //variables
    state: String,
    cases: Number,
    deaths: Number,
   
})

module.exports = mongoose.model('CovidModel', CovidSchema, 'CovidInfo') //mongodb collection
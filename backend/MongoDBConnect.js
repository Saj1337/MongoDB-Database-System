mongoose = require('mongoose')
const MONG_URI = 'mongodb://localhost:27017/covidDatabase'
//const MONG_URI= 'mongodb+srv://nhq:hhqazi2906@cd5006.438bk.mongodb.net / labIek7 ? retryWrites = true &w=majority'
mongoose.connect(MONG_URI, {
    useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
const db = mongoose.connection;
db.on('error', function (err) {0
    console.log('Error occured' + err)
})
db.once('connected', function () {
    console.log('connection is successful to' + MONG_URI)
})
module.exports = db
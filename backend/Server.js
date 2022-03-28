var express = require("express")
let Covid = require('./Covid_Schema')
let mongodbConnected = require('./MongoDBConnect')
const cors = require('cors');
var app = express()
var bodyparser = require("body-parser")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors());
console.log("COVID", Covid)
app.get('/', function (req, res) {
})
app.get('/about', function (req, res) {
    res.send("mongodb express React and mongoose app, React runs in another application"); Books.countDocuments().exec()
            .then(count => {
                console.log("Total documents Count before addition : ", count)

            }).catch(err => {

                console.error(err)
            })

})
app.get('/alldata', function (req, res) {
    Covid.find(function (err, allfile) {
        if (err) {
            console.log(err);
        } else {

            res.json(allfile);
        }
    });
});
app.get('/getdata/:id', function (req, res) {
    let id = req.params.id;
    Covid.findById(id, function (err, cdata) {
        res.json(cdata);
    });
});
app.post('/adddata', function (req, res) {
    console.log("Ref", req.body)
    let newdata = new Covid(req.body);
    console.log("newdata->", newdata)
    newdata.save()
        .then(todo => {
            res.status(200).json({
                'covid': 'data added successfully'
            });

        })
        .catch(err => {
            res.status(400).send('adding new data failed');
 });
})
app.post('/updatedata/:id', function (req, res) {
    let id = req.params.id;
    let updateddata = new Covid(req.body);
    console.log("update id", id, "newdata-    > ",updateddata)

    Covid.findByIdAndUpdate(id,
            {
                date: updateddata.date,
                county: updateddata.county,
                state: updateddata.state,
                cases: updateddata.cases,
                deaths: updateddata.deaths
            }
            ,
            function (err, docs) {
                if (err) {
                    console.log(err)
                }
                else {
                    res.status(200).json({
                        'covid': 'data updatedsuccessfully'});
}
     }

        )

});
app.post('/deletedata/:id', function (req, res) {
    let id = req.params.id;

    console.log("deleting")
    Covid.findByIdAndDelete(id, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            res.status(200).send('Data Deleted');
 }
    }


    )

});
app.listen(3000, function () { //3000 port
    console.log("Server is running on the port 3000")
})

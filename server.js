const   express = require('express'),
        mongoose = require('mongoose'),
        app = express(),
        port = 3001
        model = require('./model/model')
        route = require('./router/router')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/tesDB', { useNewUrlParser: true, useCreateIndex: true })
// mongoose.connect('mongodb://localhost/tesDB', { useNewUrlParser: true, useCreateIndex: true })

var dbb = mongoose.connection;
dbb.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(__dirname + '/'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


route(app)


app.listen(port, function() {
    console.log("Berhasil cuy! koneksi ke port " + port)
})
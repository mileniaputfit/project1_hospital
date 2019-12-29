const   express = require("express"),
        app = express(),
        port = 3300
        mongoose = require('mongoose'),
        //WebSocket=require('ws'),
        //ws=new WebSocket('ws://localhost:8080/echo')
        model = require('./model/model')
        route = require('./router/router')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/tesDB', { useNewUrlParser: true, useCreateIndex: true })
// mongoose.connect('mongodb://localhost/tesDB', { useNewUrlParser: true, useCreateIndex: true })


//Websocket
//ws.on('open',function open(){
//    setInterval(function(){
//        ws.send("halo")
//    },1)
//})
//ws.on('message',function incoming(data){
//    console.log(data)
//})

var dbb = mongoose.connection;
dbb.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(__dirname + '/'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

route(app);


app.listen(port, function() {
    console.log("Berhasil cuy! koneksi ke port " + port)
})
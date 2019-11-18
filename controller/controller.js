const   mongoose = require('mongoose'),
        User = mongoose.model("menu")

exports.daftarMenu = function(req,res) {
    User.find({}, function(err, menu) {
        if(err) res.send(err)
        res.json(menu)
    })
}

exports.tambahMenu = function(req,res) {
    var menuBaru = new User(req.body)
    menuBaru.save(function(err, menu) {
        if(err) res.send(err)
        res.json(menu)
    })
}
const mongoose = require('mongoose'),
    //Menu = db.model("menu")
    Joi = require('@hapi/joi'),
    sha256 = require('crypto-js/sha256'),
    Menu = mongoose.model("menu"),
    Data = mongoose.model("data")

const validator = (data) => {
    let schema = Joi.object().keys({
        sensorName: Joi.string(),
        value: Joi.number(),
        name: Joi.string().regex(/^[A-Z][a-z]+(\s[A-Z][a-z]+)*/).min(2),
        email: Joi.string().email(),
        uname : Joi.string().regex(/^[a-zA-Z][a-zA-z0-9-_/]{7,10}$/),
        password: Joi.string().regex(/(?=^.{8,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),
        address: Joi.string().alphanum().min(6),
        phone: Joi.string().regex(/^(\+628|08)[0-9]{8,13}/)
    }).with("sensorName", "value")
        .with("uname", "password")
        .with("name", ["email", "uname", "password", "address", "phone"])

    return schema.validate(data)
}

const localTime = () => {
    let time = new Date()
    return time.toString()
}

exports.loginus = function (req, res) {
    res.sendFile(path.join(__dirname, "../") + "index.html")
}

exports.userr = function (req, res) {
    Menu.find({ email: req.body.email, password: `${sha256(req.body.password)}` }, function (err, menu) {
        if (err) res.send(err)
        else if (menu == null) { res.send("Email or password does not match"); return; }
        res.json(menu)
    })
}

exports.daftarMenu = function (req, res) {
    Menu.find({}, function (err, menu) {
        if (err) res.send(err)
        res.json(menu)
    })
}

exports.tambahMenu = function (req, res) {
    req.body.password = sha256(req.body.password)
    var tambahMenu = new URLSearchParams(req.body)
    tambahMenu = save(function (err, menu) {
        if (err) res.send(err)
        res.json(menu)
    })
    //console.log(req.body)
    //console.log("data")
    //res.send(req.body)
}

exports.pilihMenu = function (req, res) {
    Menu.findById(req.params.sensorId, function (err, menu) {
        if (err) res.send(err)
        res.json(menu)
    })
}

exports.ubahMenu = function (req, res) {
    Menu.findOneAndUpdate({ _id: req.params.sensorId }, req.body,
        { new: true }, function (err, menu) {
            if (err) res.send(err)
            res.json(menu)
        })
}

exports.hapusMenu = function (req, res) {
    Menu.deleteMany({ _id: req.params.sensorId }, function (err, menu) {
        if (err) res.send(err)
        res.json(menu)
    })
}

exports.hapusSemua = function (req, res) {
    Menu.remove({}, function (err, menu) {
        if (err) res.send(err)
        res.json(menu)
    })
}

exports.daftar = function (req, res) {
    Data.find({}, function (err, data) {
        if (err) res.send(err)
        res.json(data)
    }).sort({ time: -1 })

}

exports.tambah = function (req, res) {

    //let { error } = validator(req.query)
//
    //if (error) {
    //    res.send(error.details[0].message)
    //    return;
    //}

    req.query.time = localTime()

    var menuBaru = new Data(req.query)
    menuBaru.save(function (err, data) {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.pilih = function (req, res) {
    Data.find({ sensorName: req.params.sensor }, function (err, data) {
        if (err) res.send(err)
        res.json(data)
    }).sort({ time: -1 })
}

exports.hapusAll = function (req, res) {
    Data.deleteMany({}, function (err, data) {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.hapus = function (req, res) {
    sensor.deleteOne({ _id: req.params.data }, function (err, data) {
        if (err) res.send(err)
        res.json(data)
    })
}
exports.ubah = function (req, res) {
    Data.findOneAndUpdate({ _id: req.params.dataId }, req.body,
        { new: true }, function (err, data) {
            if (err) res.send(err)
            res.json(data)
        })
}
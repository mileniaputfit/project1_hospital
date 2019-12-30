module.exports = function (app) {
    const user = require('../controller/controller2'),
        path = require('path')

    app.route("/")
        .get(function (req, res) {
            res.sendFile("index.html")
        })

    app.route("/loginn")
        .get(function (req, res) {
            res.sendFile(path.join(__dirname, "../") + "pages/login.html")
        })

    app.route("/register")
        .get(function (req, res) {
            res.sendFile(path.join(__dirname, "../") + "pages/register.html")
        })

    app.route("/pasien")
        .get(function (req, res) {
            res.sendFile(path.join(__dirname, "../") + "pages/pasien.html")
        })

    app.route("/numb")
        .get(function (req, res) {
            res.sendFile(path.join(__dirname, "../") + "pages/number.html")
        })
        
    app
        .route("/user")
        .get(user.userr)
        .post(user.daftarMenu)
    //.delete(user.hapusSemua)

    app
        .route("/data")
        .get(user.daftar)
        .post(user.tambah)
        .delete(user.hapusAll)

    app
        .route("/user/:MenuId")
        .get(user.daftarMenu)
        .put(user.tambahMenu)
        .delete(user.hapusSemua)

    app
        .route("/data/:Id")
        .get(user.pilih)
        .put(user.ubah)
        .delete(user.hapus)
}
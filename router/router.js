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

    app
        .route("/user")
        .get(user.daftarMenu)
        .post(user.tambahMenu)
        .delete(user.hapusSemua)

    app
        .route("/reg")
        .get(user.daftarMenu)
        .post(user.tambahMenu)
        .delete(user.hapusSemua)
    app
        .route("/user/:menuId")
        .get(user.pilihMenu)
        .put(user.ubahMenu)
        .delete(user.hapusMenu)
}
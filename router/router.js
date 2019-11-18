module.exports = function (app) {
    const user = require('../controller/controller2')

    app.route("/")
        .get(function(req,res){
            res.sendFile("index.html")
        })

    app
        .route("/user")
        .get(user.daftarMenu)
        .post(user.tambahMenu)
        .delete(user.hapusSemua)

    app
        .route("/user/:menuId")
        .get(user.pilihMenu)
        .put(user.ubahMenu)
        .delete(user.hapusMenu)
}
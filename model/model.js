const   mongoose = require('mongoose'),
        Schema = mongoose.Schema

const user = new Schema({

    email : {
        type : String,
        required : "Email",
        unique: true
    },
    pass : {
        type : String,
        required : "Password",
        unique: true
    },
}, { collection: 'Data User'}
)

// module.exports = mongoose.model("menu", menu)
db = mongoose.createConnection('mongodb://localhost/tesDB', {useNewUrlParser: true, useCreateIndex: true})
module.exports = db.model("menu", user)
module.exports = mongoose.model("menu", user)

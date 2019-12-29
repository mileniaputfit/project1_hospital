const mongoose = require('mongoose'),
    Schema = mongoose.Schema

const localTime = () => {
    let time = new Date()
    return time.toString()
}

const data = new Schema({
    sensor: {
        type: String,
        required: "Sensor"

    },
    value: {
        type: Number,
        required: "Value"
    },
    status: {
        type: String,
        enum: ["Critical", "Warning", "Stable"],
        default: "Stable"
    },
    time: {
        type: String,
        immutable: true,
        required: true,
        default: localTime()
    }
}, { collection: 'sensor' }
)

const user = new Schema({
    email: {
        type: String,
        required: "Email",
        unique: true
    },
    password: {
        type: String,
        required: "Password",
        unique: true
    },
}, { collection: 'user' }
)

// module.exports = mongoose.model("menu", menu)
//db = mongoose.createConnection('mongodb://localhost/tesDB', {useNewUrlParser: true, useCreateIndex: true})
//module.exports = db.model("menu", user)
module.exports = mongoose.model("data", data)
module.exports = mongoose.model("menu", user)

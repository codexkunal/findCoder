const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.mongo_URL).then(
    () => {
        console.log("Connected")
    }
).catch((err) => {
    console.log("not connected" + err)
})
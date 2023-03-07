const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://GoFood:paresh2411@cluster0.bzdqtiy.mongodb.net/gofoodmern?retryWrites=true&w=majority"
const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true }


const mongoDB = function () {
    mongoose.connect(mongoURL, connectionParams)
        .then(() => {
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray((err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            })
            console.log('Connected')
        })
        .catch((e) => {
            console.log('Error', e);
        })
}

module.exports = mongoDB;
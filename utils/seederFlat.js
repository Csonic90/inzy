const Flat = require('../models/flat');
const mongoose = require('mongoose');

const flats = require('../data/flat')

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const seedFlat = async () => {
    try {

        await Flat.deleteMany();
        console.log('Flats are deleted');

        await Flat.insertMany(flats);
        console.log('All Flats are added.');

        process.exit()


    } catch (error) {
        console.log(error.message);
        process.exit()
    }
}

seedFlat()
const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema({
    buldingNumber: {
        type: String,
        require: [true, 'Podaj numer bloku ']
    },
    flatNumber: {
        type: Number,
        require: [true, 'podaj  numer mieszkania']
    },
    flatArea: {
        type: Number,
        require: [true, 'Podaj powierzchnie']
    },
    participation: {
        type: Number,
        require: [true, 'Podaj udział']
    },
    ownerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    meter: {
        type: mongoose.Schema.ObjectId,
        ref: 'Meter',
        required: false

    }
}, { timestamps: true })


module.exports = mongoose.models.Flat || mongoose.model('Flat', flatSchema);
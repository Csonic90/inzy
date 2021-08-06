const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Proszę podać tytuł'],
        trim: true,
        maxLength: [100, 'tytuł max 100 znaków']
    },
    context: {
        type: String,
        required: [true, 'Proszę podać artykuł'],
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Prosże podać imie i nazwisko'],
        maxLength: [100, 'za długa nazwa użytkownika']
    },
    email: {
        type: String,
        required: [true, 'Proszę podać email'],
        unique: true,
        validate: [validator.isEmail, 'Porszę podać poprawny email']
    },
    password: {
        type: String,
        required: [true, 'Proszę, podać hasło'],
        minLength: [6, 'Hasło musi mieć minimum 6 znaków'],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: false,

        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

// Encrypting password before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Generate password reset token
userSchema.methods.getResetPasswordToken = function () {

    // Generate token
    const resetToken = crypto.randomBytes(20).toString('hex')

    // Hash and set to resetPasswordToken field
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

    return resetToken;

}

export default mongoose.models.User || mongoose.model('User', userSchema)
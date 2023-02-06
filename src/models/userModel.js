const { Schema } = require('mongoose')
const { compareSync } = require('bcrypt')

export const UserSchema = new Schema({
    userName: {
        type: String,
        required: "Enter a first name"
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
})

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return compareSync(password, hashPassword)
}

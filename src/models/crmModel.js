const { Schema } = require('mongoose')

/**
 * Note - Just like Mongoose is for MongoDB, sequelize is use for SQL query
 */
export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: "Enter a first name"
    },
    lastName: {
        type: String,
        required: "Enter a last name"
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
})


import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    } ,
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    role:{
        type: String,
        default: 'client',
    },
})

// Model

const User = mongoose.model('User', userSchema)

// Exports

export default User





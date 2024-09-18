import mongoose from "mongoose";

const question = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: 'In processing',
    },
    answer:{
        type: String,
        default: 'Null',
    },
})

const Question = mongoose.model('Question', question)

export default Question
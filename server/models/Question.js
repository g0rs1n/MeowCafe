import mongoose from "mongoose";

const question = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
})

const Question = mongoose.model('Question', question)

export default Question
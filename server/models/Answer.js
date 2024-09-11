import mongoose from "mongoose";

const answer = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
})

const Answer = mongoose.model('Answer', answer)

export default Answer
import mongoose from 'mongoose'

const information = new mongoose.Schema({
    resTimes: {
        type: String,
        default: "Not specified",
        required: true,
    },
    daysWork: {
        type: String,
        default: "Not specified",
        required: true,
    },
    status: {
        type: String,
        default: "Closed",
    },
    phone: {
        type: String,
        default: "Not specified",
        required: true
    },
    address:{
        type: String,
        default: "Not specified",
        required: true,
    }
})

const Information = mongoose.model("Information", information)

export default Information
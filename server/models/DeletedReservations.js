import mongoose from "mongoose";

const deletedResSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,      
    },
    date:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    hours:{
        type: String,
        required: true,
    },
    seats:{
        type: String,
        required: true,
    },
})

const DeletedReservations = mongoose.model('DeletedReservations', deletedResSchema)

export default DeletedReservations
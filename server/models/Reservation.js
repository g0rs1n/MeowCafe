import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone:{
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

const Reservation = mongoose.model('Reservation', reservationSchema)

export default Reservation
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/Auth.js'
import getMeRoute from './routes/GetMe.js'
import checkAuthRoute from './routes/CheckAuth.js'
import reservationRoute from './routes/Reservation.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// Express

const app = express();
app.use(express.json())
app.use(cors())
app.use(cookieParser())


// consts env

dotenv.config();

const PORT = process.env.PORT;
const DB_User = process.env.DB_User;
const DB_Password = process.env.DB_Password;
const DB_Name = process.env.DB_Name;

// Any


// Routes

app.use('/api/auth', authRoute)
app.use('/api/reser', reservationRoute)
app.use('/api/user', checkAuthRoute)
app.use('/api/getme', getMeRoute)

// Methods


// Functions

async function TestPort () {

    try {

        await mongoose.connect(
            `mongodb+srv://${DB_User}:${DB_Password}@meowcafe.bnm8bzw.mongodb.net/?retryWrites=true&w=majority&appName=MeowCafe`
        )
        app.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`)
        })

    } catch (error) {
        console.error('Error DB', error)
    }

}

TestPort()


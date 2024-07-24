import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/Auth.js'
import User from './models/User.js'
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

// Methods


// Functions

async function TestPort () {

    try {

        await mongoose.connect(
            `mongodb+srv://${DB_User}:${DB_Password}@testbackend.3a2etrq.mongodb.net/${DB_Name}`
        )

        app.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`)
        })

    } catch (error) {
        console.error('Error DB', error)
    }

}

TestPort()


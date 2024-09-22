import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/Auth.js'
import getMeRoute from './routes/GetMe.js'
import checkAuthRoute from './routes/CheckAuth.js'
import reservationRoute from './routes/Reservation.js'
import getReservationsRoute from './routes/GetReservations.js'
import updateReservationRoute from './routes/UpdateReservation.js'
import deleteReservationRoute from './routes/DeleteReservation.js'
import getDeletedReservationsRoute from './routes/GetDeletedReservations.js'
import restoreDelResRoute from './routes/RestoreDelRes.js'
import updateUserRoute from './routes/UpdateUser.js'
import questionRoute from './routes/Question.js'
import checkIsAdminRoute from './routes/CheckIsAdmin.js'
import getReservationsAdmRoute from './routes/GerReservationsAdm.js'
import acceptReservationAdmRoute from './routes/AcceptReservationsAdm.js'
import getQuestionsAdmRoute from './routes/GetQuestionsAdm.js'
import answerQuestionAdmRoute from './routes/AnswerQuestionAdm.js'
import getUserAdmVerRoute from './routes/GetUserAdmVer.js'
import getQuestionsUserRoute from './routes/GetQuestionsUser.js'
import cancleReservationsAdmRoute from './routes/CancleReservationsAdm.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// Express

const app = express();
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
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
app.use('/api/getreservations', getReservationsRoute)
app.use('/api/updatereservation', updateReservationRoute)
app.use('/api/deleteReservation', deleteReservationRoute)
app.use('/api/getDeletedReservation', getDeletedReservationsRoute)
app.use('/api/restoreDelRes', restoreDelResRoute)
app.use('/api/updateuser', updateUserRoute)
app.use('/api/question', questionRoute)
app.use('/api/checkadmin',checkIsAdminRoute)
app.use('/api/getresadm', getReservationsAdmRoute)
app.use('/api/acceptreservation',acceptReservationAdmRoute)
app.use('/api/getquestionsadm', getQuestionsAdmRoute)
app.use('/api/answerquestion', answerQuestionAdmRoute)
app.use('/api/getuseradm', getUserAdmVerRoute)
app.use('/api/getquestionsuser', getQuestionsUserRoute)
app.use('/api/canclereservation', cancleReservationsAdmRoute)

// Methods


// Functions

async function TestPort () {

    try {

        await mongoose.connect(
            `mongodb+srv://${DB_User}:${DB_Password}@meowcafe.hdcdo.mongodb.net/${DB_Name}`
        )
        app.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`)
        })

    } catch (error) {
        console.error('Error DB', error)
    }

}

TestPort()


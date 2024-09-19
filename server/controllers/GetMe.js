import User from '../models/User.js'
import jwt from 'jsonwebtoken'

// Get Me

export const getMe = async (req, res) => {
    try {

        const token = req.cookies.token
        const decodedToken = jwt.decode(token)
        const userId = decodedToken.id

        const user = await User.findById(userId)

        if(!user) {
            res.json({
                message: "Пользователь не найден!"
            })
        }

        res.cookie('token', token, {
            httpOnly: true,
        })

        res.json(user)

    } catch (error) {
        console.error('Error: getMe', error)
    }
}

// Get User AdmVer

export const getUserAdmVer = async (req, res) => {
    try {
        
        const userId = req.query.userId

        const user = await User.findById(userId)

        if (!user) {
            return res.status(500).json({
                message: "Не удалось найти пользователя!"
            })
        }

        res.json(user)

    } catch (error) {
        console.error("Error: get user admver back", error)
    }
}
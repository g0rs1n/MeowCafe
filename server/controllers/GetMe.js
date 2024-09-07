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
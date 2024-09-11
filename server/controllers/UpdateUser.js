import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const updateUser = async (req,res) => {
    try {
        
        const changeUser = req.body.changeUser
        const token = req.cookies.token
        const decodedToken = jwt.decode(token)
        const userId = decodedToken.id

        const updatedUser = await User.findByIdAndUpdate(userId, changeUser, {
            new: true,
            runValidators: true
        })

        if (!updatedUser) {
            return res.status(500).json({
                message: "Не удалось обновить пользователя!"
            })
        }

        res.json(updatedUser)

    } catch (error) {
        console.error('Error: updateUser back', error)
    }
} 
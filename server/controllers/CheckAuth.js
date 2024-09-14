import User from '../models/User.js'
import jwt from 'jsonwebtoken'

// CheckAuth

export const CheckAuth = async (req, res) => {
    try {

        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                message: 'Не удалось получить токен!'
            })
        }

        const isToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!isToken) {
            res.json({
                message: "Нет доступа!"
            })
        }

        const decodedToken = jwt.decode(token)
        const userId = decodedToken.id
        const user = await User.findById(userId)

        res.status(200).json({
            message: 'Пользователь вошел в систему!',
            role: user.role
        })

    } catch (error) {
        console.error('Error: checkAuth', error)
    }
}
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const checkIsAdmin = async (req, res) => {
    try {
        
        const token = req.cookies.token
        const isToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!isToken) {
            return res.status(401).json({
                message: 'Неверный токен!'
            })
        }

        const decodedToken = jwt.decode(token)
        const userId = decodedToken.id
        
        const admin = await User.findById(userId)

        if (admin.role === 'admin'){
            return res.status(200).json({
                message: 'Вы вошли как админ!'
            })
        } else {
            return res.status(400).json({
                message: 'У вас нет доступа!'
            })
        }

    } catch (error) {
        console.error('Error: checkIsAdmin back', error)
    }
}
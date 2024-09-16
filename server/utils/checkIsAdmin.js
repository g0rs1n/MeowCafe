import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const checkIsAdmin = async (req,res,next) => {
    try {
        
        const token = req.cookies.token
        const isToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!isToken) {
            return res.status(401).json({
                message: "Нет доступа!"
            })
        }

        const decodedToken = jwt.decode(token)
        const adminId = decodedToken.id

        const admin = await User.findById(adminId)

        if (!admin) {
            return res.status(500).json({
                message: "Не удалось найти пользователя!"
            })
        }

        if (admin.role === 'admin'){
            next()
        } else {
            return res.status(403).json({
                message: "Нет доступа!"
            })
        }

    } catch (error) {
        console.error('Error: checkIsAdmin utils back', error)
    }
}
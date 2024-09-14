import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
    try {

        const token = req.cookies.token

        if (!token){
            res.status(401).json({
                message: 'Вы не вошли в систему!'
            })
        }

        const isToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!isToken) {
            res.status(400).json({
                message: "Нет доступа!"
            })
        }

        next()


    } catch (error) {
        console.error('Error: checkAuth', error)
    }
}
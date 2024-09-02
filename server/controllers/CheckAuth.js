import jwt from 'jsonwebtoken'

// CheckAuth

export const CheckAuth = (req, res) => {
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

        res.status(200).json({
            message: 'Пользователь вошел в систему!'
        })

    } catch (error) {
        console.error('Error: checkAuth', error)
    }
}
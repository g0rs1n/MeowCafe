import jwt from 'jsonwebtoken'

// CheckAuth

export const CheckAuth = (req, res) => {
    try {

        const token = req.cookies.token

        const isToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!isToken) {
            res.json({
                message: "Нет доступа!"
            })
        }

        res.json({
            message: 'Пользователь вошел в систему!'
        })

    } catch (error) {
        console.error('Error: checkAuth', error)
    }
}
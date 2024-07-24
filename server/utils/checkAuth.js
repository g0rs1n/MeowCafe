import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
    try {

        const token = req.cookies.token

        const isToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!isToken) {
            res.json({
                message: "Нет доступа!"
            })
        }

        next()


    } catch (error) {
        console.error('Error: checkAuth', error)
    }
}
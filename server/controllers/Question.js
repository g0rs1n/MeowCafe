import Question from '../models/Question.js'
import jwt from 'jsonwebtoken'

export const question = async (req,res) => {
    try {
        
        const message = req.body.question
        const token = req.cookies.token
        const decodedToken = jwt.decode(token)
        const userId = decodedToken.id

        const newQuestion = new Question({
            userId: userId,
            message: message
        })

        await newQuestion.save()

        res.status(200).json({
            message: "Вопрос успешно сохранен!"
        })

    } catch (error) {
        console.error('Error: apiPost question back', error)
        res.status(500).json({
            message: 'Не удалось сохранить вопрос!'
        })
    }
}
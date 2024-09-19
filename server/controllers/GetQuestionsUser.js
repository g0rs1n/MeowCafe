import Question from '../models/Question.js'
import jwt from 'jsonwebtoken'

export const getQuestionsUser = async (req,res) => {
    try {

        const token = req.cookies.token
        const decodedToken = jwt.decode(token)
        const userId = decodedToken.id

        const questions = await Question.find({userId: userId})

        if (!questions){
            return res.status(500).json({
                message: "Не удалось получить вопросы!"
            })
        }

        res.json(questions)

    } catch (error) {
        console.error('Error: getQuestionsAdm back', error)
    }
}
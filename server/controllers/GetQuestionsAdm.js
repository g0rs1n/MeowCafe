import Question from '../models/Question.js'
import User from '../models/User.js'

export const getQuestionsAdm = async (req,res) => {
    try {

        const questions = await Question.find()

        if (!questions){
            return res.status(500).json({
                message: "Не удалось получить вопросы!"
            })
        }

        const user = User.findById(questions.userId)

        if (!user) {
            return res.status(500).json({
                message: "Не удалось получить пользователя!"
            })
        }

        res.json({
            questions: questions,
            user: user
        })

    } catch (error) {
        console.error('Error: getQuestionsAdm back', error)
    }
}

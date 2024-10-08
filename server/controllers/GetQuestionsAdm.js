import Question from '../models/Question.js'

export const getQuestionsAdm = async (req,res) => {
    try {

        const questions = await Question.find()

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

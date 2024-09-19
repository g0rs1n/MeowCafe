import Question from '../models/Question.js'

export const answerQuestionAdm = async (req, res) => {
    try {

        const answer = req.body.answer
        const questionId = req.body.questionId

        const updateQuestion = await Question.findByIdAndUpdate(questionId, {
            answer: answer
        },{
            new: true,
            runValidators: true
        })

        if (!updateQuestion) {
            return res.status(500).json({
                message: "Не удалось записать ответ!"
            })
        }

        res.json(updateQuestion)
        
    } catch (error) {
        console.error("Error: answer question adm back", error)
    }
}
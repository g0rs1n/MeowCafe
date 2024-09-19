import axios from "axios"
import { useState, useEffect } from "react"
import './QuestionsAdm.scss'

export default function QuestionsAdm () {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const funcGetQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getquestionsadm/questionsadm',{
                    withCredentials: true
                })
                setQuestions(response.data)
            } catch (error) {
                console.error('Error: getQuestions Admin front', error)
            }
        }
        funcGetQuestions()
    }, [questions])

    return (
        <>
            <div className="wrapper-questionsadm-main">
                <div className="questionsadm">
                    {
                        questions.map(question => {
                            return (
                                <QuestionItem
                                    question = {question}
                                    setQuestions = {setQuestions}
                                    key={question._id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

function QuestionItem ({question,setQuestions, key}) {

    const [user, setUser] = useState({})
    const [answer, setAnswer] = useState('')

    const handleChangeAnswer = (e) => {
        setAnswer(e.target.value)
    }

    useEffect(() => {
        const funcGetUserQuestion = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getuseradm/user',{
                    params:{
                        userId: question.userId
                    },
                    withCredentials: true
                })
                setUser(response.data)
            } catch (error) {
                console.error("Error: get userQuestion front", error)
            }
        }
        funcGetUserQuestion()
    },[])

    const funcAnswerButton = async () => {
        try {
            const response = await axios.patch('http://localhost:5001/api/answerquestion/answer',{
                answer: answer,
                questionId: question._id
            },{
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            setQuestions(prevQuestion => {
                return prevQuestion.map(que => que._id === question.id ? response.data : que)
            })
        } catch (error) {
            console.error("Error: patch answerQuestion front", error)
        }
    }
    

    return (
        <>
            <div key={key} className="wrapper-questions-item">
                <div className="questions-item">
                    <div className="questions-item-title">
                        <h3 className="questions-item-title__h3">
                            Question from <span className="questions-item-title__span">{user.name}</span> 
                        </h3>
                        <h3 className="questions-item-title__h3 questions-h3_email">
                            Email {user.name}: {user.email}
                        </h3>
                    </div>
                    <div className="wrapper-questions-answer">
                        <div className="question-block">
                            <span className="question-block__span">Question:</span>
                            <p className="question-block__p">
                                {question.message}
                            </p>
                        </div>
                        <div className="answer-block">
                            {
                                question.answer === 'Null' ? 
                                <>
                                    <label htmlFor="answer">Answer:</label>
                                    <textarea onChange={handleChangeAnswer} className="answer-block__textarea" name="answer" id="answer"></textarea>
                                </>
                                 :
                                 <>
                                    <span className="answer-block__span">Answer:</span>
                                    <p className="answer-block__p">
                                        {question.answer}
                                    </p>
                                 </>
                            }
                        </div> 
                    </div>
                    {
                        question.answer === 'Null' ? 
                        <div className="questions-buttons">
                            <button onClick={funcAnswerButton} className="questions-buttons__button">
                                Answer
                            </button>
                        </div> :
                        ''
                    }
                </div>
            </div>
        </>
    )
}
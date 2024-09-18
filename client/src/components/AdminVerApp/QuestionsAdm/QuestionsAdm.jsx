import axios from "axios"
import { useState, useEffect } from "react"
import './QuestionsAdm.scss'

export default function QuestionsAdm () {

    const [questions, setQuestions] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        const funcGetQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getquestionsadm/questionsadm',{
                    withCredentials: true
                })
                setQuestions(response.data.questions)
                setUser(response.data.user)
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
                                    key={question._id}
                                    user = {user}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

function QuestionItem ({question, key, user}) {
    return (
        <>
            <div key={key} className="wrapper-questions-item">
                <div className="questions-item">
                    <div className="questions-item-title">
                        <h3 className="questions-item-title__h3">
                            Question from {user.name}
                        </h3>
                        <h3 className="questions-item-title__h3 questions-h3_email">
                            Email {user.name}: {user.email}
                        </h3>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
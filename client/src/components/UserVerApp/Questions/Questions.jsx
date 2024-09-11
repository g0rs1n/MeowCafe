import { useState, useEffect } from 'react'
import axios from 'axios'
import './Questions.scss'

export default function Questions () {

    const [answers, setAnswers] = useState([])
    const [question, setQuestion] = useState('')

    const handleChangeQuestion = (e) => {
        setQuestion(e.target.value)
    }

    const submitForm = async () => {
        try {
            
            const response = await axios.post('http://localhost:5001/api/question/savequestion',{question: question},{
                withCredentials: true
            })

            if (response.status === 200){
                alert('Вопрос сохранен!')
                setQuestion('')
            }

        } catch (error) {
            console.error('Error: questionForm api front',error)
        }
    }

    return (
        <>
            <div className='wrapper-questions-page'>
                <div className='questions-page'>
                    <div className='questions-page-title'>
                        <h2 className='questions-page-title__h2'>
                            Ask your question here
                        </h2>
                    </div>
                    <div className='wrapper-questions-form'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            submitForm()
                        }} className='questions-form'>
                            <textarea value={question} onChange={handleChangeQuestion} placeholder='Write your question here...' className='questions-form__textarea'></textarea>
                            <button className='questions-form__button' type='submit'>Send</button>
                        </form>
                    </div>
                </div>
                <div className='answers-section'>
                    <div className='answer-section-title'>
                        <p className='answer-section-title__p'>
                            Wait for the answer here (You will receive an answer as soon as the employee processes your question):
                        </p>
                    </div>
                    {
                        answers.map(answer => {
                            return (
                                <AnswerItem
                                    answer = {answer}
                                    key={answer.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

function AnswerItem ({answer, key}) {
    return (
        <>

        </>
    )
}
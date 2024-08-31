import { Link } from "react-router-dom"
import catLoginImg from '../../../assets/img/images/kitty.png'
import { useState } from "react"
import './Login.scss'

export function Login ({dispatchLogin}) {

    const [userData, setUserData] = useState({})

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <section className="login-section-wrapper">
                <div className="container-main">
                    <div className="login-section">
                        <div className="login-section-title">
                            <img className="login-section-title__img" src={catLoginImg} alt="kitty"/>
                            <h2 className="login-section-title__h2">
                                Sign in to Meow Cafe
                            </h2>
                        </div>
                        <div className="login-form-wrapper">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                fetch('http://localhost:5001/api/auth/login', {
                                    method: 'POST',
                                    headers:{
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(userData),
                                }).then(res => res.json()).then(data => console.log(data)).catch(error => console.log(error))
                                
                            }} className="login-form">
                                <label htmlFor="email">Email address</label>
                                <input name="email" type="text" id="email" className="login-input-email" 
                                onChange={handleChange}/>
                                <label htmlFor="password">Password</label>
                                <input name="password" type="text" id="password" className="login-input-password" 
                                onChange={handleChange}/>
                                <button type="submit" className="login-form-button">Sign in</button>
                            </form>
                        </div>
                        <div className="login-section-signup">
                            <p className="login-section-signup__p">
                                New to Meow Cafe? 
                            </p>
                            <Link className="login-section-signup__link" to={'/signup'}>Create an account</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
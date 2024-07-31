import { useState } from "react";
import { Link } from "react-router-dom";
import catSignupImg from '../../../assets/img/images/kitty.png'
import "./SignUp.scss"

export function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userData = {
        name: name,
        email: email,
        password: password,
    }

    return (
        <>
            <section className="signup-section-wrapper">
                <div className="container-main">
                    <div className="signup-section">
                        <div className="signup-section-title">
                            <img className="signup-section-title__img" src={catSignupImg} alt="kitty"/>
                            <h2 className="signup-section-title__h2">
                                Welcome to Meow Cafe
                            </h2>
                        </div>
                        <div className="signup-form-wrapper">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                fetch('http://localhost:5001/api/auth/register', {
                                    method: 'POST',
                                    headers:{
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(userData),
                                }).then(res => res.json()).then(data => console.log(data)).catch(error => console.log(error))
                            }} className="signup-form">
                                <label htmlFor="username">Username</label>
                                <input value={name} name="name" type="text" id="username" className="signup-input-name" 
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }} />
                                <label htmlFor="email">Email address</label>
                                <input value={email} name="email" type="text" id="email" className="signup-input-email" 
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }} />
                                <label htmlFor="password">Password</label>
                                <input value={password} name="password" type="password" id="password" className="signup-input-password" 
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}/>
                                <button type="submit" className="signup-form-button">Sign up</button>
                            </form>
                        </div>
                        <div className="signup-section-signin">
                            <p className="signup-section-signin__p">
                                Already have an account?
                            </p>
                            <Link className="signup-section-signin__link" to={'/login'}>Log in</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
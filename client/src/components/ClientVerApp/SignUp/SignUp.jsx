import { useState } from "react";
import { Link } from "react-router-dom";
import catSignupImg from '../../../assets/img/images/kitty.png'
import "./SignUp.scss"

export function SignUp({dispatchLogin}) {

    const [userData, setUserData] = useState({})

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
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
                                <input name="name" type="text" id="username" className="signup-input-name" 
                                onChange={handleChange} />
                                <label htmlFor="email">Email address</label>
                                <input name="email" type="text" id="email" className="signup-input-email" 
                                onChange={handleChange} />
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" id="password" className="signup-input-password" 
                                onChange={handleChange}/>
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
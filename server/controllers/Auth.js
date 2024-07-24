import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


// Register

export const register = async (req, res) => {

    try {
        
        const {name, email, password} = req.body

        const user = await User.findOne({name})

        if (user) {
            res.json({
                message: "Этот пользователь уже занят!"
            })
        }

        if (email === process.env.ADMIN_EMAIL) {
            user.role = 'admin'
        }

        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)

        const newUser = new User({
            name: name,
            password: hashPassword,
        })

        await newUser.save()

        const token = jwt.sign({
            id: newUser._id,
        }, process.env.JWT_SECRET, {expiresIn: '30d'})

        res.cookie('token', token, {
            httpOnly: true,
        })

        // res.redirect

    } catch (error) {
        console.error('error register', error)
    }

}

// Log In

export const login = async (req, res) => {
    try {
        
        const {name, password} = req.body

        const user = await User.findOne({name}) 

        if(!user) {
            res.json({
                message: "Пользователь не найден!"
            })
        }

        const isPassword = await bcrypt.compare(password, user.password)

        if (!isPassword) {
            res.json({
                message: "Неверный пароль!"
            })
        }

        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET, {expiresIn: '30d'})

        res.cookie('token', token, {
            httpOnly: true,
        })

        // res.redirect

    } catch (error) {
        console.error('error login', error)
    }
}

// Get Me

export const getMe = async (req, res) => {
    try {
        
        const token = req.cookies.token
        const decodedToken = jwt.decode(token)

        const user = await User.findById(decodedToken)

        if(!user) {
            res.json({
                message: "Пользователь не найден!"
            })
        }

        res.cookie('token', token, {
            httpOnly: true,
        })

    } catch (error) {
        console.error('Error: getMe', error)
    }
}

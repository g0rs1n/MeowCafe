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

        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)

        const newUser = new User({
            name: name,
            email: email,
            password: hashPassword,
        })

        if (email === process.env.ADMIN_EMAIL) {
            newUser.role = 'admin'
        }

        await newUser.save()

        const token = jwt.sign({
            id: newUser._id,
        }, process.env.JWT_SECRET, {expiresIn: '30d'})

        res.cookie('token', token, {
            httpOnly: true,
        })

        res.status(201).json({
            message: 'Вы успешно зарегестрировались!'
        })

    } catch (error) {
        console.error('error register', error)
    }

}

// Log In

export const login = async (req, res) => {
    try {
        
        const {email, password} = req.body

        const user = await User.findOne({email}) 

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

        res.status(200).json({
            message: 'Вы успешно вошли в систему!'
        })


    } catch (error) {
        console.error('error login', error)
    }
}
import { useState, useEffect, useContext } from 'react'
import { SetUserDataContext, UserDataContext } from '../Contexts'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './UserPanel.scss'

export default function UserPanel () {

    const user = useContext(UserDataContext)
    const setUser = useContext(SetUserDataContext)
    const navigate = useNavigate()
    const [changeUser, setChangeUser] = useState({})
    const [editButton, setEditButton] = useState(true)

    const handleChangeUser = (e) => {
        setChangeUser({
            ...changeUser,
            [e.target.name]: e.target.value
        })
    }

    const toggleEditMode = () => {
        setEditButton(!editButton)
    }

    const funcUpdateUser = async () => {
        try {

            const response = await axios.patch('http://localhost:5001/api/updateuser/upduser',{
                changeUser: changeUser
            },{
                headers:{
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            setUser(response.data)

            
        } catch (error) {
            console.error('Error: api updateUser front', error)
        }
    }

    const handleClickMark = () => {
        navigate(-1)
    }

    const handleEditButton = () => {
        if (!editButton) {
            funcUpdateUser()
        }
        toggleEditMode()
    }

    useEffect(() => {
        setChangeUser(user)
    },[user])

    return (
        <>
            <div className='wrapper-userpanel-page'>
                <div className='userpanel-page'>
                    <div onClick={handleClickMark} className='userpanel-clickmark'></div>
                    <div className='userpanel-title'>
                        <h2 className='userpanel-title__h2'>
                            User Information
                        </h2>
                    </div>
                    <div className='userpanel-main'>
                        <p className='userpanel-main__p userpanel-p-name'>
                            Name: {!editButton ? <input className='userpanel-input userpanel-input_name' name='name' value={changeUser.name} onChange={handleChangeUser} type="text" /> : changeUser.name}
                        </p>
                        <p className='userpanel-main__p userpanel-p-email'>
                            Email: {!editButton ? <input className='userpanel-input userpanel-input_email' name='email' value={changeUser.email} onChange={handleChangeUser} type="text" /> : changeUser.email}
                        </p>
                        <p className='userpanel-main__p userpanel-p-phone'>
                            Phone: {!editButton ? <input className='userpanel-input userpanel-input_phone' name='phone' value={changeUser.phone} onChange={handleChangeUser} type="text" /> : 
                            !changeUser.phone ? "Number not specified" : changeUser.phone}
                        </p>
                    </div>
                    <div className='userpanel-button'>
                        <button onClick={handleEditButton} className='userpanel-button__button'>
                            {
                                editButton ? 'Edit' : 'Save'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
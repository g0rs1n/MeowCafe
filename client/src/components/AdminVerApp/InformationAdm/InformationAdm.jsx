import axios from "axios";
import {useEffect, useState} from "react";
import iconsChange from '../../../assets/img/icons/reservationitem-icons/pen.png'
import './InformationAdm.scss'

export default function InformationAdm () {

    const [initialInformation, setInitialInformation] = useState({})
    const [information, setInformation] = useState({})
    const [changeInformation, setChangeInformation] = useState({})
    const [changeButton, setChangeButton] = useState(true)
    const [isInitial, setIsInitial] = useState(false)

        useEffect(() => {
            const funcGetInformation = async () => {
                try {

                    const response = await axios.get('http://localhost:5001/api/getinformationadm/information',{
                        withCredentials: true
                    })

                    if (response.data !== null){
                        setInformation(response.data)
                        setChangeInformation(response.data)
                    } else {
                        setIsInitial(!isInitial)
                    }
                    
                } catch (error) {
                    console.error("Error: get information Adm front", error)
                }
            }
            funcGetInformation()
        },[])

    const funcChangeStatusInformation = async () => {
        try {
            
            const response = await axios.patch('http://localhost:5001/api/updatestatusinfadm/status',{
                informationId: information._id,
                information: information
            },{
                withCredentials: true
            })

            setInformation(response.data)

        } catch (error) {
            console.error("Error: change status information adm front", error)
        }
    }
    
    const handleChangeInitialInformation = (e) => {
        setInitialInformation({
            ...initialInformation,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeInformation = (e) => {
        setChangeInformation({
            ...changeInformation,
            [e.target.name]: e.target.value
        })
    }

    const funcChangeInformation = async () => {
        try {

            const response = await axios.patch('http://localhost:5001/api/updateinformationadm/information',{
                newInformation: changeInformation,
                informationId: information._id
            },{
                withCredentials: true
            })
            setInformation(response.data)
            
        } catch (error) {
            console.error("Error: change Information Adm front", error)
        }
    }

    const handleButtonChange = () => {
        if (!changeButton){
            funcChangeInformation()
        }
        toggleEditMode()
    }

    const toggleEditMode = () => {
        setChangeButton(!changeButton)
    }

    const funcPostInitialInformation = async () => {
        try {
            
            const response = await axios.post('http://localhost:5001/api/initialInfo/information',{
                initialInformation: initialInformation
            },{
                withCredentials: true
            })

            if (response.status === 200) {
                alert('Информация сохранена!')
                setInformation(response.data.information)
                setChangeInformation(response.data.information)
                setIsInitial(false)
            }
            
        } catch (error) {
            console.error("Error: post initialInformation adm front", error)
        }
    }


    return (
        <>
            <div className='wrapper-information-page'>
                <div className={`information-page ${!isInitial ? "information-page_none-footer" : ""}`}>
                    <div className="information-page-title">
                        <h3 className="information-page-title__h3">
                            Information for you!
                        </h3>
                    </div>
                    <div className="wrapper-information-main">
                        <div className="information-main">
                            <div className="information-main-status information-main_section">
                                <div className="information-status information-block-status">
                                    <h3 className="information-status__h3">
                                        We are:
                                    </h3>
                                    <span className={`information-status__span ${information.status === 'Closed' ? "information-status_span-closed" : "information-status_span-open"}`}>
                                        {information.status}
                                    </span>
                                </div>
                                <div className="information-status-buttons">
                                    <button onClick={funcChangeStatusInformation} className="information-status-buttons__button">
                                        Change to {information.status === 'Closed' ? "open" : "closed"}
                                    </button>
                                </div>
                            </div>
                            <div className="information-main-times information-main_section">
                                <div className="information-times information-block">
                                    <h3 className="information-times__h3">
                                        Times for which there are no reservations
                                    </h3>
                                    {
                                        !changeButton ? 
                                        <input value={changeInformation.resTimes} onChange={handleChangeInformation} name="resTimes" type="text" className="information-times__input information-main_input"/>
                                        :
                                        isInitial ?
                                        <input name="resTimes" value={initialInformation.resTimes || ''} onChange={handleChangeInitialInformation} type="text" className="information-times__input information-main_input" />
                                        :
                                        <p className="information-times__p">
                                            {information.resTimes}
                                        </p> 
                                    }
                                </div>
                            </div>
                            <div className="information-main-days information-main_section">
                                <div className="information-days information-block">
                                    <h3 className="information-days__h3">
                                        Our schedule this week
                                    </h3>
                                    {
                                        !changeButton ? 
                                        <input value={changeInformation.daysWork} onChange={handleChangeInformation} name="daysWork" type="text" className="information-days__input information-main_input"/>
                                        :
                                        isInitial ?
                                        <input name="daysWork" value={initialInformation.daysWork || ''} onChange={handleChangeInitialInformation} type="text" className="information-days__input information-main_input" />
                                        :
                                        <p className="information-days__p">
                                            {information.daysWork}
                                        </p>
                                    }
                                </div>
                            </div>
                            <div className="information-main-contacts information-main_section">
                                <div className="wrapper-information-contacts">
                                    <div className="information-contacts-title">
                                        <h3 className="information-contacts-title__h3">
                                            Our Contacts
                                        </h3>
                                    </div>
                                    <div className="information-contacts information-block-contacts">
                                        <div className="wrapper-contacts-phone">
                                            <p className="contacts-phone__p">
                                                Phone number:
                                            </p>
                                            {
                                                !changeButton ? 
                                                <input value={changeInformation.phone} onChange={handleChangeInformation} name="phone" type="text" className="contacts-phone__input information-main_input"/>
                                                :
                                                isInitial ?
                                                <input name="phone" value={initialInformation.phone || ''} onChange={handleChangeInitialInformation} type="text" className="information-phone__input information-main_input" />
                                                :
                                                <span className="contacts-phone__span">
                                                    {information.phone}
                                                </span>
                                            }
                                            
                                        </div>
                                        <div className="wrapper-contacts-address">
                                            <p className="contacts-address__p">
                                                Our address:
                                            </p>
                                            {
                                                !changeButton ? 
                                                <input value={changeInformation.address} onChange={handleChangeInformation} name="address" type="text" className="contacts-address__input information-main_input"/>
                                                :
                                                isInitial ?
                                                <input name="address" value={initialInformation.address || ''} onChange={handleChangeInitialInformation} type="text" className="information-address__input information-main_input" />
                                                :
                                                <span className="contacts-address__span">
                                                    {information.address}
                                                </span>  
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="information-main-buttons">
                            {
                                changeButton ?
                                <img onClick={handleButtonChange} className="information-main-buttons__img" src={iconsChange} alt="changeButton" />
                                :
                                <button onClick={handleButtonChange} className="information-main-buttons__button">
                                    Save
                                </button>
                            }
                        </div>
                    </div>
                    {
                        !isInitial ? 
                        '' :
                        <div className="wrapper-information-footer">
                            <div className="information-footer">
                                <p className="information-footer__p">
                                    Before you begin, fill out the required information (not all fields are required)
                                </p>
                            </div>
                            <div className="information-footer-buttons">
                                <button onClick={funcPostInitialInformation} className="information-footer-buttons__button">
                                    Send
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
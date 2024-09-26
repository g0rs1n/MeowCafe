import axios from "axios"
import { useState, useEffect } from "react"
import "./Information.scss"
import "../../AdminVerApp/InformationAdm/InformationAdm.scss"

export default function Information () {
    const [information, setInformation] = useState(null)

    useEffect(() => {
        const funcGetInformation = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/getinformation/information',{
                    withCredentials: true
                })
                setInformation(response.data)
            } catch (error) {
                console.error("Error: get information adm front", error)
            }
        }
        funcGetInformation()
    },[information])


    return (
        <>
            {
                information === null ?
                <div className="wrapper-none-information">
                    <div className="none-information">
                        <h2 className="none-information__h2">
                            Please wait, information loading...
                        </h2>
                    </div>
                </div> 
                :
                <div className='wrapper-information-page'>
                    <div className='information-page-userver information-page_userver'>
                        <div className="information-page-title">
                            <h3 className="information-page-title__h3">
                                Information for you!
                            </h3>
                        </div>
                        <div className="information-main">
                            <div className="information-main-status information-status_userver">
                                <h3 className="information-main-status__h3">
                                    We are:
                                </h3>
                                <span className={`information-main-status__span ${information.status === "Closed" ? "information-status_closed" : "information-status_open"}`}>
                                    {information.status}
                                </span>
                            </div>
                            <div className="information-main-times information-times_userver">
                                <h3 className="information-main-times__h3">
                                    Times for which there are no reservations
                                </h3>
                                <p className="information-main-times__p">
                                    {information.resTimes}
                                </p>
                            </div>
                            <div className="information-main-days information-days_userver">
                                <h3 className="information-main-days__h3">
                                    Our schedule this week
                                </h3>
                                <p className="information-main-days__p">
                                    {information.daysWork}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
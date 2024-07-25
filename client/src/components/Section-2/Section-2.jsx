import './Section-2.scss'

export function Section_2 () {
    return (
        <>
            <section className='section-second-wrapper'>
                <div className='container-main'>
                    <div className='section-second'>
                        <div className='section-second-title'>
                            <h2 className='section-second-title__h2'>
                                Our Schedule
                            </h2>
                        </div>
                        <div className='schedule-spisok-wrapper'>
                            <ul className='schedule-spisok'>
                                <li className='schedule-spisok__item'>Monday</li>
                                <li className='schedule-spisok__item'>Tuesday</li>
                                <li className='schedule-spisok__item'>Wednesday</li>
                                <li className='schedule-spisok__item'>Thursday</li>
                                <li className='schedule-spisok__item'>Friday</li>
                                <li className='schedule-spisok__item'>Saturday</li>
                                <li className='schedule-spisok__item'>Sunday</li>
                            </ul>
                            <ul className='schedule-spisok'>
                                <li className='schedule-spisok__item'>9:00 - 20:00</li>
                                <li className='schedule-spisok__item'>9:00 - 20:00</li>
                                <li className='schedule-spisok__item'>9:00 - 20:00</li>
                                <li className='schedule-spisok__item'>9:00 - 20:00</li>
                                <li className='schedule-spisok__item'>9:00 - 20:00</li>
                                <li className='schedule-spisok__item'>9:00 - 20:00</li>
                                <li className='schedule-spisok__item'>Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
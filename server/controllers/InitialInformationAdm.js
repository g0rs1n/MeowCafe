import Information from '../models/Information.js'

export const initialInformationAdm = async (req,res) => {
    try {

        const initialInformation = req.body.initialInformation

        const newInformation = new Information({...initialInformation})

        await newInformation.save()

        res.status(200).json({
            information: newInformation,
            message: "Вы успешно сохранили информацию!"
        })
        
    } catch (error) {
        console.error("Error: initialInformation back", error)
    }
}
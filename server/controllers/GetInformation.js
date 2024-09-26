import Information from '../models/Information.js'

export const getInformation = async (req, res) => {
    try {

        const information = await Information.findOne()

        if (!information) {
            return res.status(200).json(null)
        }

        res.json(information)
        
    } catch (error) {
        console.error("Error: get information user back", error)
    }
}
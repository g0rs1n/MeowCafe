import Information from "../models/Information.js";

export const updateInformationAdm = async (req, res) => {
    try {

        const informationId = req.body.informationId
        const newInformation = req.body.newInformation

        const changeInformation = await Information.findByIdAndUpdate(informationId, newInformation, {
            new: true,
            runValidators: true
        })

        if (!changeInformation) {
            return res.status(500).json({
                message: "Не удалось обновить информацию!"
            })
        }

        res.json(changeInformation)
        
    } catch (error) {
        console.error("Error: change information adm back", error)
    }
}
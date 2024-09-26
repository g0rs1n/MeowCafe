import Information from '../models/Information.js'

export const updateStatusInfAdm = async (req, res) => {
    try {
        
        const informationId = req.body.informationId
        const information = req.body.information

        const newStatus = information.status === "Closed" ? "Open" : "Closed"
        
        const changeInformation = await Information.findByIdAndUpdate(informationId, {
            status: newStatus
        },{
            new: true,
            runValidators: true
        })

        if (!changeInformation) {
            return res.status(500).json({
                message: "Не удалось обновить статус!"
            })
        }

        res.json(changeInformation)

    } catch (error) {
        console.error("Error: update status to open information adm back", error)
    }
}
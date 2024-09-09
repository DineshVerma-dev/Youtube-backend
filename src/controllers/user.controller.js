import {asyncHandler} from "../utils/aynchandler.js"

const registerUser = asyncHandler(async (req,res) => {
    res.status(200).json({
        message : 'Learning Backend from chai and code'
    })
})

export {registerUser}
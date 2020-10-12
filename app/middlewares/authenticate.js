const jwt = require('jsonwebtoken')

const authenticateUser = (req,res,next) =>{
    const token = req.headers.authorization
    if(token){
        let tokenData
        try {
            tokenData = jwt.verify(token,'miniLearingApp@123')
            req.userId = tokenData.id
            // console.log('req inside if',req)
            next()

        } catch (e) {
            res.status('401').json({ error : e.message })
        }
    }
    else{
        res.status('401').json({ error : "token not provided" })
    }
}

module.exports = {
    authenticateUser
}
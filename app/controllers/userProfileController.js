const profileModel = require('../models/userProfile')
const profileController = {}

profileController.listAll = (req,res) => {
    profileModel.find()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

profileController.list = (req,res) => {
    profileModel.find({ userId : req.userId })
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

profileController.create = (req,res) => {
    const body = req.body
    const course = new profileModel(body)
    course.userId = req.userId
    course.save()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

profileController.show = (req,res) => {
    const id = req.params.id
    profileModel.findOne({ _id: id , userId : req.userId })
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

profileController.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    profileModel.findOneAndUpdate({_id : id , userId : req.userId } , body , {new : true , runValidators : true , useFindAndModify:false})
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

profileController.destroy = (req,res) => {
    const id = req.params.id
    profileModel.findOneAndDelete({_id : id , userId : req.userId }, {useFindAndModify:false})
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = profileController
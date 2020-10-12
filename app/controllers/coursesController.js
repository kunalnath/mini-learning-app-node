const courseModel = require('../models/course')
const coursesController = {}

coursesController.listAll = (req,res) => {
    courseModel.find()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

coursesController.list = (req,res) => {
    courseModel.find({ userId : req.userId })
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

coursesController.create = (req,res) => {
    const body = req.body
    const course = new courseModel(body)
    course.userId = req.userId
    course.save()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

coursesController.show = (req,res) => {
    const id = req.params.id
    courseModel.findOne({ _id: id , userId : req.userId })
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

coursesController.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    courseModel.findOneAndUpdate({_id : id , userId : req.userId } , body , {new : true , runValidators : true , useFindAndModify:false})
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

coursesController.destroy = (req,res) => {
    const id = req.params.id
    courseModel.findOneAndDelete({_id : id , userId : req.userId }, {useFindAndModify:false})
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = coursesController
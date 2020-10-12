const studentModel = require('../models//student')

const studentController = {}

studentController.listAll = (req,res) => {
    studentModel.find()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

studentController.list = (req,res) => {
    studentModel.find({ userId : req.userId })
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

studentController.create = (req,res) => {
    const body = req.body
    const student = new studentModel(body)
    student.userId = req.userId
    student.save()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

studentController.show = (req,res) => {
    const id = req.params.id
    studentModel.findOne({ _id: id , userId : req.userId })
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

studentController.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    studentModel.findOneAndUpdate({_id : id , userId : req.userId } , body , {new : true , runValidators : true , useFindAndModify:false})
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

studentController.destroy = (req,res) => {
    const id = req.params.id
    studentModel.findOneAndDelete({_id : id , userId : req.userId }, {useFindAndModify:false})
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = studentController
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref:'User'
    },
    course : {
        type : Schema.Types.ObjectId,
        ref : 'courseModel'
    },
    studentName : {
        type : String,
        required: [true, 'student name is required']
    },
    email : {
        type : String,
        required: [true, 'email is required']
    },
    mobile : {
        type : String,
        required: [true, 'mobile is required']
    }
})

const studentModel = mongoose.model('studentModel',studentSchema)

module.exports = studentModel
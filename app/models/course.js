const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref:'User'
    },
    courseName : {
        type : String,
        required: [true, 'Course Name is required']
    },
    courseDept : {
        type : String,
        required: [true, 'course Dept is required']
    },
    desc : {
        type : String
    },
    courseRoom : {
        type : String,
        required: [true, 'course Room is required']
    },
    waitlistCapacity : {
        type : String
    },
    courseTeam : {
        type : String
    }
})

const courseModel = mongoose.model('courseModel',courseSchema)

module.exports = courseModel
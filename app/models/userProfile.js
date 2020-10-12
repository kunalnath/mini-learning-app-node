const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref:'User'
    },
    name : {
        type : String,
        required: [true, 'user Name is required']
    },
    email : {
        type : String,
        required: [true, 'email is required']
    },
    mobile : {
        type : String,
        required: [true, 'mobile No is required']
    },
    aboutMe : {
        type : String
    },
    city : {
        type : String,
        required: [true, 'city is required']
    },
    country : {
        type : String,
        required: [true, 'country is required']
    },
    company : {
        type : String,
        required: [true, 'company is required']
    },
    school : {
        type : String,
        required: [true, 'school is required']
    },
    hometown : {
        type : String,
        required: [true, 'hometown is required']    
    },
    language : {
        type : String,
        required: [true, 'language is required']
    },
    gender : {
        type : String,
        required: [true, 'gender is required']
    }
})

const profileModel = mongoose.model('profileModel',profileSchema)

module.exports = profileModel
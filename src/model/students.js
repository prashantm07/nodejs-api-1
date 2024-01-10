const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({

    student_id :{
        type : "String",
        required : true,
        unique : true
    },
    first_name :{
        type : "String",
        required : true,
        trim : true
    },
    last_name :{
        type : "String",
        required : true,
        trim : true
    },
    gender :{
        type : "String",
        required : true,
        trim : true
    },
    address :{
        type : "String",
        required : true,
        trim : true
    },
    city :{
        type : "String",
        required : true,
        trim : true
    },
    state :{
        type : "String",
        required : true,
        trim : true
    },
    country :{
        type : "String",
        required : true,
        trim : true
    },
    phone :{
        type : "String",
        required : true,
        trim : true
    }

});
//creating a new collection 
const studentsData = new mongoose.model("studentsData", studentsSchema );

module.exports = studentsData;
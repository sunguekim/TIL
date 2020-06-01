var mongoose  =require('mongoose');

const Schema = mongoose.Schema;

const Survey = new Schema({
    gender:{
        Question:String,
        Answer:String
    },
    animal:{
        Question:String,
        Answer:String
    }
})

module.exports=mongoose.model('survey',Survey);
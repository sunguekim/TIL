var mongoose  =require('mongoose');

const Schema = mongoose.Schema;

const Survey = new Schema({
    gender:{type:String},
    animal:{type:String},
    
},{ 
    
    versionKey: false
})

module.exports=mongoose.model('survey',Survey);
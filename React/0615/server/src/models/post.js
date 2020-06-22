const mongoose = require('mongoose');

const {Schema} = mongoose;

const PostSchema = new Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    tags:[String],
    publishedDate:{
        type:Date,
        default:Date.now,
    },
    user:{
        _id:mongoose.Types.ObjectId,
        username:String,
    }
});

const Post = mongoose.model('Post',PostSchema);
export default Post